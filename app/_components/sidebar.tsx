"use client";

import { RadioIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="min-h-full w-80 bg-white">
      <div className="px-8 py-6">
        <h1 className="hidden font-bold text-black lg:flex">
          <RadioIcon />
          RadioBrowser
        </h1>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <Button
          variant={pathname === "/" ? "secondary" : "ghost"}
          className={`justify-start gap-2 ${
            pathname === "/" && "font-semibold"
          }`}
          asChild
        >
          <Link href="/">Todas as radios</Link>
        </Button>
        <Button
          variant={pathname === "/favorites" ? "secondary" : "ghost"}
          className={`justify-start gap-2 ${
            pathname === "/favorites" && "font-semibold"
          }`}
          asChild
        >
          <Link href="/favorites">Favoritos</Link>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
