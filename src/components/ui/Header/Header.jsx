import { Search, ShoppingCart } from "lucide-react";
import logoWhite from "@/assets/logos/logo-white.png";
import mobileLogoWhite from "@/assets/logos/mobile-logo-white.png";
import HeaderLink from "./HeaderLink";

export default function Header() {
  return (
    <header
      className="z-50 fixed top-0 left-0 right-0 bg-velocart-navy
     text-white px-3.75 h-15 flex items-center justify-between
      pr-[var(--removed-body-scroll-bar-size, 0px)]"
    >
      {/* Left Section */}
      <section className="w-auto md:w-52">
        <HeaderLink href="." className="px-3.25">
          <img
            className="h-6.5 mt-px hidden min-[675px]:block"
            src={logoWhite}
            alt="Logo"
          />
          <img
            className="h-6.5 mt-px block min-[675px]:hidden"
            src={mobileLogoWhite}
            alt="Mobile Logo"
          />
        </HeaderLink>
      </section>

      {/* Middle Section */}
      <section className="flex-1 max-w-212.5 mx-2.5 flex">
        <input
          name="search-bar"
          className="bg-white flex-1 w-0 text-[16px] h-10 pl-3.75 
          border-none rounded-l-[5px] text-black"
          type="text"
          placeholder="Search"
        />
        <button
          className="flex items-center justify-center 
          bg-velocart-amber hover:bg-velocart-amber-hover 
           border-none w-11.25 h-10 rounded-r-[5px] shrink-0 cursor-pointer"
        >
          <Search
            className="mt-3px"
            size={20}
            strokeWidth={2.5}
            color="black"
          />
        </button>
      </section>

      {/* Right Section */}
      <section className="w-45 shrink-0 flex justify-end items-center">
        <HeaderLink href="orders.html" className="px-3.25">
          <span className="text-[15px] font-bold">Orders</span>
        </HeaderLink>

        <HeaderLink
          href="checkout.html"
          className="flex items-center px-3.25 ml-1.25"
        >
          <div className="relative flex items-center justify-center">
            <ShoppingCart fill="white" size={38} />
            <span
              className="absolute top-2.75 left-1/2 -translate-x-2/5 
               text-velocart-navy text-sm text-center font-bold 
               leading-none min-w-5 pointer-events-none"
            >
              3
            </span>
          </div>
          <div className="ml-1.25 text-[15px] font-bold">Cart</div>
        </HeaderLink>
      </section>
    </header>
  );
}
