const config = {
    development: {
        client: process.env['DATABASE_DRIVER'],
        connection: {
            database: process.env['DATABASE_NAME'],
            host: process.env['DATABASE_HOST'],
            user: process.env['DATABASE_USER'],
            password: process.env['DATABASE_PASS'],
            port: process.env['DATABASE_PORT'],
        },
        pool: {
            min: 1,
            max: 1,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
    production: {
        client: process.env['DATABASE_DRIVER'],
        connection: {
            database: process.env['DATABASE_NAME'],
            host: process.env['DATABASE_HOST'],
            user: process.env['DATABASE_USER'],
            password: process.env['DATABASE_PASS'],
            port: process.env['DATABASE_PORT'],
        },
        pool: {
            min: 1,
            max: 1,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
};

export default config;
