import { useState, useRef } from "react";
import { CircleCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AddToCartButton({
  onAdd,
  text = "Add to Cart",
  addedText = "Added",
  icon = null,
  className = "button-primary h-8.5 w-ful p-2",
}) {
  const [showAdded, setShowAdded] = useState(false);
  const timeoutRef = useRef(null);

  const handleClick = (e) => {
    e.stopPropagation();

    // Call the parent's add to cart handler
    if (onAdd) onAdd();

    // Trigger feedback checkmark
    setShowAdded(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setShowAdded(false);
    }, 2000);
  };
  return (
    <div className={cn("mt-auto flex w-full flex-col")}>
      {/* Feedback checkmark message */}
      <div
        className={`text-velocart-notify-green mb-2 flex items-center gap-1.5 transition-opacity duration-300 ${showAdded ? "opacity-100" : "opacity-0"}`}
      >
        <CircleCheck
          size={19}
          className="fill-velocart-notify-green text-white"
        />
        <span>{addedText}</span>
      </div>

      {/* Action Button */}
      <button onClick={handleClick} className={className}>
        {icon}
        {text}
      </button>
    </div>
  );
}
