const Product = require('../models/product');

const getAllProductsStatic = async(req, res) => {
    const products = await Product.find({}).select('name price');
    res.status(200).json({products, nbHits: products.length});``
};

const getAllProducts = async(req, res) => {
    const { featured, company, name, sort, fields } = req.query;
    const queryObjects = {}

    if(featured){ //Logic to filter out incorrect QueryString Parameters
        queryObjects.featured = featured === 'true' ? true : false;
    }
    if(company){
        queryObjects.company = company;
    }
    if(name){
        queryObjects.name = name;
    }
    // if(sort){
    //     queryObjects.sort = sort;
    // }
    console.log(queryObjects);

    let result = Product.find(queryObjects);
    if(sort){
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList);
    }
    if(fields) {
        const fieldList = fields.split(',').join(' ');
        result = result.select(fieldList);
    }
    const products = await result;
    res.status(200).json({products, nbHits: products.length});
};

module.exports = {
    getAllProductsStatic,
    getAllProducts,
}