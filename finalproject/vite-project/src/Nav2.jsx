import { useState } from "react";
import "./Nav2.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "/src/slices/productsSlice";
import { decrement, increment } from "/src/slices/productsSlice";

function Nav2() {
  const [showLogin, setShowLogin] = useState(true);
  const [showBasket, setShowBasket] = useState(true);
  const { products } = useSelector((state) => state.products);
  const count = useSelector((state) => state.products.count);
  const dispatch = useDispatch();
  return (
    <>
      <nav className="pages">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Products">Product</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <div className="login">
          <i
            className="fa-solid fa-user"
            onClick={() => setShowLogin(!showLogin)}
          ></i>
          <p>Login</p>
          <i
            className="fa-solid fa-basket-shopping"
            onClick={() => setShowBasket(!showBasket)}
          ></i>
        </div>

        {!showBasket && (
          <div className="basket-part">
            <div className="basket-nav">
              <i
                className="fa-solid fa-chevron-right"
                onClick={() => setShowBasket(!showBasket)}
              ></i>
              <p>Cart</p>
            </div>
            <ul className="products-ul">
              {products?.map((item, id) => {
                return (
                  <div className="added" key={id}>
                    <div className="added-product">
                      <img src={item.img} />
                      <div className="added-price">
                        <p>{item.title}</p>
                        <p>{item.price }</p>
                        <div className="count-btn">
                          <button
                            onClick={() =>
                              dispatch(decrement({ price: item.price }))
                            }
                          >
                            -
                          </button>
                          <div className="count">{count}</div>
                          <button
                            onClick={() =>
                              dispatch(increment({ price: item.price }))
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <i
                        className="fa-solid fa-xmark"
                        onClick={() => dispatch(removeProduct({ id: item.id }))}
                      ></i>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        )}
        {!showLogin && (
          <div className="Login-part">
            <i
              class="fa-solid fa-xmark"
              onClick={() => setShowLogin(!showLogin)}
            ></i>
            <div className="img-part">
              <img src="/src/img/jwl13.jpg" />
              <div className="form-part">
                <h2>Welcome Back</h2>
                <hr/>
                <h3>Login</h3>
                <form>
                  <input type="text" placeholder="Email" />
                  <input type="text" placeholder="Password" />
                  <div className="btn-login">
                    <p>Forgot Password?</p>
                    <button>LOGIN</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Nav2;
