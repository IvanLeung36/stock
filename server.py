import yfinance as yf
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    'https://ivan-stocks.up.railway.app',
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_stock_data(symbol: str):
    stock = yf.Ticker(symbol)
    hist = stock.history(period="1d", interval="1m")
    latest_data = hist.tail(1)
    price = latest_data['Close'].iloc[0]
    return price

@app.get("/api/stock/{symbol}")
async def get_stock(symbol: str):
    price = get_stock_data(symbol)
    return {"symbol": symbol, "price": price}

@app.get("/")
async def root():
    return {"message": "Hello World"}

# Run with 'uvicorn server:app --reload'