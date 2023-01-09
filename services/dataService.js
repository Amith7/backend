const db = require('./db')

//get all the products from db

const getProducts = () => {
    return db.Product.find().then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    products: result
                }
            }
            else {
                return {
                    status: false,
                    statusCode: 404,
                    message: 'No products found'
                }
            }
        }
    )
}
const addtowishlist = (id, title, price, image, description) => {
    return db.Wishlist.findOne().then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    message: "Product already found"
                }
            }
            else {
                const newProduct = new db.Wishlist({ id, title, price, image, description })
                // to save data into mongodb
                newProduct.save()
                return {
                    status: true,
                    statusCode: 200,
                    message: "Product added to Wislist"
                }
            }
        }
    )
}

module.exports = {
    getProducts,
    addtowishlist
}