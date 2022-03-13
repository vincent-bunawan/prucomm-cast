import Head from "next/head";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../store/GlobalState";
import { Image } from "react-bootstrap";
import CartItem from "./components/CartItem";
import { getData, postData } from '../utils/fetchData'
import Link from "next/link";


const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart, auth } = state;

  const [total, setTotal] = useState(0);

  const [address, setAddress] = useState('')
  const [mobile, setMobile] = useState('')

  const [callback, setCallback] = useState(false)

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  const handlePayment = async () => {
    if(!address || !mobile)
    return dispatch({ type: 'NOTIFY', payload: {error: 'Please add your address and mobile.'}})

    let newCart = [];
    for(const item of cart){
      const res = await getData(`product/${item._id}`)
      if(res.product.inStock - item.quantity >= 0){
        newCart.push(item)
      }
    }
    
    if(newCart.length < cart.length){
      setCallback(!callback)
      return dispatch({ type: 'NOTIFY', payload: {
        error: 'The product is out of stock or the quantity is insufficient.'
      }})
    }

    dispatch({ type: 'NOTIFY', payload: {loading: true} })

    postData('order', {address, mobile, cart, total}, auth.token)
    .then(res => {
      if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })

      dispatch({ type: 'ADD_CART', payload: [] })
      
      const newOrder = {
        ...res.newOrder,
        user: auth.user
      }
      dispatch({ type: 'ADD_ORDERS', payload: [...orders, newOrder] })
      dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
      return router.push(`/order/${res.newOrder._id}`)
    })
  }

  if (cart.length === 0)
    return (
      <div className="container">
        <Head>
          <title>Cart Page</title>
        </Head>
        <Image
          className="d-block img-responsive rounded mt-4"
          src="/emptycart.png"
          alt="/emptycart.png"
          style={{ height: "50%", width: "50%" }}
        ></Image>
      </div>
    );

  return (
    <div className="row mx-auto">
      <Head>
        <title>Cart Page</title>
      </Head>

      <div className="col-md-8 text-secondary table-responsive my-3">
        <h2 className="text-uppercase">My Shopping Cart</h2>
        <table className="table my-3">
          <tbody>
            {cart.map((item) => (
              <CartItem
                key={item._id}
                item={item}
                dispatch={dispatch}
                cart={cart}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="col-md-4 my-3 text-uppercase text-secondary">
        <form>
          <h3>Shipment Details</h3>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            className="form-control mb-2"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="form-control mb-2"
            value = {mobile}
            onChange={e => setMobile(e.target.value)}
          />
        </form>
        <h3>
          Total : <span className="text-danger">${total.toPrecision(4)}</span>
        </h3>
        <Link href={auth.user ? "#" : "/signin"}>
          <a className="btn btn-success my-2 w-100 fw-bold" onClick={handlePayment}>Proceed Payment</a>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
