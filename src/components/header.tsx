"use client";

import Link from "next/link";
import Container from "./container";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode.toggle";

const Header = () => {
  const path = usePathname();
  const isHome = path === "/";

  return (
    <header className={`${isHome && "border-b border-border shadow"} p-8`}>
      <Container className="flex justify-between">
        <Link className="font-semibold text-2xl" href="/">
          NextIdea
        </Link>
        <ModeToggle />
      </Container>
    </header>
  );
};

export default Header;
