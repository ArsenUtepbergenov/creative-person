import express from 'express';
import pg from 'pg';
import path from 'path';

let router = express.Router();

// конфигурация для подключения к базе данных
let config = {
    user: 'adminCP', // env var: PGUSER
    database: 'creativepersondb', // env var: PGDATABASE
    password: 'retihe37', // env var: PGPASSWORD
    host: 'localhost', // Server hosting the postgres database
    port: 5432, // env var: PGPORT
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

router.get(/^(\/|\/gallery|\/photo|\/music|\/register|\/signin)$/, function(req, res) {
    res.sendFile(path.join(__dirname, '../static/public/pages/index.html'));
});

router.get('/api/gallery', function(req, res) {

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

router.get('/api/music', function(req, res) {

    var pool = new pg.Pool(config);

    pool.connect(function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('SELECT * FROM music', function(err, result) {
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

router.post('/api/gallery', function(req, res) {

    var pool = new pg.Pool(config);

    pool.connect(function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('INSERT INTO gallery(id, title, author) VALUES($1, $2, $3)',
                     [req.body.id, req.body.title, req.body.author]
        );
        done();
        res.send('201');
    });

    pool.on('error', function(err, client) {
        console.error('idle client error', err.message, err.stack)
    })
});

router.post('/api/users', function(req, res) {

    var pool = new pg.Pool(config);

    pool.connect(function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        console.log(req.body.userName);
        client.query('INSERT INTO users(name, email, password) VALUES($1, $2, $3)',
                     [req.body.userName, req.body.userEmail,  req.body.userPassword]
        );
        done();
        res.send('201');
    });

    pool.on('error', function(err, client) {
        console.error('idle client error', err.message, err.stack)
    })
});

router.put('/api/gallery/:id', function(req, res) {

    var pool = new pg.Pool(config);

    pool.connect(function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('UPDATE gallery SET title = $1, author = $2, WHERE id = $3',
                     [req.body.title, req.body.author, req.params.id]
        );
        done();
        res.send('200');
    });

    pool.on('error', function(err, client) {
        console.error('idle client error', err.message, err.stack)
    })
});

router.delete('/api/gallery/:id', function(req, res) {

    var pool = new pg.Pool(config);

    pool.connect(function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('DELETE FROM gallery WHERE id = $1',
                     [req.params.id]
        );
        done();
        res.send('200');
    });

    pool.on('error', function(err, client) {
        console.error('idle client error', err.message, err.stack)
    })
});

module.exports = router;
