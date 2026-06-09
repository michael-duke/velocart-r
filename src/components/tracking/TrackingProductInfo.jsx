import { formatDeliveryDate } from "@/utils/date";

export default function TrackingProductInfo({ productDetails, orderProduct }) {
  return (
    <>
      <div className="mb-2.5 text-[25px] font-bold">
        Arriving on {formatDeliveryDate(orderProduct.estimatedDeliveryTime)}
      </div>

      <div className="mb-0.75">{productDetails.name}</div>

      <div className="mb-0.75">Quantity: {orderProduct.quantity}</div>

      <img
        className="mt-6.25 mb-12.5 max-h-37.5 max-w-37.5"
        src={productDetails.image}
        alt={productDetails.name}
      />
    </>
  );
}
