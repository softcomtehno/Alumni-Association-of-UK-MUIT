import React from "react";
import clsx from "clsx";

export const allowedTags = [
  "h1",
  "h2",
  "h3",
  "h4",
  "body1",
  "body2",
  "span",
] as const;
export type AllowedTag = (typeof allowedTags)[number];

interface TypographyProps {
  variant: AllowedTag;
  children: React.ReactNode;
  className?: string;
  truncate?: boolean;
}

const baseStyles: Record<AllowedTag, string> = {
  h1: "text-[36px] sm:text-[48px] md:text-[60px] lg:text-[68px] font-semibold",
  h2: "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold",
  h3: "text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold",
  h4: "text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-semibold",
  body1:
    "text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] leading-normal  ",
  body2:
    "text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] leading-normal",
  span: "text-sm sm:text-base",
};

const tagMap: Record<AllowedTag, keyof JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body1: "p",
  body2: "p",
  span: "span",
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
  truncate = false,
}) => {
  const Component = tagMap[variant];

  return (
    <Component
      className={clsx(baseStyles[variant], truncate && "truncate", className)}
    >
      {children}
    </Component>
  );
};
