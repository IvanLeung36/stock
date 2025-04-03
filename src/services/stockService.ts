import axios from "axios";

let API_URL = "https://ivan-stocks.up.railway.app/api/stock";

export let getStockData = async (symbol: string) => {
  try {
    let response = await axios.get(`${API_URL}/${symbol}`);
    return response.data;
  } catch (error) {
    console.error("Stock doesn't exist", error);
    throw error;
  }
};

