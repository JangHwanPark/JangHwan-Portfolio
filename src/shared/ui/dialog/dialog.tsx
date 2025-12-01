import React from 'react';

export interface DialogProps
  extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
  labelledBy?: string;
  describedBy?: string;
  onEscapeKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

/* TODO: composite, provider로 확장 예정 */
export function Dialog({
  ref,
  style,
  labelledBy,
  describedBy,
  onEscapeKeyDown,
  onKeyDown,
  ...rest
}: DialogProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      onEscapeKeyDown?.(event);
      event.stopPropagation();
    }
    // 사용자가 넘긴 onKeyDown도 호출
    onKeyDown?.(event);
  };
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy ?? undefined}
      aria-describedby={describedBy ?? undefined}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
      {...rest}
    />
  );
}
