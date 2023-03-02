import Link, { LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";

type Props = LinkProps &
  Pick<React.ComponentPropsWithoutRef<"a">, "className" | "children">;

export default function LinkText({
  href,
  children,
  className,
  ...props
}: Props) {
  return (
    <Link
      href={href}
      className={twMerge(
        "group font-medium text-black underline underline-offset-4 hover:text-neutral-800",
        "dark:text-white dark:hover:text-neutral-200",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
