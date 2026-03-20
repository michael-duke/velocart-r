import { Search, ShoppingCart } from "lucide-react";
import logoWhite from "@/assets/logos/logo-white.png";
import mobileLogoWhite from "@/assets/logos/mobile-logo-white.png";
import HeaderLink from "./HeaderLink";

export default function Header() {
  return (
    <header
      className="z-50 fixed top-0 left-0 right-0 bg-velocart-navy
     text-white px-3.75 h-15 flex items-center justify-between"
    >
      {/* Left Section */}
      <section className="w-auto md:w-52">
        <HeaderLink href=".">
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
          className="relative flex items-center px-3.25 ml-1.25"
        >
          <ShoppingCart className="" fill="white" size={38} />
          <span
            className="text-velocart-navy text-[15px] text-center font-bold 
          absolute right-12.75 w-6.25"
          >
            3
          </span>
          <div className="ml-1.25 text-[15px] font-bold">Cart</div>
        </HeaderLink>
      </section>
    </header>
  );
}
