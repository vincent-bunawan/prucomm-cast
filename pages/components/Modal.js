import { useContext, useState } from "react";
import { DataContext } from "../../store/GlobalState";
import { deleteItem } from "../../store/Actions";
import { Modal as Modals } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Modal = () => {
  const { dispatch } = useContext(DataContext);

  const handleSubmit = () => {
    // dispatch(deleteItem(item.data, item.id, item.type));
    // dispatch({ type: "ADD_MODAL", payload: {} });
    dispatch(deleteItem(item.data, item.id, "ADD_CART"));
    dispatch({ type: "ADD_MODAL", payload: {} });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modals show={show} onHide={handleClose}>
        <Modals.Header closeButton>
          <Modals.Title>Confirm Deletion</Modals.Title>
        </Modals.Header>
        <Modals.Body>Are you sure to delete this item?</Modals.Body>
        <Modals.Footer>
          <Button variant="danger" onClick={handleSubmit}>
            Yes
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modals.Footer>
      </Modals>
    </>
  );
};

export default Modal;
