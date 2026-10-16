import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import StarRating from "@/components/ui/StarRating";
import formatCurrency from "@/utils/money";
import { useCartActions } from "@/context/cart/CartContext";
import AddToCartButton from "../ui/AddToCartButton";

export default function ProductCard({ product }) {
  const { addToCart } = useCartActions();
  const [quantity, setQuantity] = useState(1);

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
      <AddToCartButton onAdd={() => addToCart(product, quantity)} />
    </div>
  );
}
