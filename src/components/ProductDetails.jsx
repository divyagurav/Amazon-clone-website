import { ProductBadge } from "./";

const ProductDetails = ({ product }) => {
  return (
    <div className="mb-1">
      <div className="text-xl xl:text-2xl font-medium mb-1">
        {product.title}
      </div>
      <div className="text-sm xl:text-base mb-1">
        by <span className="text-blue-500">{product.brand}</span>
      </div>

      <div className="text-xs xl:text-sm font-bold mb-1">
        {product.attribute}
      </div>
    </div>
  );
};

export default ProductDetails;
