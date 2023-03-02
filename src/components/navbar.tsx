import Link from "next/link";
import Image from "next/image";
import me from "public/images/Ghn.jpg";
import ButtonTheme from "@/components/buttonTheme";
import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Experience",
    href: "/experience",
  },
];
export default function Navbar() {
  const route = useRouter();

  return (
    <div className="bg-white/30 px-5 dark:bg-neutral-900/30">
      <nav className="mx-auto flex w-full max-w-3xl flex-col justify-between gap-3 py-4 sm:flex-row sm:items-center">
        <div className="flex items-center space-x-3">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={twMerge(
                "text-neutral-500 transition-colors ease-in hover:text-black dark:hover:text-neutral-100",
                route.pathname === link.href && "text-black dark:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <ButtonTheme />
        </div>
      </nav>
    </div>
  );
}
