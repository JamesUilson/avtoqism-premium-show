import { Link } from "@tanstack/react-router";
import { CarFront, Compass, House, Menu, Search, ShoppingBag, UserRound } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/" as const, label: "Bosh sahifa", icon: House },
  { to: "/garage" as const, label: "Garaj", icon: CarFront },
  { to: "/product" as const, label: "Katalog", icon: ShoppingBag },
  { to: "/feed" as const, label: "Feed", icon: Compass },
];

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" aria-label="AVTOQISM bosh sahifa" className={`font-display text-xl font-bold tracking-normal ${inverse ? "text-feed-foreground" : "text-foreground"}`}>
      AVTO<span className="text-primary">QISM</span>
    </Link>
  );
}

export function AppShell({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className={dark ? "min-h-screen bg-feed text-feed-foreground" : "min-h-screen bg-background text-foreground"}>
      {!dark && (
        <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
          <div className="mx-auto flex h-18 max-w-[1440px] items-center justify-between px-5 lg:px-10">
            <Brand />
            <nav className="hidden items-center gap-8 md:flex" aria-label="Asosiy navigatsiya">
              {nav.map((item) => (
                <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="nav-link text-sm font-medium text-muted-foreground" activeProps={{ className: "nav-link text-sm font-semibold text-foreground" }}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" aria-label="Qidirish" title="Qidirish"><Search /></Button>
              <Button variant="ghost" size="icon" aria-label="Profil" title="Profil"><UserRound /></Button>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menyu" title="Menyu"><Menu /></Button>
            </div>
          </div>
        </header>
      )}
      {children}
      <nav className={`fixed inset-x-0 bottom-0 z-50 grid grid-cols-4 border-t px-2 pb-[max(.55rem,env(safe-area-inset-bottom))] pt-2 md:hidden ${dark ? "border-feed-border bg-feed/95" : "border-border bg-background/95"}`} aria-label="Mobil navigatsiya">
        {nav.map((item) => {
          const Icon = item.icon;
          return <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className={`flex min-h-12 flex-col items-center justify-center gap-1 text-[10px] ${dark ? "text-feed-muted" : "text-muted-foreground"}`} activeProps={{ className: "flex min-h-12 flex-col items-center justify-center gap-1 text-[10px] text-primary" }}><Icon className="size-5" />{item.label}</Link>;
        })}
      </nav>
    </div>
  );
}

export function SectionHeading({ eyebrow, title, action }: { eyebrow?: string; title: string; action?: ReactNode }) {
  return <div className="mb-6 flex items-end justify-between gap-4"><div>{eyebrow && <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">{eyebrow}</p>}<h2 className="font-display text-2xl font-semibold md:text-3xl">{title}</h2></div>{action}</div>;
}