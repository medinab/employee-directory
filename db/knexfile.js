module.exports = {
    development: {
        client: 'pg',
        connection: {
            host : '127.0.0.1',
            user : 'user',
            password : 'root',
            database : 'employee-directory',
            charset: 'utf8'
        },
        migrations: {
            directory: __dirname + '/migrations',
        },
        seeds: {
            directory: __dirname + '/seeds'
        }
    }
};