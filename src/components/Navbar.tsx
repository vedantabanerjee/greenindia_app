import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  const navLinks = [
    { title: "Home", url: "/" },
    { title: "Dashboard", url: "/dashboard" },
    { title: "Blogs", url: "/blog" },
    { title: "Chat", url: "/chat" },
  ];

  return (
    <nav className="sticky z-[100] bg-white h-14 inset-x-0 border-b border-gray-200 top-0 w-full backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href={"/"}>
            <span className="flex z-40 font-semibold cursor-pointer">
              <span className="text-green-500">Green </span>India
            </span>
          </Link>
          <div className="h-full flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link key={link.url} href={link.url}>
                <span className={buttonVariants({ size: "sm", variant: "ghost" }) + " cursor-pointer"}>
                  {link.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
