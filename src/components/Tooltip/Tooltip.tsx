import { forwardRef } from 'react';

interface TooltipProps {
  text: string;
  className?: string;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(({ text, className }, ref) => {
  return (
    <div
      ref={ref}
      className={`absolute bottom-[-50px] z-10 rounded bg-gray-900 px-2 py-1 text-center text-sm text-white opacity-0 ${className}`}
    >
      {text}
    </div>
  );
});

export default Tooltip;
