const indexController = {};

indexController.getAll = (req, res) => {
    try {
        console.log("Index controller");
        res.send("Que pegada");
    } catch(err) {
        throw err;
    }
}

export default indexController;