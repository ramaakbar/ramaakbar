import { twMerge } from "tailwind-merge";

type Props = React.ComponentPropsWithoutRef<"h1"> & {
  type: "h1" | "h2" | "h3" | "h4";
};

export default function Heading({
  type = "h1",
  children,
  className,
  ...props
}: Props) {
  if (type === "h1")
    return (
      <h1
        className={twMerge(
          "scroll-m-20 text-3xl font-extrabold tracking-tight",
          className
        )}
        {...props}
      >
        {children}
      </h1>
    );
  if (type === "h2")
    return (
      <h2
        className={twMerge(
          "mt-10 scroll-m-20 border-b border-b-neutral-200 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-neutral-700",
          className
        )}
        {...props}
      >
        {children}
      </h2>
    );
  if (type === "h3")
    return (
      <h3
        className={twMerge(
          "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
          className
        )}
        {...props}
      >
        {children}
      </h3>
    );
  else
    return (
      <h4
        className={twMerge(
          "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
          className
        )}
        {...props}
      >
        {children}
      </h4>
    );
}
