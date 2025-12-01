import { FaGithub, FaLink } from 'react-icons/fa';
import { MdCloseFullscreen } from 'react-icons/md';

import { skills } from '@/data';
import { useScrollLock } from '@/shared';
import { STATUS_BADGE } from '@/widgets';

import LinkButton from '../components/Button/LinkButton';
import { BulletIcon, Image } from "@/shared/ui";

interface ProjectDetailProps {
  project?: ProjectsType;
  onClose?: () => void;
}

const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
  useScrollLock(!!project);

  const findSkill = (name: string) => {
    return skills.find((skill) => skill.name.toLowerCase().includes(name.toLowerCase()));
  };

  if (!project) return null;

  return (
    <section
    className="
      animate-fadeIn fixed inset-0 z-[999]
      flex justify-center
      items-start sm:items-center
      bg-black/60 backdrop-blur-md
      px-4 py-6 sm:p-8
      overflow-y-auto
    "
    onClick={onClose}
  >
      {/* 모달 본문 */}
      <article
        className="modal-content relative w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800 text-slate-100 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="bg-primary/30 absolute -top-24 -left-16 h-56 w-56 rounded-full blur-3xl" />
          <div className="absolute -right-24 -bottom-28 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        </div>

        {/* 닫기 버튼 */}
        <div className="text-slate-100 mt-2 mr-2 flex justify-end">
          <button onClick={onClose} className="cursor-pointer px-2 py-2">
            <MdCloseFullscreen size={20} />
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid gap-10 p-6 sm:p-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span
                className={`rounded-full border px-3 py-1 ${STATUS_BADGE[project.status] || 'border-white/20 bg-white/10'}`}
              >
                {project.status}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200">
                {project.projectType} 프로젝트
              </span>
              {project.teamSize && (
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200">
                  팀원 {project.teamSize}명
                </span>
              )}
            </div>

            <div className="space-y-3">
              <p className="text-primary text-xs tracking-[0.25em] uppercase">Featured Project</p>
              <h2 className="text-3xl leading-tight font-bold sm:text-4xl">{project.name}</h2>
              <p className="text-sm text-slate-300">{project.dateRange}</p>
              <p className="text-base leading-relaxed text-slate-200/80">{project.description}</p>
            </div>

            {(project.demo || project.github) && (
              <div className="flex flex-wrap gap-3">
                {project.demo && (
                  <LinkButton
                    href={project.demo}
                    title="Live Demo"
                    className="shadow-primary/20 hover:border-primary/60 hover:bg-primary/80 border border-white/15 bg-white/10 text-white shadow-inner backdrop-blur"
                  >
                    <FaLink />
                  </LinkButton>
                )}
                {project.github && (
                  <LinkButton
                    href={project.github}
                    title="Source Code"
                    className="border border-white/15 bg-slate-800/60 text-white shadow-inner shadow-black/30 backdrop-blur hover:border-white/60 hover:bg-slate-700"
                  >
                    <FaGithub />
                  </LinkButton>
                )}
              </div>
            )}

            {project.role && (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
                  Role
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.role.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-100 shadow-inner shadow-black/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column – 프로젝트 이미지 */}
          <figure className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 shadow-xl">
            <div className="from-primary/40 absolute inset-0 bg-gradient-to-tr via-transparent to-white/20 mix-blend-screen" />
            <Image
              alt={project.name}
              src="/images/p4.webp"
              className="h-full w-full object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex flex-wrap items-center gap-2 bg-gradient-to-t from-black/80 to-transparent p-4 text-xs text-slate-100">
              {project.stack.slice(0, 8).map((tech) => {
                const skill = findSkill(tech);
                return (
                  <span
                    key={tech}
                    className={`flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 text-[11px] font-medium shadow-inner backdrop-blur ${
                      skill?.color || ''
                    }`}
                  >
                    <span className="text-sm">{skill?.icon || '⚙'}</span>
                    {tech}
                  </span>
                );
              })}
            </figcaption>
          </figure>
        </div>

        {/* Bottom Sections */}
        <div className="space-y-6 border-t border-white/10 bg-slate-900/70 px-6 pt-6 pb-8 sm:px-10 sm:pt-8 sm:pb-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-black/20">
              <h3 className="mb-3 text-lg font-semibold text-white">주요 기능</h3>
              <ul className="space-y-2 text-sm text-slate-200">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <BulletIcon size={8} className="mt-1 h-2 w-2 rounded-full bg-blue-400"/>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-black/20">
              <h3 className="mb-3 text-lg font-semibold text-white">도전 과제</h3>
              <ul className="space-y-2 text-sm text-slate-200">
                {project.challenges?.map((challenge: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <BulletIcon size={8} className="mt-1 h-2 w-2 rounded-full bg-blue-400"/>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-black/20">
            <h3 className="mb-4 text-lg font-semibold text-white">사용한 기술 & 협업 도구</h3>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech: string, index: number) => {
                const skill = findSkill(tech);
                return (
                  <span
                    key={index}
                    className={`flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/40 px-3 py-2 text-sm text-slate-100 shadow-inner ${skill?.color || ''}`}
                  >
                    <span className="text-base">{skill?.icon || '⚙'}</span>
                    {tech}
                  </span>
                );
              })}
            </div>
            {project.collaborationTools && project.collaborationTools.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-200">
                {project.collaborationTools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProjectDetail;
