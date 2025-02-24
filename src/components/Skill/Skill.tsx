import { skills } from "../../data";
import { useMemo } from "react";

const Skill = ({
  filter
} : {
  filter: string;
}) => {
  // 최초 한번만 컴포넌트 리스트 생성 이후 메모제이션
  const cachedSkills = useMemo<SkillsType[]>(() => skills || [], []);

  // 탭에 따라 필터링
  const filteredSkills = useMemo<SkillsType[]>(() => {
    switch (filter) {
      case "tab1":
        return cachedSkills;
      case "tab2":
        return cachedSkills.filter(skill => skill.usage.includes('frequent'));
      case "tab3":
        return cachedSkills.filter(skill => skill.usage.includes('familiar'));
      default:
        return [];
    }
  }, [filter, cachedSkills]);

  return (
    <div className="grid grid-cols-2 gap-4">
      {filteredSkills.map((item, index) => (
        <article key={index} className="flex items-center gap-3">
          <figure className="w-10 h-10">{item.icon}</figure>
          <div className="text-left">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            {/*<p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>*/}
          </div>
        </article>
      ))}
    </div>
  );
};

export default Skill;