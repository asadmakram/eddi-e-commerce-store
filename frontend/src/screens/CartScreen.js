import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import {
  Col,
  ListGroup,
  Row,
  Image,
  Button,
  Form,
  Card,
  ListGroupItem,
} from "react-bootstrap";
import Message from "../components/Message";
import { useNavigate } from "react-router-dom";


function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const CartScreen = () => {
  
  const { id: productId } = useParams();
  let query = useQuery();
  let navigator = useNavigate();
  const dispatch = useDispatch();
  const qty = query.get("qty");

  const cart = useSelector((state) => state.cart);
  const cartItems = cart.cartItems;

  useEffect(() => {
    dispatch(addToCart(productId, qty));
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {

    dispatch(removeFromCart(id));
  };

  const proceedToCheckoutHandler = () => {
    
    navigator(`/shipping`);
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your Cart is Empty<Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>
                    <span>${item.price}</span>
                  </Col>{" "}
                  <Col md={3}>
                    <Form.Select
                      value={item.qty}
                      onChange={(e) => {
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        );
                      }}
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col md={2}>
                    <Button
                      variant="light"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className="fas fa-trash" />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup>
            <ListGroupItem>
              <h2>
                Subtotal (
                {cartItems.reduce((acc, current) => {
                  return (acc += Number(current.qty));
                }, 0)}
                ) Items
              </h2>
              <span>
                Total Amount: $
                {cartItems
                  .reduce((acc, current) => {
                    return (acc += Number(current.price) * Number(current.qty));
                  }, 0)
                  .toFixed(2)}
              </span>
            </ListGroupItem>
            <ListGroupItem>
              <div className="d-grid">
                <Button onClick={proceedToCheckoutHandler}>
                  Proceed to Checkout
                </Button>
              </div>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
