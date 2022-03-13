import connectDB from "../../../utils/connectDB";
import Products from "../../../models/productModel";

connectDB();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProduct(req, res);
      break;
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.query;
    const product = await Products.findById(id);
    if (!product) return res.status(400).json({ err: "Product not found" });

    res.json({ product });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
