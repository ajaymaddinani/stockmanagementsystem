from fastapi import FastAPI
from Load_hist_stock_info import *

from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost:3000",
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


db = None


@app.get("/")
def start():
    set_environment()
    global db
    db = init_connection_engine()
    return {"DB Connection Successfull.. waiting for other requests"}


@app.get("/lasttraded")
async def get_latest_stock_info():
    set_environment()
    global db
    db = init_connection_engine()
    with db.connect() as conn:
        return get_last_traded_info(conn)


@app.get("/stockinfo")
async def get_stock_hist(stock_code: str):
    set_environment()
    global db
    db = init_connection_engine()
    with db.connect() as conn:
        return get_stock_prices(conn, stock_code)


@app.get("/closepredictions")
async def get_stock_close_predictions(stock_code: str, model_type: str):
    return {"ran time series model -  {} for the stock : {}".format(model_type, stock_code)}
