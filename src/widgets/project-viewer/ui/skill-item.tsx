import { skills } from '@/data';

export const SkillItem = ({ techName }: { techName: string }) => {
  const skill = skills.find((skill) => skill.name.toLowerCase().includes(techName.toLowerCase()));

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <span className={`w-16 h-8 px-3 py-1 rounded-full text-sm flex items-center justify-center gap-1 bg-gray-100 ${skill?.color || "text-gray-500"}`}>
        {skill?.icon || "⚙"}
      </span>
      <span className="text-xs font-medium">{techName}</span>
    </div>
  );
};