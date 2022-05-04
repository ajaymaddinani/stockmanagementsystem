import requests
import pandas as pd


backend_url = 'http://127.0.0.1:8000/'
stock_info_method = 'stockinfo'


def fetch_training_data(ticker):
    query = {'stock_code': ticker}
    response = requests.get(backend_url+stock_info_method, params=query)
    return pd.DataFrame(response.json())


if __name__ == '__main__':
    df = fetch_training_data('aeo')
    print(df.head())
