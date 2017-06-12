import express from 'express';
import pg from 'pg';
import path from 'path';
import bcrypt from 'bcrypt';
import { _isEmpty, _commonValidations } from '../static/public/js/utilities/utilities';

import User from './models/user';

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

router.get(/^(\/|\/gallery|\/register|\/signin|\/admin)$/, (req, res) => {
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

        const id = parseInt(req.params.id);

        client.query('SELECT * FROM gallery WHERE id IN ($1)', [id], (err, result) => {
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

        const { id, title, author, image, rating } = req.body;

        client.query('INSERT INTO gallery(id, title, author, image, rating) VALUES($1, $2, $3, $4, $5)',
                     [id, title, author, image, rating]
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

        const id = parseInt(req.params.id);
        const { title, author, image, rating } = req.body;

        client.query('UPDATE gallery SET title = $1, author = $2, image = $3, rating = $4 WHERE id = $5',
                     [title, author, image, rating, id]
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

        const id = parseInt(req.params.id);

        client.query('DELETE FROM gallery WHERE id = $1', [id]);

        done();
        res.send('200');
    });

    pool.on('error', (err, client) => {
        console.error('idle client error', err.message, err.stack)
    })
});

// api users
function inputValidate(data, otherValidations) {
    let { errors } = otherValidations(data);

    return User.query({
        where: { email: data.userEmail },
        orWhere: { name: data.userName }
    }).fetch().then(user => {
        if (user) {
            if (user.get('name') === data.userName) {
                errors.username = 'There is user with such username';
            }
            if (user.get('email') === data.userEmail) {
                errors.email = 'There is user with such email';
            }
        }

        return {
            errors,
            isValid: _isEmpty(errors)
        };
    })
}

// add user
router.post('/api/users', (req, res) => {
    inputValidate(req.body, _commonValidations).then(({ errors, isValid }) => {
        if (isValid) {
            const name = req.body.userName;
            const email = req.body.userEmail;
            const password = req.body.userPassword;

            const password_digest = bcrypt.hashSync(password, 10);

            User.forge({ name, email, password_digest },
                       { hasTimestamps: true })
                .save()
                .then(user => res.json({ success: true }))
                .catch(err => res.status(500).json({ error: err }));
        }
        else {
            res.status(400).json(errors);
        }
    });
});

export default router;
