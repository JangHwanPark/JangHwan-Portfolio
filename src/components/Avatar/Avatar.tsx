import { forwardRef } from 'react';

import clsx from 'clsx';

import profileImg from '../../../public/images/p1.webp';

const Avatar = forwardRef<HTMLDivElement, {}>((_, ref) => {
  const imgSize = clsx(
    'rounded-full lg:rounded-lg',
    'w-62 h-62 sm:w-80 sm:h-80 lg:w-[410px] xl:w-[410px]',
    'lg:h-[410px] xl:h-[450px]'
  );
  return (
    <div ref={ref} className={`relative lg:-top-2 ${imgSize}`}>
      <div className={`hidden lg:block ${imgSize} bg-c-yellow absolute top-5 left-5`}></div>
      <img src={profileImg} alt="Profile" className={`${imgSize} relative z-10 object-cover`} />
    </div>
  );
});

export default Avatar;
