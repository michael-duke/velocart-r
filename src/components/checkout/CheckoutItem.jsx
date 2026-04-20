export default function CheckoutItem({ item }) {
  return (
    <div
      className="bg-white border border-gray-300 
                   mb-3 rounded-sm p-4.5"
    >
      {/* 📅 Delivery Date Header */}
      <div className="text-velocart-navy opacity-80 font-bold text-[19px] mt-1.25 mb-5.5">
        Delivery date: Tuesday, June 21
      </div>

      {/* 📦 Main Content Grid */}
      <div
        className="grid grid-cols-[100px_1fr] gap-y-7.5 gap-x-6.25
       min-[1000px]:grid-cols-[100px_1fr_1fr]"
      >
        {/* Product Image */}
        <img
          src={item.image}
          alt={item.name}
          className="max-h-30 max-w-full mx-auto object-contain"
        />

        {/* Product Details */}
        <div className="flex flex-col gap-1">
          <div className="font-bold text-velocart-navy leading-snug">
            {item.name}
          </div>
          <div className="text-velocart-navy font-bold text-base">
            ${(item.priceCents / 100).toFixed(2)}
          </div>

          <div className="flex max-[390px]:flex-col max-[390px]:items-start items-center gap-3 mt-3 text-sm">
            <div className="text-gray-700">
              Quantity:{" "}
              <span className="font-bold text-black">{item.quantity}</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-velocart-navy hover:opacity-75 opacity-100 cursor-pointer">
                Update
              </button>
              <button className="text-velocart-navy hover:opacity-75 opacity-100 cursor-pointer">
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Delivery Options */}
        <div className="flex flex-col gap-3 pt-4 md:pt-0 max-[1000px]:col-[1/span-2]">
          <span className="font-bold text-[15px]">
            Choose a delivery option:
          </span>

          <DeliveryOption
            id={`option-1-${item.id}`}
            name={item.id}
            date="Tuesday, June 21"
            price="FREE Shipping"
            defaultChecked
          />
          <DeliveryOption
            id={`option-2-${item.id}`}
            name={item.id}
            date="Wednesday, June 15"
            price="$4.99 - Shipping"
          />
          <DeliveryOption
            id={`option-3-${item.id}`}
            name={item.id}
            date="Monday, June 13"
            price="$9.99 - Shipping"
          />
        </div>
      </div>
    </div>
  );
}

function DeliveryOption({ id, name, date, price, defaultChecked }) {
  return (
    <label className="flex items-start gap-3 cursor-pointer group">
      <input
        type="radio"
        id={id}
        name={name}
        defaultChecked={defaultChecked}
        className="mt-1.5 h-4 w-4 accent-velocart-navy"
      />
      <div className="text-sm">
        <div className="text-velocart-navy font-bold">{date}</div>
        <div className="text-gray-500">{price}</div>
      </div>
    </label>
  );
}
