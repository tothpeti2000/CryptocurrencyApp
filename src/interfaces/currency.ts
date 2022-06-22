export interface Asset {
  asset_id: string;
  name: string;
  price_usd: number;
}

export interface WsData {
  price_high: number;
  price_low: number;
  symbol_id: string;
}

export interface ExchangeRate {
  time_period_start: string;
  rate_high: number;
  rate_low: number;
}

export interface ErrorMessage {
  message: string;
}
