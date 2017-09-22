module.exports = {
    client: 'mysql',
    connection: {
      host : 'us-cdbr-iron-east-05.cleardb.net',
      user : 'b7904d2ddd5c09',
      password : '82a3315e',
      database : 'heroku_c83e728a5fec512'
      // filename: process.env.TESTING ? "./tests/e2e/db/matterwiki.sqlite" : "./db/matterwiki.sqlite"
    },
    useNullAsDefault: true
  }


/*
The development object is the connection object for the development database.
We need to create more for different environments (production, testing, staging).
This environment is being used in the db.js file in the root directory. Check there.
*/
