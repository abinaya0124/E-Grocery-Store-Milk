import ProductImage from "./ProductDetails/ProductImage";
import Description from "./Description/Description";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

const MilkProduct = () => {
  return (
    <div>
      <div className="flex justify-center">
        <ProductImage />
      </div>
      <Description />
      <RelatedProducts />
    </div>
  );
};

export default MilkProduct;
