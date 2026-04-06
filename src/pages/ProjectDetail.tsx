import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaLink } from 'react-icons/fa';

import { skills } from '@/data';
import { projects } from '@/data';
import { STATUS_BADGE } from '@/widgets';

import LinkButton from '../components/Button/LinkButton';
import { BulletIcon, Image } from '@/shared/ui';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === Number(id));

  const findSkill = (name: string) => {
    return skills.find((skill) => skill.name.toLowerCase().includes(name.toLowerCase()));
  };

  if (!project) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#0b080c] text-white">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold">프로젝트를 찾을 수 없습니다</h2>
          <button
            onClick={() => navigate('/')}
            className="text-primary cursor-pointer underline"
          >
            홈으로 돌아가기
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#0b080c] text-slate-100">
      {/* 상단 네비게이션 */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0b080c]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex cursor-pointer items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
          >
            <FaArrowLeft size={14} />
            <span>돌아가기</span>
          </button>
          <span className="text-slate-600">/</span>
          <span className="text-sm text-slate-300">{project.name}</span>
        </div>
      </nav>

      {/* Hero 섹션 */}
      <header className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
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

        <h1 className="mb-3 text-4xl font-bold sm:text-5xl lg:text-6xl">{project.name}</h1>
        <p className="mb-8 text-lg text-slate-400">{project.dateRange}</p>

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
      </header>

      {/* 프로젝트 이미지 */}
      <div className="mx-auto max-w-6xl px-6 pb-16">
        <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 shadow-xl">
          <div className="from-primary/40 absolute inset-0 bg-gradient-to-tr via-transparent to-white/20 mix-blend-screen" />
          <Image
            alt={project.name}
            src={project.thumbnail ?? '/images/p4.webp'}
            className="h-full max-h-[500px] w-full object-cover"
          />
        </figure>
      </div>

      {/* 본문 콘텐츠 */}
      <div className="mx-auto max-w-6xl px-6 pb-24">
        {/* 설명 + 역할 */}
        <div className="mb-16 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-2xl font-bold">프로젝트 소개</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-slate-200/80">
              {project.description}
            </p>
          </div>

          {project.role && (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
                Role
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.role.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-100 shadow-inner shadow-black/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 주요 기능 + 도전 과제 */}
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-black/20">
            <h3 className="mb-4 text-lg font-semibold text-white">주요 기능</h3>
            <ul className="space-y-3 text-sm text-slate-200">
              {project.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <BulletIcon size={8} className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.challenges && project.challenges.length > 0 && (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-black/20">
              <h3 className="mb-4 text-lg font-semibold text-white">도전 과제</h3>
              <ul className="space-y-3 text-sm text-slate-200">
                {project.challenges.map((challenge: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <BulletIcon size={8} className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* 기술 스택 */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-black/20">
          <h3 className="mb-4 text-lg font-semibold text-white">사용한 기술</h3>
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
            <div className="mt-6 border-t border-white/10 pt-4">
              <h4 className="mb-3 text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
                협업 도구
              </h4>
              <div className="flex flex-wrap gap-2 text-xs text-slate-200">
                {project.collaborationTools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 수상 & 논문 */}
        {(project.awards || project.paperLink) && (
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-black/20">
            {project.awards && (
              <div className="mb-4">
                <h3 className="mb-3 text-lg font-semibold text-white">수상 내역</h3>
                <ul className="space-y-2 text-sm text-slate-200">
                  {project.awards.map((award, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span>🏆</span>
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.paperLink && (
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">관련 논문</h3>
                <a
                  href={project.paperLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm underline"
                >
                  논문 보기
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;
