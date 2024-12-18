"use client";

import Link from "next/link";
import { Wrapper } from "./Wrapper";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Headset, Menu } from "lucide-react";
import { useState } from "react";

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

const Navbar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="shadow-md sticky top-0 z-1000 bg-white">
      <Wrapper className="flex justify-between items-center h-16">
        <div className="flex md:hidden items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex gap-1">
                    Clinic
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      color={"#00CE8F"}
                      fill={"none"}
                    >
                      <path
                        d="M11 18H15M13.5 8H14.4429C15.7533 8 16.4086 8 16.9641 8.31452C17.5196 8.62904 17.89 9.20972 18.6308 10.3711C19.1502 11.1854 19.6955 11.7765 20.4622 12.3024C21.2341 12.8318 21.6012 13.0906 21.8049 13.506C22 13.9038 22 14.375 22 15.3173C22 16.5596 22 17.1808 21.651 17.5755C21.636 17.5925 21.6207 17.609 21.6049 17.625C21.2375 18 20.6594 18 19.503 18H19"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 18C3.58579 18 2.87868 18 2.43934 17.5607C2 17.1213 2 16.4142 2 15V8C2 6.58579 2 5.87868 2.43934 5.43934C2.87868 5 3.58579 5 5 5H10.5C11.9142 5 12.6213 5 13.0607 5.43934C13.5 5.87868 13.5 6.58579 13.5 8V18H9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 15H21"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 9V13M10 11L6 11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="17"
                        cy="18"
                        r="2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="7"
                        cy="18"
                        r="2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </Link>
                </SheetTitle>
                {routes.map((route) => (
                  <Link
                    key={route.name}
                    href={route.path}
                    className={cn(
                      "hover:bg-[#00CE8F]/30  text-left p-3 rounded-md",
                      pathName === route.path &&
                        "bg-[#00CE8F] hover:bg-[#00CE8F] text-white"
                    )}
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    {route.name}
                  </Link>
                ))}
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <Link href="/" className="flex gap-1">
          Clinic
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"#00CE8F"}
            fill={"none"}
          >
            <path
              d="M11 18H15M13.5 8H14.4429C15.7533 8 16.4086 8 16.9641 8.31452C17.5196 8.62904 17.89 9.20972 18.6308 10.3711C19.1502 11.1854 19.6955 11.7765 20.4622 12.3024C21.2341 12.8318 21.6012 13.0906 21.8049 13.506C22 13.9038 22 14.375 22 15.3173C22 16.5596 22 17.1808 21.651 17.5755C21.636 17.5925 21.6207 17.609 21.6049 17.625C21.2375 18 20.6594 18 19.503 18H19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 18C3.58579 18 2.87868 18 2.43934 17.5607C2 17.1213 2 16.4142 2 15V8C2 6.58579 2 5.87868 2.43934 5.43934C2.87868 5 3.58579 5 5 5H10.5C11.9142 5 12.6213 5 13.0607 5.43934C13.5 5.87868 13.5 6.58579 13.5 8V18H9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 15H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 9V13M10 11L6 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="17"
              cy="18"
              r="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle
              cx="7"
              cy="18"
              r="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </Link>

        <div className="hidden md:flex items-center gap-6 ">
          {routes.map((route) => (
            <Link
              href={route.path}
              key={route.name}
              className={cn(
                "hover:underline",
                pathName === route.path && "font-semibold"
              )}
            >
              {route.name}
            </Link>
          ))}
        </div>

        <Button asChild>
          <Link href="tel:4379705609">
            <Headset className="h-4 w-4" />
          </Link>
        </Button>
      </Wrapper>
    </div>
  );
};

export default Navbar;
