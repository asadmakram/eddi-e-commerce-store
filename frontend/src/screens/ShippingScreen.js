import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";

const ShippingScreen = () => {
  const [address, setAddress] = useState();
  const [postalCode, setPostalCode] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();

  function submitHandler() {}
  return (
    <FormControl>
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}></Form>
    </FormControl>
  );
};

export default ShippingScreen;
