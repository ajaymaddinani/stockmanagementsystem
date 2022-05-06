import logging
import os
import ssl
import sqlalchemy
import pandas as pd
from helper_scripts.helper import *
from io import StringIO, BytesIO

logger = logging.getLogger()


def set_environment():
    # environment variables
    os.environ.setdefault('DEBUG', 'True')
    os.environ.setdefault('DB_HOST', '34.66.72.138')
    os.environ.setdefault('DB_PORT', '5432')
    os.environ.setdefault('DB_NAME', 'SPP')
    os.environ.setdefault('DB_USER', 'team3user')
    os.environ.setdefault('DB_PASS', 'team3user')
    os.environ.setdefault('INSTANCE_CONNECTION_NAME',
                          'model-factor-347514:us-central1:team3db')
    os.environ.setdefault(
        'DB_ROOT_CERT', './Setup_CloudSQL/server-ca.pem')
    os.environ.setdefault(
        'DB_CERT', './Setup_CloudSQL/client-cert.pem')
    os.environ.setdefault(
        'DB_KEY', './Setup_CloudSQL/client-key.pem')


def get_last_traded_info(conn):
    last_traded_data = conn.execute(
        "SELECT * FROM vw_last_traded_stocks_data "
        "ORDER BY name DESC"
    ).fetchall()
    return last_traded_data


def get_stock_prices(conn, stock_code):
    stmt = sqlalchemy.text(
        "select traded_date as Date,open_val as Open,high_val as High,low_val as Low,close_val as Close,cast(volume_val as int) as Volume,cast(openint_val as int) as OpenInt "
        "from stg_hist_stock_details where stock_code=:stock_code order by traded_date asc")
    # Count number of votes for tabs
    tab_result = conn.execute(stmt, stock_code=stock_code).fetchall()
    logger.info(len(tab_result))
    return tab_result


def load_data(df, tblName):
    try:
        with db.begin() as connection:
            df.to_sql(tblName, chunksize=5000, index=False,
                      con=connection, if_exists='append', method='multi')
            connection.execute('commit;')
    except Exception as e:
        logger.exception(e)


def load_advn_data_files(filepath, filename):
    df = pd.read_csv(filepath)
    df.insert(0, 'stock_code', str.split(filename, sep=".")[0])
    df.columns = ['stock_code', 'traded_date', 'open_val',
                  'high_val', 'low_val', 'close_val', 'volume_val', 'openint_val']
    df["traded_date"] = pd.to_datetime(df["traded_date"])
    load_data(df, 'stg_hist_stock_details')


def load_nasdaq_data_files(filepath, filename):
    try:
        df = pd.read_csv(filepath)
        df.insert(0, 'stock_symbol', str.split(filename, sep=".")[0])
        df.columns = ['stock_symbol', 'traded_date', 'close_',
                      'volume', 'open_', 'high', 'low']
        df["traded_date"] = pd.to_datetime(df["traded_date"])
        data = df.replace({"\$": ""}, regex=True)
        data = data.astype(
            {'open_': 'float64', 'close_': 'float64', 'high': 'float64', 'low': 'float64'})
        load_data(data, 'stg_nasadaq_stocks_hist')
    except Exception as e:
        logger.exception(e)


if __name__ == '__main__':
    set_environment()
    global db
    try:
        db = init_connection_engine()
    except Exception as e:
        logger.exception(e)

    file_dir = "C:\\Personal\\Certifications\\APCDS\\CapstoneProject\\Data_Engineering\\Data\\Landing"
    for filename in os.listdir(file_dir):
        load_nasdaq_data_files(os.path.join(file_dir, filename), filename)
