import { CircleCheck } from "lucide-react";
import StarRating from "@/components/ui/StarRating";
import formatCurrency from "@/utils/money";

export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col pt-10 pb-6.25 px-6.25 border border-[#f0f0f0]">
      <div className="flex items-center justify-center h-45 mb-5">
        <img
          className="max-w-full max-h-full rounded-[5px]"
          src={product.image}
        />
      </div>

      <div className="h-10 mb-1.25 limit-text-to-2-lines">{product.name}</div>
      <StarRating rating={product.rating.stars} count={product.rating.count} />

      <div className="font-bold mb-2.5">
        {formatCurrency(product.priceCents)}
      </div>

      <div className="mb-4.25">
        <select defaultValue={1} name="quantity">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1"></div>

      <div className="flex items-center gap-1.5 mb-2 text-velocart-notify-green opacity-0">
        <CircleCheck
          size={19}
          className="fill-velocart-notify-green text-white"
        />
        <span>Added</span>
      </div>

      <button className="h-8.5 w-full p-2 button-primary">Add to Cart</button>
    </div>
  );
}
