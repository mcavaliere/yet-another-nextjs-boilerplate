import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { createElement } from "react";

const baseStyles = "";

const variantStyles = {
  size: {
    h1: "text-2xl sm:text-3xl md:text-4xl",
    h2: "text-xl sm:text-2xl md:text-3xl",
    h3: "text-lg sm:text-xl md:text-2xl",
    h4: "text-md sm:text-lg md:text-xl",
    h5: "text-sm sm:text-md md:text-lg",
    h6: "text-xs sm:text-sm md:text-md",
  },
};

export const headingVariants = cva(baseStyles, {
  variants: variantStyles,
  defaultVariants: {
    size: "h1",
  },
});

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    tagName?: keyof JSX.IntrinsicElements;
  };

/**
 * Universal component for responsive h1...h6 tags. We apply responsive styles
 *  in the variants above to keep them consistent across the app, but allow overrides if needed.
 *
 * Note that the `size` prop is used to determine the variant, and the `tagName` prop is used to
 *  determine the actual tag; this allows loose coupling between the semantic tag and the visual style.
 *  E.g., you could have an <h2> styled like an <h3> so that it's visually smaller but still has the
 *   right meaning for your content.
 */
export function Heading({
  children,
  className = "",
  size = "h1",
  tagName = "h1",
  ...rest
}: HeadingProps) {
  const classNames = cn("font-bold", headingVariants({ size, className }));

  return createElement(tagName, { className: classNames, ...rest }, children);
}
