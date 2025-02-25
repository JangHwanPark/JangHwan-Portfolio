interface TagItems {
  label: string;
}

const Tags = ({
  items,
} : {
  items: TagItems[];
}) => {
  return (
    <ul className="w-fit text-lg mb-3 flex flex-row gap-3">
      {items.map((item, index) => (
        <li key={index}>#{item.label}</li>
      ))}
    </ul>
  );
};

export default Tags;