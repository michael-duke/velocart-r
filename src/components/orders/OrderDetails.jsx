import { formatOrderDate } from "@/utils/date";
import products from "@/data/product.json";
import { Check, RefreshCcw } from "lucide-react";
import { cx } from "class-variance-authority";
export default function OrderDetails({ detail, orderId }) {
  // Find the matching product using the product.json data
  const product = products.find((p) => p.id === detail.productId);

  // Fallback if the product isn't found
  if (!product) return null;
  // display: grid;
  // grid-template-columns: 110px 1fr 220px;
  // column-gap: 35px;
  // row-gap: 60px;
  // align-items: center;
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
          Arriving on: {formatOrderDate(detail.estimatedDeliveryTime)}
        </div>
        <div className="product-quantity">Quantity: {detail.quantity}</div>

        <div
          className={`added-to-cart hidden added-to-cart-${orderId}-${detail.productId}`}
        >
          <Check />
          Added
        </div>

        <button
          className="buy-again-button button-primary h-9 w-37.5 text-[15px]"
          data-product-id={detail.productId}
          data-order-id={orderId}
        >
          <RefreshCcw size={20} className="mr-2.5" />
          <span className="buy-again-message">Buy it again</span>
        </button>
      </div>

      <div className="product-actions self-start">
        <a href={`/tracking?orderId=${orderId}&productId=${detail.productId}`}>
          <button className="track-package-button button-secondary w-full p-2 text-[15px]">
            Track package
          </button>
        </a>
      </div>
    </div>
  );
}
