import CheckoutGrid from '@/components/checkout/CheckoutGrid';

export default function CheckoutPage() {
  return (
    <>
      <title>Velocomm | Checkout</title>

      <div className="max-w-125 min-[1000px]:max-w-275 mx-auto px-7.5 mt-20 mb-25">
        <h1 className="text-[22px] font-bold mb-4.5">Review your order</h1>
        <CheckoutGrid cartItems={[1, 3, 2]} />
      </div>
    </>
  );
}
