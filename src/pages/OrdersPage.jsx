import OrdersGrid from "@/components/orders/OrdersGrid";

export default function OrdersPage() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  if (!orders.length) {
    localStorage.setItem(
      "orders",
      JSON.stringify([
        {
          id: "a04ba417-a4cc-4ec7-bd6a-93468680f9a3",
          orderTime: "2026-04-20T05:18:31.844Z",
          totalCostCents: 5242,
          products: [
            {
              productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
              quantity: 1,
              estimatedDeliveryTime: "2026-04-27T05:18:31.844Z",
              variation: null,
            },
            {
              productId: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
              quantity: 1,
              estimatedDeliveryTime: "2026-04-27T05:18:31.844Z",
              variation: null,
            },
            {
              productId: "54e0eccd-8f36-462b-b68a-8182611d9add",
              quantity: 1,
              estimatedDeliveryTime: "2026-04-27T05:18:31.844Z",
              variation: null,
            },
          ],
        },
        {
          id: "8eb2f232-5800-4b08-bff3-946b1cb2b6f5",
          orderTime: "2026-04-16T09:26:49.614Z",
          totalCostCents: 2968,
          products: [
            {
              productId: "54e0eccd-8f36-462b-b68a-8182611d9add",
              quantity: 1,
              estimatedDeliveryTime: "2026-04-23T09:26:49.614Z",
              variation: null,
            },
            {
              productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
              quantity: 1,
              estimatedDeliveryTime: "2026-04-23T09:26:49.614Z",
              variation: null,
            },
          ],
        },
      ]),
    );
  }

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
