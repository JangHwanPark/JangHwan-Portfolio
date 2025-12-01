import React from 'react';







export interface OverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

export const Overlay = ({ ref, style, ...rest }: OverlayProps) => {
  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        ...style,
      }}
      {...rest}
    />
  );
}
