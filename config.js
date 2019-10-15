
// Remove commented lines below to use .env file
// const dotenv = require('dotenv');
// dotenv.config();

module.exports = {
  serverPort: 5000, // process.env.PORT
  dbUrl: "mongodb://mongo:27017/data-nexus-db", // process.env.DB_URL
  mongooseOptions: {
    autoIndex: false, // Don't build indexes
    reconnectTries: 30, // Retry up to 30 times
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  apiVersion: 'v1'
}