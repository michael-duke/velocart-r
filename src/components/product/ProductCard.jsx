import { useState, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CircleCheck } from "lucide-react";
import StarRating from "@/components/ui/StarRating";
import formatCurrency from "@/utils/money";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showAdded, setShowAdded] = useState(false);
  const timeoutRef = useRef(null);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowAdded(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setShowAdded(false);
    }, 2000);
  };

  return (
    <div className="border-velocart-navy/7 flex flex-col border-r border-b px-6.25 pt-10 pb-6.25">
      <div className="mb-5 flex h-45 items-center justify-center">
        <img
          className="max-h-full max-w-full rounded-[5px]"
          src={product.image}
        />
      </div>
      <div className="mb-1.25 line-clamp-2 h-10 leading-5">{product.name}</div>
      <StarRating rating={product.rating.stars} count={product.rating.count} />
      <div className="mb-2.5 font-bold">
        {formatCurrency(product.priceCents)}
      </div>
      <div className="mb-4.25">
        <Select
          value={quantity.toString()}
          onValueChange={(val) => setQuantity(Number(val))}
          name="quantity"
        >
          <SelectTrigger className="focus-visible:ring-velocart-amber w-14 border-gray-300 bg-gray-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
            <SelectValue placeholder="1" />
          </SelectTrigger>

          <SelectContent className="">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <SelectItem className="" key={n} value={n.toString()}>
                {n}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex-1"></div>
      <div
        className={`text-velocart-notify-green mb-2 flex items-center gap-1.5 transition-opacity duration-300 ${showAdded ? "opacity-100" : "opacity-0"}`}
      >
        <CircleCheck
          size={19}
          className="fill-velocart-notify-green text-white"
        />
        <span>Added</span>
      </div>
      <button
        onClick={handleAddToCart}
        className="button-primary h-8.5 w-full p-2"
      >
        Add to Cart
      </button>
    </div>
  );
}
