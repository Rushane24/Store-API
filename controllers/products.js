

const getAllProductsStatic = async(req, res) => {
    // throw new Error("Testing async Errors");
    res.status(200).json({message: 'Products Testing route'})
};

const getAllProducts = async(req, res) => {
    res.status(200).json({message: 'Product Route'});
};

module.exports = {
    getAllProductsStatic,
    getAllProducts,
}