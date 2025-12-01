import { SkillItem } from '@/widgets/project-viewer/ui/skill-item';

export const TechStackList = ({ stack }: { stack: readonly string[] }) => {
  return (
    <div className="mt-2 grid grid-cols-5 justify-items-center gap-4">
      {stack.map((tech, index) => (
        <SkillItem key={index} techName={tech} />
      ))}
    </div>
  );
};
