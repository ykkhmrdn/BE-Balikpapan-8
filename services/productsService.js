
const { request } = require('express');
const { prisma } = require('../config/prisma')

//Get All
const getAllProduct = async () => {
    try{
        const product = prisma.products.findMany()
        return product
    } catch (error){
        console.error (error);
        return (error)
    }
}

//Get by Id
async function getProductById(productId) {
    try {
      const product = await prisma.products.findUnique({
        where: {
          id: parseInt(productId) 
        }
      })
      return product
    } catch (error) {
      throw new Error(error)
    }
    
  }

// Get products by type
const getProductsByType = async (type) => {
  try {
    const products = await prisma.products.findMany({
      where: {
        product_type: type,
      },
    });
    return products;
  } catch (error) {
    console.error(error);
    throw new Error('Error getting products by type');
  }
};


module.exports = { getAllProduct, getProductById, getProductsByType }