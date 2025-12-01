import { SkillItem } from '@/widgets/project-viewer/ui/skill-item';

export const TechStackList = ({ stack }: { stack: readonly string[] }) => {  return (
    <div className="grid grid-cols-5 gap-4 justify-items-center mt-2">
      {stack.map((tech, index) => (
        <SkillItem key={index} techName={tech} />
      ))}
    </div>
  );
};

