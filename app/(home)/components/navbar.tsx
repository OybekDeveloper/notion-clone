"use client";
import React from "react";
import Logo from "./logo";
import { ModeToggle } from "@/components/shared/mode-toggle";
import { Button } from "@/components/ui/button";
import { UseScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import Link from "next/link";
import Loader from "@/components/ui/loader";

export const Navbar = () => {
  const scrolled = UseScrolled();
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div
      className={cn(
        "flex items-center fixed top-0 z-50 w-full p-6 bg-background justify-between",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="flex items-center gap-x-2">
        {isLoading && <Loader />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button size={"sm"} variant={"ghost"}>
                Log In
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size={"sm"}> Get Notion Free</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant={"ghost"} size={"sm"} asChild>
              <Link href={"/documents"}>Enter Notion</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />{" "}
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};
