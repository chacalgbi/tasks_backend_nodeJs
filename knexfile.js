module.exports = {
    client: 'mysql2',
    connection: {
      host : '192.168.100.3',
      port : 3306,
      database: 'tasks',
      user:     'root',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
