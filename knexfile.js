module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/meetup_db'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
