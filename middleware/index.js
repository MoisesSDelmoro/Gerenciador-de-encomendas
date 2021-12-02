const restify = require('restify');

const corsMiddleware = require('restify-cors-middleware');

const cors = corsMiddleware({
    preflightMaxAge: 5,
    origins: ['*']
});

const server = restify.createServer({
    name: 'C216-L1-1417'
});

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());
server.pre(cors.preflight);
server.use(cors.actual);

const mysql = require('mysql');

const connectionUri = {
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'C216-L1'
};

function inserir(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('content-type', 'application/json');
    res.charSet('UTF-8');

    let encomenda = {
        origem: req.body.origem,
        destino: req.body.destino,
        peso: req.body.peso,
        data: req.body.data

    };

    let connection = mysql.createConnection(connectionUri);
    let strQuery = `INSERT INTO encomenda (origem, destino, peso, data) VALUES` +
        `('${encomenda.origem}', '${encomenda.destino}', '${encomenda.peso}', '${encomenda.data}');`
    console.log(strQuery);
    connection.query(strQuery, function (err, rows, fields) {
        if (!err) {
            res.json(rows);
        } else {
            res.json(err);
        }
    });
    connection.end();
};

function listar(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('content-type', 'application/json');
    res.charSet('UTF-8');

    let connection = mysql.createConnection(connectionUri);

    let strQuery = '';

    if (req.params.id == undefined) {
        strQuery = 'SELECT * FROM encomenda;';
    }
    else {
        strQuery = 'SELECT * FROM encomenda WHERE id = ' + req.params.id + ';';
    }
    console.log(strQuery);
    connection.query(strQuery, function (err, rows, fields) {
        if (!err) {
            res.json(rows);
        } else {
            res.json(err);
        }
    });
    connection.end();
};

function atualizar(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('content-type', 'application/json');
    res.charSet('UTF-8');

    let encomenda = {
        id: req.body.id,
        origem: req.body.origem,
        destino: req.body.destino,
        peso: req.body.peso,
        data: req.body.data
    };

    let connection = mysql.createConnection(connectionUri);
    let strQuery = `UPDATE encomenda SET ` +
        `origem = '${encomenda.origem}', ` +
        `destino = '${encomenda.destino}', ` +
        `peso = '${encomenda.peso}', ` +
        `data = '${encomenda.data}' ` +
        `WHERE id = '${encomenda.id}';`

    console.log(strQuery);
    connection.query(strQuery, function (err, rows, fields) {
        if (!err) {
            res.json(rows);
        } else {
            res.json(err);
        }
    });
    connection.end();
};

function excluir(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('content-type', 'application/json');
    res.charSet('UTF-8');

    let connection = mysql.createConnection(connectionUri);
    let strQuery = `DELETE FROM encomenda WHERE id = '${req.params.id}';`

    console.log(strQuery);
    connection.query(strQuery, function (err, rows, fields) {
        if (!err) {
            res.json(rows);
        } else {
            res.json(err);
        }
    });
    connection.end();
};

const prefix = '/encomenda';

server.post(prefix + '/inserir', inserir);
server.get(prefix + '/listar', listar);
server.get(prefix + '/listar/:id', listar);
server.put(prefix + '/atualizar', atualizar);
server.del(prefix + '/excluir/:id', excluir);

const port = process.env.PORT || 5000;

server.listen(port, function () {
    console.log('%s rodando', server.name);
});