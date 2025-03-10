import profileImg from "../../../public/images/p1.webp";
import { useRef } from "react";
import clsx from "clsx";

const Avatar = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const imgSize = clsx(
    'rounded-full lg:rounded-lg',
    'w-62 h-62 sm:w-80 sm:h-80 lg:w-[410px] xl:w-[410px]',
    'lg:h-[410px] xl:h-[450px]' ,);
  return (
    <div className={`relative lg:-top-2 ${imgSize}`}>
      <div className={`hidden lg:block ${imgSize} bg-c-yellow absolute top-5 left-5`}></div>
      <img ref={imgRef} src={profileImg} alt="Profile" className={`${imgSize} object-cover relative z-10`}/>
    </div>
  );
};

export default Avatar;