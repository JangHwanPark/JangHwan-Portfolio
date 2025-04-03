import { forwardRef } from "react";

interface TooltipProps {
  text: string;
  className?: string;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(({ text, className }, ref) => {
  return (
    <div ref={ref} className={`absolute bottom-[-50px] bg-gray-900 text-white px-2 py-1 rounded opacity-0 text-sm text-center z-10 ${className}`}>
      {text}
    </div>
  );
});

export default Tooltip;