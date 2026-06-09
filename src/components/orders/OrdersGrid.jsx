import OrderItem from "./OrderItem";
export default function OrdersGrid({ orders }) {
  return (
    <div className="grid grid-cols-1 gap-y-12.5">
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
}
