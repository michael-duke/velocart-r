import { formatDeliveryDate } from "@/utils/date";
import formatCurrency from "@/utils/money";
import { getDeliveryOption } from "@/utils/deliveryOption";
import deliveryOptions from "@/data/deliveryOptions.json";

export default function CheckoutItem({ item }) {
  const deliveryDate = formatDeliveryDate(
    getDeliveryOption(item.deliveryOptionId).deliveryDays,
  );
  return (
    <div className="mb-3 rounded-sm border border-gray-300 bg-white p-4.5">
      {/* 📅 Delivery Date Header */}
      <div className="text-velocart-navy mt-1.25 mb-5.5 text-[19px] font-bold opacity-80">
        Delivery date: {deliveryDate}
      </div>

      {/* 📦 Main Content Grid */}
      <div className="grid grid-cols-[100px_1fr] gap-x-6.25 gap-y-7.5 min-[1000px]:grid-cols-[100px_1fr_1fr]">
        {/* Product Image */}
        <img
          src={item.image}
          alt={item.name}
          className="mx-auto max-h-30 max-w-full object-contain"
        />

        {/* Product Details */}
        <div className="flex flex-col gap-1">
          <div className="text-velocart-navy leading-snug font-bold">
            {item.name}
          </div>
          <div className="text-velocart-navy text-base font-bold">
            ${(item.priceCents / 100).toFixed(2)}
          </div>

          <div className="mt-3 flex items-center gap-3 text-sm max-[390px]:flex-col max-[390px]:items-start">
            <div className="text-gray-700">
              Quantity:{" "}
              <span className="font-bold text-black">{item.quantity}</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-velocart-navy cursor-pointer opacity-100 hover:opacity-75">
                Update
              </button>
              <button className="text-velocart-navy cursor-pointer opacity-100 hover:opacity-75">
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Delivery Options */}
        <div className="flex flex-col gap-3 pt-4 max-[1000px]:col-[1/span-2] md:pt-0">
          <span className="text-[15px] font-bold">
            Choose a delivery option:
          </span>

          {deliveryOptions.map(({ id: optionId, deliveryDays, priceCents }) => {
            const isChecked = item.deliveryOptionId == optionId;
            return (
              <DeliveryOption
                key={optionId}
                uniqueId={`option-${optionId}-${item.id}`}
                name={`delivery-option-${item.id}`}
                date={deliveryDays}
                priceCents={priceCents}
                checked={isChecked}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function DeliveryOption({ uniqueId, name, date, priceCents, checked }) {
  return (
    <label className="group flex cursor-pointer items-start gap-3">
      <input
        type="radio"
        id={uniqueId}
        name={name}
        className="accent-velocart-navy mt-1.5 h-4 w-4"
        defaultChecked={checked}
      />
      <div className="text-sm">
        <div className="text-velocart-navy font-bold">
          {formatDeliveryDate(date)}
        </div>
        <div className="text-gray-500">
          {priceCents === 0
            ? "FREE"
            : `${formatCurrency(priceCents)} - Shipping`}
        </div>
      </div>
    </label>
  );
}
