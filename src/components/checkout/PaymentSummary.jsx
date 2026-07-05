import { formatCurrency, calculateTax } from "@/utils/money";
import { getDeliveryOption } from "@/utils/deliveryOption";

export default function PaymentSummary({ cartItems }) {
  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const itemsCostCents = cartItems.reduce((sum, item) => sum + (item.priceCents * item.quantity), 0);
  const shippingCostCents = cartItems.reduce((sum, item) => sum + getDeliveryOption(item.deliveryOptionId).priceCents, 0);
  
  const totalBeforeTaxCents = itemsCostCents + shippingCostCents;
  const taxCents = Math.round(calculateTax(totalBeforeTaxCents));
  const orderTotalCents = totalBeforeTaxCents + taxCents;

  return (
    <>
      <h3 className="font-bold text-lg mb-3">Payment Summary</h3>

      <div className="space-y-2 text-[15px]">
        <div className="flex justify-between">
          <div>Items ({totalItemsCount}):</div>
          <div>{formatCurrency(itemsCostCents)}</div>
        </div>
        <div className="flex justify-between">
          <div>Shipping & handling:</div>
          <div>{formatCurrency(shippingCostCents)}</div>
        </div>
      </div>

      <div
        className="border-t border-gray-200 my-2 pt-3 
        flex justify-between font-bold"
      >
        <div>Total before tax:</div>
        <div>{formatCurrency(totalBeforeTaxCents)}</div>
      </div>

      <div className="flex justify-between text-sm mb-3">
        <div>Estimated tax (13%):</div>
        <div>{formatCurrency(taxCents)}</div>
      </div>

      <div
        className="border-t border-gray-200 pt-3 flex justify-between 
        text-velocart-navy/80 font-bold text-xl mb-5"
      >
        <div>Order total:</div>
        <div>{formatCurrency(orderTotalCents)}</div>
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
