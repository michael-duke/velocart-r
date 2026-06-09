import OrderHeader from "./OrderHeader";
import OrderDetails from "./OrderDetails";
export default function OrderItem({ order }) {
  return (
    <div>
      <OrderHeader
        orderId={order.id}
        orderTime={order.orderTime}
        orderTotalCost={order.totalCostCents}
      />
      {order.products.map((detail) => (
        <OrderDetails
          key={detail.productId}
          detail={detail}
          orderId={order.id}
        />
      ))}
    </div>
  );
}
