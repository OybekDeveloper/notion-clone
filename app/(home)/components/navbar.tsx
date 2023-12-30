"use client"

import React from "react";
import Logo from "./logo";
import { ModeToggle } from "@/components/shared/mode-toggle";
import { Button } from "@/components/ui/button";
import { UseScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";
export const Navbar=()=>{
  const scrolled =UseScrolled();
  return (
    <div className={cn("flex items-center fixed top-0 z-50 w-full p-6 bg-background justify-between",
      scrolled && "border-b shadow-sm"
    )}>
      <Logo />
      <div className="flex items-center gap-x-2">
        <Button size={'sm'} variant={'ghost'} >Log In</Button>
        <Button size={'sm'}> Get Notion Free</Button>
        <ModeToggle />
      </div>
    </div>
  );
};