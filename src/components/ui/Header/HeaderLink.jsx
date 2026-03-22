import { cn } from "@/lib/utils";
import { Link } from "react-router";

export default function HeaderLink({ href, children, className, ...props }) {
  return (
    <Link
      to={href}
      className={cn(
        "inline-block text-white p-[6px_9.5px] no-underline cursor-pointer rounded-xs",
        "border border-transparent hover:border-white transition-colors",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
