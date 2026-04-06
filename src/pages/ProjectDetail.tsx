import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaLink } from 'react-icons/fa';

import { skills } from '@/data';
import { projects } from '@/data';
import { STATUS_BADGE } from '@/widgets';

import LinkButton from '../components/Button/LinkButton';
import { Image } from '@/shared/ui';

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
        <div className="mx-auto flex max-w-3xl items-center gap-4 px-6 py-4">
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

      {/* 헤더: 제목 → 메타 → 날짜 → 링크 */}
      <header className="mx-auto max-w-3xl px-6 pt-16 pb-10">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">{project.name}</h1>

        <div className="mb-3 flex flex-wrap items-center gap-2 text-sm">
          <span
            className={`rounded-full border px-3 py-1 ${STATUS_BADGE[project.status] || 'border-white/20 bg-white/10'}`}
          >
            {project.status}
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300">
            {project.projectType}
          </span>
          {project.teamSize && (
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300">
              {project.teamSize}명
            </span>
          )}
          {project.role.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>

        <p className="mb-6 text-sm text-slate-500">{project.dateRange}</p>

        {(project.demo || project.github) && (
          <div className="flex flex-wrap gap-3">
            {project.demo && (
              <LinkButton
                href={project.demo}
                title="Live Demo"
                className="border border-white/15 bg-white/10 text-white backdrop-blur hover:bg-white/20"
              >
                <FaLink />
              </LinkButton>
            )}
            {project.github && (
              <LinkButton
                href={project.github}
                title="Source Code"
                className="border border-white/15 bg-white/10 text-white backdrop-blur hover:bg-white/20"
              >
                <FaGithub />
              </LinkButton>
            )}
          </div>
        )}
      </header>

      {/* 히어로 이미지 */}
      <figure className="mx-auto max-w-3xl px-6 pb-12">
        <Image
          alt={project.name}
          src={project.thumbnail ?? '/images/p4.webp'}
          className="w-full object-cover"
        />
      </figure>

      {/* 본문 — 단일 컬럼 블로그식 */}
      <article className="mx-auto max-w-3xl px-6 pb-24">
        {/* 프로젝트 소개 */}
        <div className="mb-12">
          <h2 className="mb-4 text-xl font-bold">프로젝트 소개</h2>
          <p className="whitespace-pre-line text-base leading-relaxed text-slate-300">
            {project.description}
          </p>
        </div>

        {/* 주요 기능 */}
        <div className="mb-12">
          <h2 className="mb-4 text-xl font-bold">주요 기능</h2>
          <ul className="space-y-2 text-base text-slate-300">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 도전 과제 */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="mb-12">
            <h2 className="mb-4 text-xl font-bold">도전 과제</h2>
            <ul className="space-y-2 text-base text-slate-300">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 기술 스택 */}
        <div className="mb-12">
          <h2 className="mb-4 text-xl font-bold">기술 스택</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, index) => {
              const skill = findSkill(tech);
              return (
                <span
                  key={index}
                  className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                >
                  <span className="text-sm">{skill?.icon || '⚙'}</span>
                  {tech}
                </span>
              );
            })}
          </div>
        </div>

        {/* 수상 & 논문 */}
        {(project.awards || project.paperLink) && (
          <div className="mb-12 border-t border-white/10 pt-10">
            {project.awards && (
              <div className="mb-6">
                <h2 className="mb-4 text-xl font-bold">수상 내역</h2>
                <ul className="space-y-2 text-base text-slate-300">
                  {project.awards.map((award, index) => (
                    <li key={index}>{award}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.paperLink && (
              <div>
                <h2 className="mb-2 text-xl font-bold">관련 논문</h2>
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
      </article>
    </section>
  );
};

export default ProjectDetail;
