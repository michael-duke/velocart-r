export default function PaymentSummary({ cartItems }) {
  return (
    <>
      <h3 className="font-bold text-lg mb-3">Payment Summary</h3>

      <div className="space-y-2 text-[15px]">
        <div className="flex justify-between">
          <div>Items (3):</div>
          <div>$42.75</div>
        </div>
        <div className="flex justify-between">
          <div>Shipping & handling:</div>
          <div>$4.99</div>
        </div>
      </div>

      <div
        className="border-t border-gray-200 my-2 pt-3 
       flex justify-between font-bold"
      >
        <div>Total before tax:</div>
        <div>$47.74</div>
      </div>

      <div className="flex justify-between text-sm mb-3">
        <div>Estimated tax (10%):</div>
        <div>$4.77</div>
      </div>

      <div
        className="border-t border-gray-200 pt-3 flex justify-between 
       text-velocart-navy/80 font-bold text-xl mb-5"
      >
        <div>Order total:</div>
        <div>$52.51</div>
      </div>

      <button
        className="w-full bg-velocart-navy opacity-80 hover:opacity-100 text-white my-5
        py-3 rounded-[5px] font-medium transition-colors cursor-pointer"
      >
        Place your order
      </button>
    </>
  );
}
