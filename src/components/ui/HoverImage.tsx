"use client";

import Link from "next/link";

import { TextReveal } from "./Typography";

interface HoverImageProps {
  heading: string;
  subheading: string;
  price: string;
}

export const HoverImage = ({
  heading,
  subheading,
  price,
}: HoverImageProps) => {
  return (
    <Link
      href={"#contact"}
      className="group relative flex items-center justify-between border-b border-white/10 py-4 transition-colors duration-500 md:py-6 md:px-16 hover:bg-white/5"
    >
      <div>
        <div className="flex items-center justify-between">
          <h4 className="relative z-10 block text-2xl sm:text-4xl font-semibold md:font-bold md:text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl tracking-tighter">
            {heading}
          </h4>
          <span className="md:text-2xl text-foreground/50 md:hidden">
            {price}
          </span>
        </div>
        <p className="relative z-10 mt-2 block md:text-base text-sm text-foreground/50 transition-colors duration-500 group-hover:text-neutral-50 pt-2">
          {subheading}
        </p>
      </div>

      <div className="z-10 md:p-4 grid justify-items-end gap-2 max-md:hidden">
        <span className="md:text-2xl text-neutral-50 pr-1">{price}</span>
      </div>
    </Link>
  );
};
