const res = require("express/lib/response")

const getAllProductsStatic = (req, res) =>{
    res.status(200).send("get aLLL tASKs")
}

const getAllProducts = (req, res) => {
    res.status(200).send("Get Particular tasks");
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}