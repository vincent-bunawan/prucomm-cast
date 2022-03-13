import { Image } from "react-bootstrap";
import Link from "next/link";
import { useContext } from "react";
import { DataContext } from "../../../store/GlobalState";
import { addToCart } from "../../../store/Actions";

const ProductCard = ({ product }) => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  const userLink = () => {
    return (
      <>
        <Link href={`product/${product._id}`}>
          <a
            className="btn btn-primary text-white"
            style={{ marginRight: "5px", flex: 1 }}
          >
            View
          </a>
        </Link>

        <button
          className="btn btn-success"
          style={{ marginLeft: "5px", flex: 1 }}
          onClick={() => dispatch(addToCart(product, cart))}
        >
          Buy
        </button>
      </>
    );
  };

  return (
    <div className="col-md-4">
      <div className="card mt-1">
        <Image
          className="card-img-top"
          src={product.image}
          alt={product.image}
          width="100%"
          height="200px"
        ></Image>
        <div className="product-1 align-items-center p-2 text-center">
          <h5 className="card-title text-capitalize">{product.title}</h5>
          <div className="cost mt-3 mb-3 text-dark">
            <h5>${product.price}</h5>
          </div>
          <p className="card-text" title={product.description}>
            {product.description}
          </p>
          <div className="row justify-content-between mx-0">{userLink()}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
