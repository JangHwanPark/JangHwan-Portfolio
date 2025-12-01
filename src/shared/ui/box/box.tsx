import React from 'react';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

export const Box = ({ ref, style, ...rest }: BoxProps) => {
  return <div ref={ref} style={{ ...style }} {...rest} />;
}
