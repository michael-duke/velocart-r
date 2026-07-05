import { Link } from "react-router";
import OrderItem from "./OrderItem";

export default function OrdersGrid({ orders }) {
  if (!orders || orders.length === 0) {
    return (
      <div className="p-10 bg-white border border-dashed border-gray-300 rounded-lg text-center text-gray-500 flex flex-col items-center gap-4">
        <p className="text-lg font-medium">You haven't placed any orders yet.</p>
        <Link className="button-primary px-6 py-2" to="/">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-y-12.5">
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
}
