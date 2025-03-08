import profileImg from "../../assets/images/p1.webp";
import { useRef } from "react";
import clsx from "clsx";

const Avatar = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const imgSize = clsx('lg:w-[450px] xl:w-[410px] lg:h-[450px] rounded-lg');
  return (
    <div className={`relative lg:-top-2 ${imgSize}`}>
      <div className={`${imgSize} bg-c-yellow absolute top-5 left-5`}></div>
      <img ref={imgRef} src={profileImg} alt="Profile" className={`w-62 h-62 ${imgSize} object-cover rounded-full lg:rounded-lg relative z-10`}/>
    </div>
  );
};

export default Avatar;