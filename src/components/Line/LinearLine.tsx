const LinearLine = ({
  wrapperClass,
  className
} : {
  wrapperClass?: string
  className?: string
}) => {
  return (
    <div className={`hidden lg:block w-full lg:h-44 xl:h-96 text-c-yellow ${wrapperClass}`}>
      <div className={`${className} h-full border-r-2`}></div>
    </div>
  );
};

export default LinearLine;