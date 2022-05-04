from data_scripts.spp_backend import fetch_training_data
import os
import glob
from statsmodels.tsa.seasonal import seasonal_decompose
from helper_scripts import config, helper
import plotly.graph_objects as go
from keras.layers import Dense, LSTM
from keras.models import Sequential
from sklearn.preprocessing import MinMaxScaler
from keras.preprocessing.sequence import TimeseriesGenerator
from sklearn.metrics import mean_squared_error
from pandas import datetime
from pandas.tseries.offsets import DateOffset
import statsmodels.api as sm
from statsmodels.tsa.stattools import adfuller, kpss
from statsmodels.graphics.tsaplots import plot_acf, plot_pacf
from pandas.plotting import autocorrelation_plot
from pandas.plotting import lag_plot
import seaborn as sns
from matplotlib import pyplot
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
from math import sqrt
import warnings
warnings.filterwarnings("ignore")
#


def evaluate_arma_model(X, arma_order):
    model = sm.tsa.ARMA(X, order=arma_order)
    model_fit = model.fit()
    return model_fit.bic, model_fit.pvalues.max(), (model_fit.resid**2).sum()


def time_series_prediction(ticker, model_type):
    # ARMA Model

    # prepare training data
    df = fetch_training_data(ticker)
    df.set_index('Date', inplace=True)
    df.head()


# evaluate combinations of p, q values for an ARMA model


def evaluate_models(dataset, p_values, q_values):
    dataset = dataset.astype('float32')
    best_score, best_cfg = float("inf"), None
    for p in p_values:
        for q in q_values:
            order = (p, q)
            try:
                BIC, p_value, RSS = evaluate_arma_model(dataset, order)
                # if p_value < 0.05 and BIC < best_score:
                if BIC < best_score:
                    best_score, best_cfg = BIC, order
                    print('ARMA%s BIC=%.3f RSS=%.3f' % (order, BIC, RSS))
            except:
                continue
    return best_cfg


# evaluate parameters
p_values = range(0, 5)
q_values = range(0, 5)

warnings.filterwarnings("ignore")
(p_optimal_arma, q_optimal_arma) = evaluate_models(
    Stock_df['Close'], p_values, q_values)
print('Best fit model is ARMA(%s, %s)' % (p_optimal_arma, q_optimal_arma))

Stock_df.reset_index(inplace=True)
f, ax = plt.subplots(figsize=(20, 8))
ax.plot(Stock_df['Close'].dropna(), 'b', label="original", color='blue')
arma = sm.tsa.ARMA(Stock_df['Close'].dropna().values,
                   order=(p_optimal_arma, q_optimal_arma))
arma_fit = arma.fit()
ax.plot(arma_fit.predict(), 'r', label="ARMA (" +
        str(p_optimal_arma)+", "+str(q_optimal_arma)+")", color='red')
Stock_df['Predict'] = arma_fit.predict()
plt.legend()
plt.xlabel("Time (days)")
plt.ylabel("Stock price")
plt.show()

Stock_df.set_index('Date', inplace=True)
Stock_df = Stock_df[['Close', 'Predict']]
extra_dates = [Stock_df.index[-1] + DateOffset(days=d) for d in range(1, 180)]
forecast_df = pd.DataFrame(index=extra_dates, columns=Stock_df.columns)
forecast_df['Predict'] = arma_fit.predict(
    start=Stock_df.shape[0] - 1, end=Stock_df.shape[0] + len(extra_dates) - 2)

# plt.figure(figsize=(17,7))
# plt.plot(Stock_df['Close'], 'green', color='blue', label='Actual Price')
# plt.plot(forecast_df['Predict'], color='red', marker='o', linestyle='dashed', label='Predicted Price')
# plt.title('Stock Price Prediction')
# plt.xlabel('Dates')
# plt.ylabel('Stock Price')
# plt.legend()

model = sm.tsa.ARMA(Stock_df['Close'], order=(p_optimal, q_optimal))
fitted = model.fit(disp=-1)
print(fitted.summary())

# Forecast
fc, se, conf = fitted.forecast(179, alpha=0.05)  # 95% conf

# Make as pandas series
fc_series = pd.Series(fc, index=forecast_df.index)
lower_series = pd.Series(conf[:, 0], index=forecast_df.index)
upper_series = pd.Series(conf[:, 1], index=forecast_df.index)

# Plot
plt.figure(figsize=(12, 5), dpi=100)
plt.plot(Stock_df['Close'], label='Actual Price')
plt.plot(fc_series, label='Forecast ARMA (' +
         str(p_optimal)+', '+str(q_optimal)+')')
plt.fill_between(lower_series.index, lower_series, upper_series,
                 color='k', alpha=.15)
plt.title('Stock Price Prediction using ARMA model')
plt.legend(loc='best', fontsize=8)
plt.xlabel('Time')
plt.ylabel('Stock Price')
plt.show()


if __name__ == '__main__':
    time_series_prediction('aeo', 'arma')
