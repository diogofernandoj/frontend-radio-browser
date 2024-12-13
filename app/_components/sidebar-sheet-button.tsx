"use client";

import { MenuIcon, RadioIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import SidebarContent from "./sidebar";

const SidebarSheetButton = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="w-max lg:hidden">
        <Button size="sm">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>

      <SheetContent className="w-max" side="left">
        <SheetTitle className="font-bold text-black flex">
          <RadioIcon />
          RadioBrowser
        </SheetTitle>
        <SheetDescription>
          Navegue entre as páginas da aplicação.
        </SheetDescription>
        <SidebarContent />
      </SheetContent>
    </Sheet>
  );
};

export default SidebarSheetButton;
