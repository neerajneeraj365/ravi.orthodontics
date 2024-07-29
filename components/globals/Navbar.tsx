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
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
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

        <Button>Book me</Button>
      </Wrapper>
    </div>
  );
};

export default Navbar;
