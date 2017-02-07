var express = require('express');
var pg = require('pg');
var router = express.Router();

// конфигурация для подключения к базе данных
var config = {
    user: 'adminCP', // env var: PGUSER
    database: 'creativepersondb', // env var: PGDATABASE
    password: 'retihe37', // env var: PGPASSWORD
    host: 'localhost', // Server hosting the postgres database
    port: 5432, // env var: PGPORT
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

router.get('/', function(req, res) {
    res.sendFile(__dirname + '/static/public/pages/index.html');
});

router.get('/gallery', function(req, res) {

    var pool = new pg.Pool(config);

    pool.connect(function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('SELECT * FROM gallery', function(err, result) {
            if (err) {
                return console.error('error running query', err);
            }
            res.send(result.rows);
            done();
        });
    });

    pool.on('error', function(err, client) {
        console.error('idle client error', err.message, err.stack)
    })
});

module.exports = router;
