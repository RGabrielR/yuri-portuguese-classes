import * as React from "react";
import Image from "next/image";

const Avatar = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <Image
    width={100}
    height={100}
    src={src}
    alt={alt}
    className={`rounded-full ${className}`} />
);

export { Avatar };
