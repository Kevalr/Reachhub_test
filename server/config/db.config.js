module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "root",
    DB: "reachhub_task",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 3000000,
      idle: 10000
    }
  };