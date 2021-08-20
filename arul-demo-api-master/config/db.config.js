module.exports = {
  HOST: "localhost",
  username: "postgres",
  password: "postgres",
  database: "test",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};