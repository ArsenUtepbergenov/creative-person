import express from 'express';
import pg from 'pg';
import path from 'path';
import { validateInput } from '../static/public/js/utilities/utilities';

const router = express.Router();

const config = {
    user: 'adminCP',
    database: 'creativepersondb',
    password: 'retihe37',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
};

let pool = new pg.Pool(config);

router.get(/^(\/|\/gallery|\/photo|\/music|\/register|\/signin)$/, (req, res) => {
    res.sendFile(path.join(__dirname, '../static/public/pages/index.html'));
});

// api gallery
// get all pictures
router.get('/api/gallery', (req, res) => {
    pool.connect((err, client, done) => {
        if (err)
            return console.error('error fetching client from pool', err);

        client.query('SELECT * FROM gallery', (err, result) => {
            if (err) {
                return console.error('error running query', err);
                res.status(400).send(err);
            }
            res.status(200).send(result.rows);
            done();
        });
    });

    pool.on('error', (err, client) => {
        console.error('idle client error', err.message, err.stack)
    })
});

// get picture by id
router.get('/api/gallery/:id', (req, res) => {
    pool.connect((err, client, done) => {
        if (err)
            return console.error('error fetching client from pool', err);

        client.query('SELECT * FROM gallery WHERE id IN ($1)', [req.params.id], (err, result) => {
            if (err) {
                return console.error('error running query', err);
                res.status(400).send(err);
            }
            res.status(200).send(result.rows);
            done();
        });
    });

    pool.on('error', (err, client) => {
        console.error('idle client error', err.message, err.stack)
    })
});

// add picture
router.post('/api/gallery', (req, res) => {
    pool.connect((err, client, done) => {
        if (err)
            return console.error('error fetching client from pool', err);

        client.query('INSERT INTO gallery(id, title, author) VALUES($1, $2, $3)',
                     [req.body.id, req.body.title, req.body.author]
        );
        done();
        res.send('201');
    });

    pool.on('error', (err, client) => {
        console.error('idle client error', err.message, err.stack)
    })
});

// update picture
router.put('/api/gallery/:id', (req, res) => {
    pool.connect((err, client, done) => {
        if (err)
            return console.error('error fetching client from pool', err);

        client.query('UPDATE gallery SET title = $1, author = $2 WHERE id = $3',
                     [req.body.title, req.body.author, parseInt(req.params.id)]
        );
        done();
        res.send('200');
    });

    pool.on('error', (err, client) => {
        console.error('idle client error', err.message, err.stack)
    })
});

// delete picture by id
router.delete('/api/gallery/:id', (req, res) => {
    pool.connect((err, client, done) => {
        if (err)
            return console.error('error fetching client from pool', err);

        client.query('DELETE FROM gallery WHERE id = $1',
                     [req.params.id]
        );
        done();
        res.send('200');
    });

    pool.on('error', (err, client) => {
        console.error('idle client error', err.message, err.stack)
    })
});

// api music
// get all music
router.get('/api/music', (req, res) => {
    pool.connect((err, client, done) => {
        if (err)
            return console.error('error fetching client from pool', err);

        client.query('SELECT * FROM music', (err, result) => {
            if (err) {
                return console.error('error running query', err);
                res.status(400).send(err);
            }
            res.status(200).send(result.rows);
            done();
        });
    });

    pool.on('error', (err, client) => {
        console.error('idle client error', err.message, err.stack)
    })
});

// api users
// add user
router.post('/api/users', (req, res) => {
    const { errors, isValid } = validateInput(req.body);

    if (isValid) {
        res.json({ success: true });
    }
    else {
        res.status(400).json(errors);
    }
/*
    pool.connect((err, client, done) => {
        if (err)
            return console.error('error fetching client from pool', err);

        console.log(req.body.userName);
        client.query('INSERT INTO users(name, email, password) VALUES($1, $2, $3)',
                     [req.body.userName, req.body.userEmail,  req.body.userPassword]
        );
        done();
        res.send('201');
    });

    pool.on('error', (err, client) => {
        console.error('idle client error', err.message, err.stack)
    })*/
});

export default router;
