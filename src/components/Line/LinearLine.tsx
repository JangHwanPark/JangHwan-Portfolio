const LinearLine = ({ wrapperClass, className }: { wrapperClass?: string; className?: string }) => {
  return (
    <div className={`text-c-yellow hidden w-full lg:block lg:h-44 xl:h-96 ${wrapperClass}`}>
      <div className={`${className} h-full border-r-2`}></div>
    </div>
  );
};

export default LinearLine;
