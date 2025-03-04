import { useRef, memo } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

interface TagItems {
  label: string;
}

const Tags = ({
  items,
} : {
  items: TagItems[];
}) => {
  const listRef = useRef<(HTMLLIElement | null)[]>([]);
  useGSAP(() => {
    // const listItems = gsap.utils.toArray(listRef.current);
    const listItems = listRef.current.filter(Boolean) as HTMLLIElement[];
    gsap.set(listItems, {
      translateY: 25,
    });

    listItems.forEach((item, index) => {
      gsap.to(item, {
        y: 30, // 위로 약간 이동
        duration: 0.6,
        ease: "elastic.out(1, 0.5)", // 바운스 효과 적용
        // repeat: -1, // 무한 반복
        yoyo: true, // 왕복 애니메이션 적용 (위->아래->위)
        delay: index * 0.1, // 태그별로 순차적으로 실행
      })
    })
  })

  return (
    <ul className="w-fit text-sm md:text-lg mb-1 flex flex-row gap-3">
      {items.map((item, index) => (
        <li key={index} ref={(el) => {
          if (el) listRef.current[index] = el;
        }}>#{item.label}</li>
      ))}
    </ul>
  );
};

export default memo(Tags);