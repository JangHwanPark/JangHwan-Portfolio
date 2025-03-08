const CurveLine = ({
  containerClass,
                     firstClass,
  lastClass,
} : {
  containerClass?: string,
  firstClass?: string,
  lastClass?: string,
}) => {
  return (
    <div className={`hidden lg:block w-full text-c-yellow ${containerClass}`}>
      <div className={`h-1/2 border-r-2 ${firstClass}`}></div>
      <div className={`h-1/2 border-l-2 ${lastClass}`}></div>
    </div>
  );
};

export default CurveLine;