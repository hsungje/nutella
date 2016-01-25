var errorHandler = {
    generalError: function (err, req, res, next) {
        res.status(500);
        res.json(err);
    }
};

module.exports = errorHandler;