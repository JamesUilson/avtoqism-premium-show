import { Link } from "@tanstack/react-router";
import { ArrowUpRight, BadgeCheck, MapPin, Star } from "lucide-react";
import wheel from "@/assets/wheel-product.jpg";
import headlights from "@/assets/headlights.jpg";

export const products = [
  { name: "R17 Graphite disk va shina", price: "6 490 000 so‘m", image: wheel, tag: "100% mos" },
  { name: "Bi-LED premium faralar", price: "3 850 000 so‘m", image: headlights, tag: "Yangi" },
  { name: "Cobalt uchun salon gilamlar", price: "690 000 so‘m", image: wheel, tag: "Top tanlov" },
];

export function ProductCard({ product = products[0], compact = false }: { product?: (typeof products)[number]; compact?: boolean }) {
  if (!product) return null;
  return <Link to="/product" className="group block min-w-0">
    <div className={`overflow-hidden bg-muted ${compact ? "aspect-[4/3]" : "aspect-[4/5]"}`}><img src={product.image} alt={product.name} width={1200} height={1500} loading="lazy" className="image-zoom h-full w-full object-cover" /></div>
    <div className="pt-4"><div className="mb-2 flex items-center justify-between gap-3"><span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">{product.tag}</span><ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div><h3 className="font-display text-base font-semibold leading-snug md:text-lg">{product.name}</h3><p className="mt-2 text-sm font-semibold">{product.price}</p></div>
  </Link>;
}

export function SellerLine({ dark = false }: { dark?: boolean }) {
  return <div className="flex items-center gap-3"><div className={`grid size-10 place-items-center rounded-full text-xs font-bold ${dark ? "bg-feed-foreground text-feed" : "bg-foreground text-background"}`}>AM</div><div><div className="flex items-center gap-1.5 text-sm font-semibold">AvtoMax <BadgeCheck className="size-4 text-primary" /></div><div className={`flex items-center gap-1 text-xs ${dark ? "text-feed-muted" : "text-muted-foreground"}`}><MapPin className="size-3" /> Sergeli, Toshkent</div></div></div>;
}

export function Rating() { return <span className="inline-flex items-center gap-1 text-sm font-semibold"><Star className="size-4 fill-primary text-primary" /> 4.9 <span className="font-normal text-muted-foreground">(127 sharh)</span></span>; }