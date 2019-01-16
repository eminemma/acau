exports.mostrarErrorDB = function(err,res) {
    var m = {};
    m.message = err.message;
    m.error = true;

    res.status(400).json(m);
    return;

};
