const app = require('./app');
const mongoose = require('mongoose');
const env = require('env2')('./config.env');

const port = process.env.PORT || 8080;

app.listen(port, () =>
  { console.log(`Node/Express server running on port ${port}`);})

const options = {
  useNewUrlParser: true
}

mongoose.connect(process.env.DB_CONNECTION, options)

const db = mongoose.connection;

db.once('open', () => console.log('connected to the database'))
db.on('error', console.error.bind(console, 'MongoDB connection error'));
