import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Heroes = () => {
  return (
    <>
      <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          Write , plan , share. With AI at your side.
        </h1>
        <h3 className="text-base sm:text-xl md:text-2xl font-medium">
          Notion is the connected workspace where better , faster work happes
        </h3>
        <Button>
          Get Notion Free <ArrowRight className="ml-2" />
        </Button>
        <div className="flex flex-col items-center justify-center max-w-5xl">
          <div className="flex items-center">
            <div className="relative h-[400px] w-[400px] hidden md:block">
              <Image
                src={"/main.svg"}
                alt={"logo"}
                fill
                className="object-cover dark:hidden"
              />
              <Image
                src={"/main-dark.svg"}
                alt={"logo"}
                fill
                className="object-cover dark:block hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
