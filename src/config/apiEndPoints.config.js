import { dateTo, dateFrom } from './core.config'

export const authAPI = {
    url: `http://localhost:4000/token`,
    key: 'getTokenKey',
};

export const searchDataAPI = {
    url: `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${dateTo}`,
    key: 'getSearchData',
};

export const getStockInfoAPI = {
    url: `https://api.polygon.io/v2/aggs/ticker/{STOCK_NAME}/range/1/day/${dateFrom}/${dateTo}?adjusted=true&sort=desc&limit=6`,
    key: 'getStockInfoAPI',
};