import { RefObject } from "react";

const PreloaderText = ({
  className,
  items,
  itemRef
} : {
  className: string;
  items: string[];
  itemRef: RefObject<(HTMLElement | null)[]>;
}) => {
  return (
    <div className={`${className} flex gap-5 items-center overflow-hidden transform`}>
      {items.map((item, index) => (
        <div
          key={index}
          // span 에 ref 할당
          ref={(el) => {
            itemRef.current[index] = el
          }}
          className='text-8xl font-bold'>
          {item}
        </div>
      ))}
    </div>
  );
};

export default PreloaderText;