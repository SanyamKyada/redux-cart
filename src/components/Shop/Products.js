import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const products = useSelector((state) => state.product.products);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((x) => (
          <ProductItem key={x.id} {...x} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
