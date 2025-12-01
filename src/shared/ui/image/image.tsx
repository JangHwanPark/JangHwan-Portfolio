import React from 'react';


export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  widthSet?: {
    lg?: number;
    md?: number;
    sm?: number;
  };
  ref?: React.Ref<HTMLImageElement>;
}

export const Image = ({
  alt,
  src,
  className,
  ref,
  ...rest
}: ImageProps) => {
  return (
    <picture>
      <source srcSet={`${src}?w=800`} media="(min-width: 1024px)" />
      <source srcSet={`${src}?w=500`} media="(min-width: 640px)" />
      <img
        ref={ref}
        src={`${src}?w=300`}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
        {...rest}
      />
    </picture>
  );
}
