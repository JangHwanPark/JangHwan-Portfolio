import React from 'react';

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

export const Flex = ({ ref, style, ...rest }: FlexProps) => {
  return (
    <div
      ref={ref}
      style={{ display: "flex", ...style }}
      {...rest}
    />
  );
}
