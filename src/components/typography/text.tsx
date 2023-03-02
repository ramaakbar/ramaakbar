import { twMerge } from "tailwind-merge";

type Props = React.ComponentPropsWithoutRef<"p"> & {};

export default function Text({ children, className, ...props }: Props) {
  return (
    <p
      className={twMerge(
        "leading-7 text-neutral-800 [&:not(:first-child)]:mt-6",
        "dark:text-neutral-200",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
