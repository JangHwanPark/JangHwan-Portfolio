import React from 'react';

export interface BulletIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: number;  // px 단위
  bg?: string | null;  // CSS color
  rounded?: boolean;
  ref?: React.Ref<HTMLSpanElement>;
}

export const BulletIcon = ({
  size = 8,
  bg = null,
  rounded = true,
  style,
  ref,
  ...rest
}: BulletIconProps) => {
  return (
    <span
      aria-hidden="true"
      ref={ref}
      style={{
        display: "inline-block",
        width: size,
        height: size,
        ...(bg ? { backgroundColor: bg } : {}),
        borderRadius: rounded ? "50%" : "0",
        ...style,
      }}
      {...rest}
    />
  );
};