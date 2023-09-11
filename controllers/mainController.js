const controlador = {
    index: (req,res) => { return res.sendFile('../views/home.html'); }
};

module.exports = controlador;

