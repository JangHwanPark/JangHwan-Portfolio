import { RefObject } from 'react';

const PreloaderText = ({
  className,
  items,
  itemRef,
}: {
  className: string;
  items: string[];
  itemRef: RefObject<(HTMLElement | null)[]>;
}) => {
  return (
    <div className={`${className} flex transform items-center gap-5 overflow-hidden`}>
      {items.map((item, index) => (
        <div
          key={index}
          // span 에 ref 할당
          ref={(el) => {
            itemRef.current[index] = el;
          }}
          className="text-2xl font-bold sm:text-3xl lg:text-8xl"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default PreloaderText;
