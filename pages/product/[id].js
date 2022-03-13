import Head from "next/head";
import { useState, useContext } from "react";
import { Image } from "react-bootstrap";
import { getData } from "../../utils/fetchData";
import { DataContext } from "../../store/GlobalState";
import { addToCart } from "../../store/Actions";

const DetailProduct = (props) => {
  const [product] = useState(props.product);
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  return (
    <div className="row detail_page">
      <Head>
        <title>Product Detail</title>
      </Head>

      <div className="col-md-6">
        <Image
          className="d-block img-thumbnail rounded mt-4 ms-5"
          src={product.image}
          alt={product.image}
          // style={{ height: "100%", width: "100%" }}
          width="300px"
          height="300px"
        ></Image>
      </div>
      <div className="col-md-5 mt-4">
        <h2>{product.title}</h2>
        <h3 className="text-danger">${product.price}</h3>

        <div className="my-2">
          <p>{product.description}</p>
        </div>

        <button
          type="button"
          className="btn btn-success d-block my-3 px-5"
          onClick={() => dispatch(addToCart(product, cart))}
        >
          <strong>Buy</strong>
        </button>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const res = await getData(`product/${id}`);
  console.log(res);
  return {
    props: {
      product: res.product,
    },
  };
}

export default DetailProduct;
