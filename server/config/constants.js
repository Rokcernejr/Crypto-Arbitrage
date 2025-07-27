module.exports = {
    // Trading pairs
    TRADING_PAIRS: ['BTC/USD', 'ETH/USD', 'SOL/USD'],
    
    // Exchange identifiers
    EXCHANGES: {
        KRAKEN: 'kraken',
        COINBASE: 'coinbase'
    },
    
    // Order types
    ORDER_TYPES: {
        MARKET: 'market',
        LIMIT: 'limit'
    },
    
    // Order sides
    ORDER_SIDES: {
        BUY: 'buy',
        SELL: 'sell'
    },
    
    // Trading limits
    LIMITS: {
        MIN_TRADE_SIZE_USD: 10,
        MAX_TRADE_SIZE_USD: 100000,
        MIN_PROFIT_THRESHOLD: 0.1,  // 0.1%
        MAX_PROFIT_THRESHOLD: 10,   // 10%
        MAX_SLIPPAGE: 1.0          // 1%
    },
    
    // Time constants
    TIMEOUTS: {
        ORDER_FILL: 30000,         // 30 seconds
        API_REQUEST: 10000,        // 10 seconds
        WEBSOCKET_RECONNECT: 5000  // 5 seconds
    },
    
    // API endpoints
    API_ENDPOINTS: {
        KRAKEN: {
            REST: 'https://api.kraken.com',
            WS: 'wss://ws.kraken.com'
        },
        COINBASE: {
            REST: 'https://api.pro.coinbase.com',
            WS: 'wss://ws-feed.pro.coinbase.com'
        }
    },
    
    // Status codes
    STATUS: {
        SUCCESS: 'success',
        PENDING: 'pending',
        FAILED: 'failed',
        CANCELLED: 'cancelled'
    },
    
    // Event types
    EVENTS: {
        TRADE_EXECUTED: 'trade_executed',
        OPPORTUNITY_FOUND: 'opportunity_found',
        BALANCE_UPDATE: 'balance_update',
        ERROR: 'error',
        WARNING: 'warning',
        INFO: 'info'
    },
    
    // Chart configuration
    CHARTS: {
        MAX_PERIODS: 20,
        TRADES_PER_PERIOD: 20,
        UPDATE_INTERVAL: 1000  // 1 second
    },
    
    // Network fees (fallback values in USD)
    NETWORK_FEES: {
        BTC: 15,
        ETH: 8,
        SOL: 0.5,
        USDC: 5,
        USDT: 5
    },
    
    // Colors for UI
    COLORS: {
        PROFIT: '#4CAF50',
        LOSS: '#F44336',
        BTC: '#FFA726',
        ETH: '#42A5F5',
        SOL: '#AB47BC',
        NEUTRAL: '#666666'
    }
};
