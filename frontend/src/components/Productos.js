import React, { Component } from "react";
import Producto from "../components/Producto";
import Dataproducts from "../sample/Dataproducts.json";
import "../styles/Protuctos.css";

const Products = Dataproducts.map((item, idx) => {
  return (
    <Producto
      title={item.title}
      charge={item.charge}
      currency={item.currency}
      descrip={item.descrip}
    />
  );
});

class Productos extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="Products-title">Productos</h1>

        {Products}
      </div>
    );
  }
}

export default Productos;
