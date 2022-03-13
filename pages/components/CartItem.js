import Link from "next/link";
import { Image, Button } from "react-bootstrap";
import { decrease, increase } from "../../store/Actions";
import { DataContext } from "../../store/GlobalState";
import { useContext, useState } from "react";
import { Modal as Pop } from "react-bootstrap";
import { deleteItem } from "../../store/Actions";

const CartItem = ({ item, dispatch, cart }) => {
  // const { state, dispatch } = useContext(DataContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleSubmit = () => {
  //   dispatch(deleteItem(item.data, item.id, item.type));
  //   dispatch({ type: "ADD_MODAL", payload: {} });
  // };

  return (
    <tr>
      
      <td style={{ width: "150px", overflow: "hidden" }}>
        <Image
          src={item.image}
          alt={item.image}
          width="150px"
          height="150px"
          className="img-thumbnail"
        />
      </td>
      <td style={{ minWidth: "200px" }} className="w-50 align-middle">
        <h5>
          <Link href={`/product/${item._id}`}>
            <a className="text-black text-decoration-none">{item.title}</a>
          </Link>
        </h5>
        <h6 className="text-danger">${item.price * item.quantity}</h6>
      </td>
      

      <td className="align-middle" style={{ minWidth: "150px" }}>
        <button
          className="btn btn-outline-danger"
          onClick={() => dispatch(decrease(cart, item._id))}
          disabled={item.quantity === 1 ? true : false}
        >
          {" "}
          -{" "}
        </button>
        <span className="px-3">{item.quantity}</span>
        <button
          className="btn btn-outline-primary"
          onClick={() => dispatch(increase(cart, item._id))}
        >
          {" "}
          +{" "}
        </button>
      </td>

      <td
        className="align-middle"
        style={{ minWidth: "50px", cursor: "pointer" }}
      >
        {/* <i
          className="far fa-trash-alt text-danger"
          aria-hidden="true"
          style={{ fontSize: "18px" }}
          data-toggle="Pop"
          data-target="#exampleModal"
          onClick={() =>dispatch({type: "ADD_MODAL",payload: {data: cart,id: item._id,title: item.title,type: "ADD_CART"}})
          }
        ></i> */}
        <Pop show={show} onHide={handleClose}>
          <Pop.Header closeButton>
            <Pop.Title>Confirm Deletion</Pop.Title>
          </Pop.Header>
          <Pop.Body>Are you sure to delete this item?</Pop.Body>
          <Pop.Footer>
            <Button
              variant="danger"
              // onClick={() =>
              //   dispatch({
              //     type: "ADD_MODAL",
              //     payload: { data: cart, id: item._id, title: item.title },
              //   })
              // }
              onClick={() => dispatch({
                type: 'ADD_MODAL',
                payload: [{ data: cart, id: item._id}]
              })}

            >
              Yes
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Cancel
            </Button>
          </Pop.Footer>
        </Pop>

        <Button
          className="far fw-bold fa-trash-alt text-danger bg-white"
          onClick={handleShow}
        ></Button>
      </td>
    </tr>
  );
};

export default CartItem;
