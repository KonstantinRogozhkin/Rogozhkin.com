import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getThemeStyles = (isDark: boolean) => ({
  layout: cn(
    "min-h-screen relative",
    "transition-colors duration-300",
    {
      "bg-[#0B1120] text-cyan-50": isDark,
      "bg-[#F4F6FA] text-zinc-800": !isDark
    }
  ),
  background: cn(
    "absolute inset-0",
    {
      "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_0%_0%,rgba(34,211,238,0.1),transparent_40%),radial-gradient(circle_at_100%_100%,rgba(192,132,252,0.15),transparent_40%)]": isDark,
      "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,1),transparent_50%),radial-gradient(circle_at_100%_100%,rgba(248,250,252,1),transparent_50%)]": !isDark
    }
  ),
  overlay: cn(
    "absolute inset-0",
    {
      "bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.4))]": isDark,
      "bg-[url('/grid-light.svg')] opacity-[0.015]": !isDark
    }
  )
}); 