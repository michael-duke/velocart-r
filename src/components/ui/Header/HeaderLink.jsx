import { cn } from "@/lib/utils";
import { NavLink } from "react-router";

export default function HeaderLink({ href, children, className, ...props }) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(
          "inline-block cursor-pointer rounded-xs p-[6px_9.5px] text-white no-underline",
          "border border-transparent transition-colors hover:border-white",
          isActive ? "underline" : "",
          className,
        )
      }
      {...props}
    >
      {children}
    </NavLink>
  );
}
