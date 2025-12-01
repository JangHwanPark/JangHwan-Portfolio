const CurveLine = ({
  containerClass,
  firstClass,
  lastClass,
}: {
  containerClass?: string;
  firstClass?: string;
  lastClass?: string;
}) => {
  return (
    <div className={`text-c-yellow hidden w-full lg:block ${containerClass}`}>
      <div className={`h-1/2 border-r-2 border-b-2 ${firstClass}`}></div>
      <div className={`h-1/2 border-l-2 ${lastClass}`}></div>
    </div>
  );
};

export default CurveLine;
