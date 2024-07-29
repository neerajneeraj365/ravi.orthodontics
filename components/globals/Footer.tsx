"use client";

import Link from "next/link";
import { Wrapper } from "./Wrapper";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "About Me",
    path: "/about",
  },
];

const Footer = () => {
  const pathName = usePathname();
  return (
    <div>
      <footer className="bg-[#F6F6F6]">
        <Wrapper>
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <Link
                href="https://flowbite.com/"
                className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
              >
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Dental
                </span>
              </Link>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  {routes.map((route) => (
                    <Link
                      key={route.name}
                      href={route.path}
                      className={cn(
                        "hover:underline me-4 md:me-6",
                        pathName === route.path && "font-semibold underline"
                      )}
                    >
                      {route.name}
                    </Link>
                  ))}
                </li>
              </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <Link href="#" className="hover:underline">
                Dental
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </Wrapper>
      </footer>
    </div>
  );
};

export default Footer;
