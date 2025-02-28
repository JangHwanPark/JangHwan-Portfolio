import { skills } from "../data";

/**
 * 스킬 데이터를 "사용 빈도 + 카테고리별"로 분류하는 함수
 */
export const getCategorizedSkills = () => {
  return skills.reduce((acc, skill) => {
    if (!acc[skill.usage]) {
      acc[skill.usage] = {
        FrontEnd: [],
        BackEnd: [],
        DevOps: [],
        Tools: [],
      };
    }

    if (acc[skill.usage][skill.category]) {
      acc[skill.usage][skill.category].push(skill);
    }

    return acc;
  }, {} as Record<string, Record<string, SkillsType[]>>);
};