import { Search, ShoppingCart } from "lucide-react";
import logoWhite from "@/assets/logos/velocart-logo-white.png";
import mobileLogoWhite from "@/assets/logos/velocart-mobile-logo-white.png";
import HeaderLink from "./HeaderLink";
import { useCart } from "@/context/cart/CartContext";

export default function Header() {
  const { cartQuantity } = useCart();

  return (
    <header className="bg-velocart-navy pr-[var(--removed-body-scroll-bar-size, 0px)] fixed top-0 right-0 left-0 z-50 flex h-15 items-center justify-between px-3.75 text-white">
      {/* Left Section */}
      <section className="w-auto md:w-52">
        <HeaderLink href="/" className="px-3.25">
          <img
            className="mt-px hidden h-8 min-[675px]:block"
            src={logoWhite}
            alt="Logo"
          />
          <img
            className="mt-px block h-8 min-[675px]:hidden"
            src={mobileLogoWhite}
            alt="Mobile Logo"
          />
        </HeaderLink>
      </section>

      {/* Middle Section */}
      <section className="mx-2.5 flex max-w-212.5 flex-1">
        <input
          name="search-bar"
          className="h-10 w-0 flex-1 rounded-l-[5px] border-none bg-white pl-3.75 text-[16px] text-black"
          type="text"
          placeholder="Search"
        />
        <button className="bg-velocart-amber hover:bg-velocart-amber-hover flex h-10 w-11.25 shrink-0 cursor-pointer items-center justify-center rounded-r-[5px] border-none">
          <Search
            className="mt-3px"
            size={20}
            strokeWidth={2.5}
            color="black"
          />
        </button>
      </section>

      {/* Right Section */}
      <section className="flex w-45 shrink-0 items-center justify-end">
        <HeaderLink href="/orders" className="px-3.25">
          <span className="text-[15px] font-bold">Orders</span>
        </HeaderLink>

        <HeaderLink
          href="/checkout"
          className="ml-1.25 flex items-center px-3.25"
        >
          <div className="relative flex items-center justify-center">
            <ShoppingCart fill="white" size={38} />
            <span className="text-velocart-navy pointer-events-none absolute top-2.75 left-1/2 min-w-5 -translate-x-2/5 text-center text-sm leading-none font-bold">
              {cartQuantity}
            </span>
          </div>
          <div className="ml-1.25 text-[15px] font-bold">Cart</div>
        </HeaderLink>
      </section>
    </header>
  );
}
