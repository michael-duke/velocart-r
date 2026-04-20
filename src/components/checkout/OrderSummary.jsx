import CheckoutItem from "./CheckoutItem";

export default function OrderSummary({ cartItems }) {
  return (
    <div className="order-summary flex flex-col gap-4">

      {cartItems?.length > 0 ? (
        cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)
      ) : (
        <div className="p-10 bg-white border border-dashed rounded-lg text-center text-gray-500">
          Your cart is empty.
        </div>
      )}
    </div>
  );
}
