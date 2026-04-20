import OrderSummary from "./OrderSummary";
import PaymentSummary from "./PaymentSummary";

export default function CheckoutGrid({ cartItems }) {
  return (
    <div
      className="grid grid-cols-1 min-[1000px]:grid-cols-[1fr_350px] 
         gap-x-3 items-start"
    >
      {/* Order Summary (The Left Section) */}
      <section className="">
        <OrderSummary cartItems={cartItems} />
      </section>

      {/* Payment Summary (The Right Section) */}
      <aside
        className="bg-white min-[1000px]:sticky min-[1000px]:top-20 
              max-[1000px]:row-1 max-[1000px]:mb-3 p-4.5 pb-1.25
              border border-gray-300 rounded-sm"
      >
        <PaymentSummary cartItems={cartItems} />
      </aside>
    </div>
  );
}
