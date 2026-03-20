import { cn } from "../utils/cn";

export default function HeaderLink({ href, children, className, ...props }) {
  return (
    <a
      href={href}
      className={cn(
        "inline-block text-white p-[6px_9.5px] no-underline cursor-pointer rounded-xs",
        "border border-transparent hover:border-white transition-colors",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
