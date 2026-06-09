import CheckoutGrid from "@/components/checkout/CheckoutGrid";

export default function CheckoutPage() {
  return (
    <>
      <title>Velocomm | Checkout</title>

      <div className="mx-auto mt-20 mb-25 max-w-125 px-7.5 min-[1000px]:max-w-275">
        <h1 className="mb-4.5 text-[22px] font-bold">Review your order</h1>
        <CheckoutGrid cartItems={[1, 3, 2]} />
      </div>
    </>
  );
}
