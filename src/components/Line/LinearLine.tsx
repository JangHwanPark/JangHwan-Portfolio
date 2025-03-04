const LinearLine = ({
  className
} : {
  className?: string
}) => {
  return (
    <div className='hidden lg:block w-full h-96 text-c-yellow'>
      <div className={`${className} h-full border-r-2`}></div>
    </div>
  );
};

export default LinearLine;