const ProjectCard = () => {
  const handleBtnClick = () => {
    console.log('Button clicked');
  }

  const handleImgClick = () => {
    console.log("clicked image");
  }

  return (
    <div className='w-[768px] min-h-[559px] pt-3 bg-gray-200 rounded-xl'>
      <div className='relative pb-3 px-3 flex items-center justify-between'>
        <p className='mx-auto'>Project Name</p>
        <ul className='absolute right-3 flex items-center justify-end gap-2'>
          <li><button onClick={handleBtnClick}>이전</button></li>
          <li><button onClick={handleBtnClick}>다음</button></li>
        </ul>
      </div>
      <img src="/src/assets/images/p1.jpg" alt="" className='w-full h-full min-h-full rounded-b-xl cursor-pointer object-cover' onClick={handleImgClick}/>
    </div>
  );
};

export default ProjectCard;