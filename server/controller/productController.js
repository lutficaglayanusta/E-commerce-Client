import pool from "../database/connectDatabase.js";
import cloudinary from "../database/cloudinary.js";


export const createProduct = async (req, res) => {
  try {
    const { name, description, price, image, category, stock_quantity } =
      req.body;

    let cloudinaryResponse = null;
    if (image) {
      cloudinaryResponse = await cloudinary.uploader.upload(image, {
        folder: "products",
      });
    }
    const product = await pool.query(
      "INSERT INTO products(name,description,price,image,category,stock_quantity) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
      [
        name,
        description,
        price,
        cloudinaryResponse?.secure_url ? cloudinaryResponse.secure_url : "",
        category,
        stock_quantity,
      ]
    );
    res.status(201).json({
      data: product.rows,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllProduct = async (req, res) => {
  try {
    const products = await pool.query("SELECT * FROM products");
    res.status(200).json({
      status: "success",
      data: {
        products: products.rows,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
export const getOneProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const products = await pool.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        products: products.rows,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
export const updateProduct = async (req, res) => {
  try {
  } catch (error) {}
};
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await pool.query(
      "SELECT * FROM products WHERE product_id = $1",
      [id]
    );

    if (product.rows[0].image) {
      const publicId = product.rows[0].image.split("/").pop().split(".")[0];
      try {
        await cloudinary.uploader.destroy(`products/${publicId}`);
      } catch (error) {}
    }
    await pool.query("DELETE FROM products WHERE id = $1", [id]);
    res.status(201).json({
      messsage: "Delete successfull product",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
export const getCategory = async (req, res) => {
    try {
        const {category} = req.params
        const productCategory = await pool.query("SELECT * FROM products WHERE category = $1", [category])
        res.status(201).json({
            data:productCategory.rows[0]
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}