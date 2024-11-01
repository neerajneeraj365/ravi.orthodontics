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
import { Menu } from "lucide-react";

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
  return (
    <div className="shadow-md">
      <Wrapper className="flex justify-between items-center h-16">
        <div className="flex md:hidden items-center">
          {/* TODO: Mobile Navbar */}
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/">Dental</Link>
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
                  >
                    {route.name}
                  </Link>
                ))}
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <Link href="/">Dental</Link>

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
          <Link href="/book">Book Now</Link>
        </Button>
      </Wrapper>
    </div>
  );
};

export default Navbar;
