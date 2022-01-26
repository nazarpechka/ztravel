import Section from "../Section";
import ProductCard from "./ProductCard";
import zakopane from "../assets/zakopane.jpg";

const Products = () => {
  return (
    <Section heading="Products">
      <div className="flex flex-col md:flex-row gap-8">
        <ProductCard img={zakopane} name="Product test" price="100" />
        <ProductCard img={zakopane} name="Product test" price="200" />
        <ProductCard img={zakopane} name="Product test" price="300" />
      </div>
    </Section>
  );
};

export default Products;
