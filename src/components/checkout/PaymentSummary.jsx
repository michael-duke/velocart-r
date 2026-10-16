import { useNavigate } from "react-router";
import { formatCurrency, calculateTax } from "@/utils/money";
import { getDeliveryOption } from "@/utils/deliveryOption";
import { useCartActions } from "@/context/cart/CartContext";
import { calculateDeliveryDateISO } from "@/utils/date";

export default function PaymentSummary({ cartItems }) {
  const { clearCart } = useCartActions();
  const navigate = useNavigate();

  const totalItemsCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );
  const itemsCostCents = cartItems.reduce(
    (sum, item) => sum + item.priceCents * item.quantity,
    0,
  );
  const shippingCostCents = cartItems.reduce(
    (sum, item) => sum + getDeliveryOption(item.deliveryOptionId).priceCents,
    0,
  );

  const totalBeforeTaxCents = itemsCostCents + shippingCostCents;
  const taxCents = Math.round(calculateTax(totalBeforeTaxCents));
  const orderTotalCents = totalBeforeTaxCents + taxCents;

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return;

    const products = cartItems.map((item) => ({
      productId: item.id,
      quantity: item.quantity,
      estimatedDeliveryTime: calculateDeliveryDateISO(
        getDeliveryOption(item.deliveryOptionId).deliveryDays,
      ),
      variation: null,
    }));

    const orderId = crypto.randomUUID();

    const newOrder = {
      id: orderId,
      orderTime: new Date().toISOString(),
      totalCostCents: orderTotalCents,
      products,
    };

    // Prepend the new order to the orders list (using unshift)
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.unshift(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Clear cart and redirect
    clearCart();
    navigate("/orders");
  };

  return (
    <>
      <h3 className="mb-3 text-lg font-bold">Payment Summary</h3>

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

      <div className="my-2 flex justify-between border-t border-gray-200 pt-3 font-bold">
        <div>Total before tax:</div>
        <div>{formatCurrency(totalBeforeTaxCents)}</div>
      </div>

      <div className="mb-3 flex justify-between text-sm">
        <div>Estimated tax (13%):</div>
        <div>{formatCurrency(taxCents)}</div>
      </div>

      <div className="text-velocart-navy/80 mb-5 flex justify-between border-t border-gray-200 pt-3 text-xl font-bold">
        <div>Order total:</div>
        <div>{formatCurrency(orderTotalCents)}</div>
      </div>

      <button
        onClick={handlePlaceOrder}
        disabled={cartItems.length === 0}
        className="bg-velocart-navy my-5 w-full cursor-pointer rounded-[5px] py-3 font-medium text-white opacity-80 transition-colors hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Place your order
      </button>
    </>
  );
}
