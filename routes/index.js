module.exports = function (app, cb) {

    app.get('/', function (req, res) {
        console.log('routing');
    });

    cb();
};

