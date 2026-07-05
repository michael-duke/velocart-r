import { Link } from "react-router";
import { CreditCard } from "lucide-react";
import logo from "@/assets/logos/velocart-logo.png";
import mobileLogo from "@/assets/logos/velocart-mobile-logo.png";
import { useCart } from "@/context/CartContext";

export default function CheckoutHeader() {
  const { cartQuantity } = useCart();
  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex h-15 justify-center border-b border-gray-200 bg-white px-7.5">
      <div className="flex w-full max-w-275 items-center">
        {/* Logo Section */}
        <section className="w-auto min-[575px]:w-50">
          <Link to="/" className="inline-block">
            <img
              src={logo}
              className="hidden h-8 min-[575px]:block"
              alt="Logo"
            />
            <img
              src={mobileLogo}
              className="h-8 min-[575px]:hidden"
              alt="Mobile Logo"
            />
          </Link>
        </section>

        <section className="flex flex-1 justify-center text-center text-[20px] font-medium min-[1000px]:text-[22px]">
          Checkout (
          <Link className="text-velocart-navy hover:underline" to="/">
            {cartQuantity} items
          </Link>
          )
        </section>

        <section className="flex w-auto justify-end min-[575px]:w-36 min-[1000px]:w-50">
          <CreditCard size={32} className="text-gray-400" />
        </section>
      </div>
    </header>
  );
}
