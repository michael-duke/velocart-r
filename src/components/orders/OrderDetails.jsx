import { formatDeliveryDate } from "@/utils/date";
import products from "@/data/product.json";
import { RefreshCcw } from "lucide-react";
import { cx } from "class-variance-authority";
import { Link } from "react-router";
import { useCart } from "@/context/CartContext";
import AddToCartButton from "../ui/AddToCartButton";

export default function OrderDetails({ detail, orderId }) {
  const { addToCart } = useCart();
  // Find the matching product using the product.json data
  const product = products.find((p) => p.id === detail.productId);

  if (!product) return null;

  return (
    <div
      className={cx(
        "order-details-grid grid grid-cols-[110px_1fr_220px] items-center gap-x-8.75 gap-y-15",
        "rounded-b-[8px] border border-t-0 border-[#d5d9d9] p-[40px_25px]",
      )}
    >
      <div className="product-image-container">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-details">
        <div className="product-name font-medium">{product.name}</div>
        <div className="product-delivery-date">
          Arriving on: {formatDeliveryDate(detail.estimatedDeliveryTime)}
        </div>
        <div className="product-quantity">Quantity: {detail.quantity}</div>

        <AddToCartButton
          onAdd={() => addToCart(product, 1)}
          text="Buy it again"
          icon={<RefreshCcw size={20} />}
          className="buy-again-button button-primary h-9 w-37.5 text-[15px]"
        />
      </div>

      <div className="product-actions self-start">
        <Link to={`/tracking?orderId=${orderId}&productId=${detail.productId}`}>
          <button className="track-package-button button-secondary w-full p-2 text-[15px]">
            Track package
          </button>
        </Link>
      </div>
    </div>
  );
}
