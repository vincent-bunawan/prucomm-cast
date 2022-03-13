const Toast = ({ msg, handleShow, bgColor }) => {
  return (
    <div
      className={`toast show position-fixed text-light ${bgColor}`}
      style={{ top: "5px", right: "5px", zIndex: 9, minWidth: "280px" }}
    >
      <div className={`toast-header ${bgColor} text-light`}>
        <strong className="mr-auto text-light">{msg.title}</strong>
      </div>

      <div className="toast-body ">{msg.msg}</div>
      <div className="justify-content-end">
        <button
          type="button"
          className="btn-sm btn btn-dark mt-2"
          data-dismiss="toast"
          style={{ outline: "none" }}
          onClick={handleShow}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default Toast;
