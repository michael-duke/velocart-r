import { formatOrderDate } from "@/utils/date";
import formatCurrency from "@/utils/money";
import { cn } from "@/lib/utils";
export default function OrderHeader({ orderId, orderTotalCost, orderTime }) {
  return (
    <header
      className={cn(
        "order-header flex items-center justify-between",
        "rounded-t-[8px] border border-[#d5d9d9] bg-[#f0f2f2] p-[20px_25px]",
        "max-[575px]:flex-col max-[575px]:items-start max-[575px]:p-3.75 max-[575px]:leading-5.75",
      )}
    >
      <div className="order-header-left-section flex shrink-0 max-[575px]:flex-col">
        <div className="mr-11.25 max-[575px]:mr-0 max-[575px]:grid max-[575px]:grid-cols-[auto_1fr]">
          <div className="order-header-label font-medium max-[575px]:mr-1.25">
            Order Placed:
          </div>
          <div>{formatOrderDate(orderTime)}</div>
        </div>
        <div className="mr-11.25 max-[575px]:mr-0 max-[575px]:grid max-[575px]:grid-cols-[auto_1fr]">
          <div className="font-medium max-[575px]:mr-1.25">Total:</div>
          <div>{formatCurrency(orderTotalCost)}</div>
        </div>
      </div>

      <div className="shrink max-[575px]:grid max-[575px]:grid-cols-[auto_1fr]">
        <div className="order-header-label font-medium max-[575px]:mr-1.25">
          Order ID:
        </div>
        <div>{orderId}</div>
      </div>
    </header>
  );
}
