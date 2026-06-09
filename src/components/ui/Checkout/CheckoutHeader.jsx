import { Link } from "react-router";
import { CreditCard } from "lucide-react";
import logo from "@/assets/logos/velocart-logo.png";
import mobileLogo from "@/assets/logos/velocart-mobile-logo.png";

export default function CheckoutHeader() {
  return (
    <header
      className="fixed top-0 left-0 right-0 h-15 
    bg-white border-b border-gray-200 z-50 flex justify-center px-7.5"
    >
      <div className="w-full max-w-275 flex items-center">
        {/* Logo Section */}
        <section className="w-auto min-[575px]:w-50">
          <Link to="/" className="inline-block">
            <img
              src={logo}
              className="h-8 hidden min-[575px]:block"
              alt="Logo"
            />
            <img
              src={mobileLogo}
              className="h-8 min-[575px]:hidden"
              alt="Mobile Logo"
            />
          </Link>
        </section>

        <section
          className="flex-1 flex justify-center text-center font-medium text-[20px] 
           min-[1000px]:text-[22px]"
        >
          Checkout (
          <a className="text-velocart-navy hover:underline" href="/">
            3 items
          </a>
          )
        </section>

        <section className="flex justify-end w-auto min-[575px]:w-36 min-[1000px]:w-50">
          <CreditCard size={32} className="text-gray-400" />
        </section>
      </div>
    </header>
  );
}
