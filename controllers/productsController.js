const productService = require('../services/productsService')

//Get
const getAllProduct = async (req, res) => {
   try{
      const product = await productService.getAllProduct()
      res.status(200).json({
      data: product
   })
   } catch (error){
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
   }
}



//Get by Id
const getProductById = async (request, res) => {
<<<<<<< HEAD
  const { productId } = request.query;
  try {
    const product = await productService.getProductById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json({
      message: 'Successfully fetched product',
      data: product,
=======
   const { byId } = request.params; // Use 'byId' instead of 'userid'
   try {
     const product = await productService.getProductById(byId); // Pass 'byId' as the argument
     if (!product) {
       return res.status(404).json({ error: 'Product not found' });
     }
     res.status(200).json({
       message: 'Successfully fetched product',
       data: product,
     });
   } catch (error) {
     console.error(error);
     res.status(500).json({ error: 'Internal server error' });
   }
 };
// Get products by type
const getProductsByType = async (req, res) => {
  const { type } = req.query;
  try {
    const products = await productService.getProductsByType(type);
    res.status(200).json({
      message: 'Successfully fetched products by type',
      data: products,
>>>>>>> 5fe1f9446f891a0a4d144dffcd3fd3029d6e37ee
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

<<<<<<< HEAD

// Get products by type
const getProductsByType = async (req, res) => {
  const { type } = req.query;
  try {
    const products = await productService.getProductsByType(type);
=======
// Get products by Name
const getProductsByName = async (req, res) => {
  const { name } = req.params;
  try {
    const products = await productService.getProductsByName(name);
    res.status(200).json({
      message: 'Successfully fetched products by type',
      data: products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Get products by type2
const getProductsByType2 = async (req, res) => {
  const { type } = req.params;
  try {
    const products = await productService.getProductsByType2(type);
>>>>>>> 5fe1f9446f891a0a4d144dffcd3fd3029d6e37ee
    res.status(200).json({
      message: 'Successfully fetched products by type',
      data: products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Render products HTML
const renderProductsHTML = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/products.html'));
};

<<<<<<< HEAD
 module.exports = { getAllProduct, getProductById, getProductsByType, renderProductsHTML }
=======
 module.exports = { getAllProduct, getProductById, getProductsByType, renderProductsHTML, getProductsByName, getProductsByType2}
>>>>>>> 5fe1f9446f891a0a4d144dffcd3fd3029d6e37ee
