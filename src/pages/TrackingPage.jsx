import { useSearchParams } from "react-router";
import { calculateDeliveryProgress } from "@/utils/progress";
import products from "@/data/product.json";
import TrackingProductInfo from "@/components/tracking/TrackingProductInfo";
import TrackingProgress from "@/components/tracking/TrackingProgress";

export default function TrackingPage() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const productId = searchParams.get("productId");

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const order = orders.find((o) => o.id === orderId);

  // If order or product is not found, handle gracefully
  if (!order) {
    return (
      <div className="mx-auto mt-22.5 mb-25 max-w-212.5 px-7.5 text-center">
        <p className="mb-4 text-red-600">Order not found.</p>
        <a className="link-primary" href="/orders">
          Back to orders
        </a>
      </div>
    );
  }

  const productDetails = products.find((p) => p.id === productId);
  if (!productDetails) {
    return (
      <div className="mx-auto mt-22.5 mb-25 max-w-212.5 px-7.5 text-center">
        <p className="mb-4 text-red-600">Product not found.</p>
        <a className="link-primary" href="/orders">
          Back to orders
        </a>
      </div>
    );
  }

  const orderProduct = order.products.find(
    (p) => p.productId === productDetails.id,
  );
  if (!orderProduct) {
    return (
      <div className="mx-auto mt-22.5 mb-25 max-w-212.5 px-7.5 text-center">
        <p className="mb-4 text-red-600">Product not found in this order.</p>
        <a className="link-primary" href="/orders">
          Back to orders
        </a>
      </div>
    );
  }

  const progress = calculateDeliveryProgress(
    order.orderTime,
    orderProduct.estimatedDeliveryTime,
  );

  return (
    <div className="mx-auto mt-22.5 mb-25 max-w-212.5 px-7.5">
      <div>
        <a className="link-primary mb-7.5 inline-block" href="/orders">
          View all orders
        </a>

        <TrackingProductInfo
          productDetails={productDetails}
          orderProduct={orderProduct}
        />

        <TrackingProgress progress={progress} />
      </div>
    </div>
  );
}

