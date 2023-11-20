const knexConfig = {
  client: 'mssql',
  connection: {
    host: 'localhost',
    user: 'sa', 
    password: 'GGwpzxc1!', 
    database: 'Covoiturage', 
    port: 1433, 
    options: {
      encrypt: false, 
    },
  },
};

module.exports = {
  knexConfig,
};
