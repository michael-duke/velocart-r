import OrdersGrid from "@/components/orders/OrdersGrid";

export default function OrdersPage() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <>
      <title>Velocomm | Orders</title>
      <div className="mx-auto mt-22.5 max-w-212.5 px-5">
        <h1 className="mb-6.25 text-[26px] font-bold">Your Orders</h1>
        <OrdersGrid orders={orders} />
      </div>
    </>
  );
}
