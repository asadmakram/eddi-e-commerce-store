import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Col, Image, ListGroup, Row } from "react-bootstrap";
import Ratings from "../components/Ratings";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDetails } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ProductScreen = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const productDetailsData = useSelector((state) => state.productDetails);

  const { product, loading, error } = productDetailsData;

  useEffect(() => {
    dispatch(productDetails(id));
  }, [dispatch, id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" content={error} />
      ) : (
        <>
          <Link to="/" className="btn btn-light my-3">
            Go Back
          </Link>
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid></Image>
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Ratings
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status: </Col>
                    <Col>
                      <strong>
                        {product.countInStock > 0 ? "In Stock" : "Out of stock"}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add to cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductScreen;
