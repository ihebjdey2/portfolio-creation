'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Download,
  FolderKanban,
  GraduationCap,
  Layers3,
  Mail,
  UserRound,
} from 'lucide-react'
import type { Language } from '@/lib/language-context'
import { education, experiences, localize, profile, projects, skillCategories } from '@/lib/portfolio-data'
import { SkillsMatrix } from './skills-matrix'

export function ProjectsSection({ language }: { language: Language }) {
  const isEnglish = language === 'en'
  const reelProjects = projects.slice(0, 5)

  return (
    <section className="dashboard-showcase" aria-label={isEnglish ? 'Portfolio overview' : 'Aperçu du portfolio'}>
      <div className="dashboard-bento">
        <article id="projects" className="dashboard-tile dashboard-tile-projects scroll-mt-6">
          <div className="dashboard-tile-head">
            <div className="dashboard-tile-label"><span className="dashboard-tile-icon"><FolderKanban size={22} aria-hidden="true" /></span><h2>{isEnglish ? 'Projects' : 'Projets'}</h2></div>
            <p>{isEnglish ? 'Products and experiments built to solve real problems.' : 'Produits et expériences conçus pour résoudre de vrais problèmes.'}</p>
          </div>
          <div className="mini-project-reel" aria-label={isEnglish ? 'Animated project previews' : 'Aperçus de projets animés'}>
            <div className="mini-project-reel-track">
            {reelProjects.concat(reelProjects).map((project, index) => (
              <Link key={`${project.slug}-${index}`} href={`/projects/${project.slug}`} className="mini-project-shot" aria-hidden={index >= reelProjects.length || undefined} tabIndex={index >= reelProjects.length ? -1 : undefined}>
                {project.heroMedia ? <Image src={project.heroMedia.src} alt="" width={project.heroMedia.width} height={project.heroMedia.height} sizes="240px" /> : <span className="mini-project-placeholder"><BrainCircuit size={30} aria-hidden="true" /></span>}
                <span className="sr-only">{project.title} — {localize(project.category, language)}</span>
              </Link>
            ))}
            </div>
          </div>
        </article>

        <article id="about" className="dashboard-tile scroll-mt-6">
          <DashboardTitle icon={UserRound} title={isEnglish ? 'About' : 'À propos'} description={isEnglish ? 'Who I am and how I work.' : 'Qui je suis et comment je travaille.'} />
          <div className="about-mini"><Image src="/profile.jpg" alt="" width={180} height={220} /><p>{profile.about[language][0]}</p></div>
        </article>

        <article id="skills" className="dashboard-tile scroll-mt-6">
          <DashboardTitle icon={BrainCircuit} title={isEnglish ? 'AI & Skills' : 'IA & Compétences'} description={isEnglish ? 'The technologies I build with.' : 'Les technologies que j’utilise.'} />
          <div className="skill-mini-list">
            {skillCategories.slice(0, 4).map((category) => <span key={category.id}><strong>{localize(category.title, language)}</strong><small>{category.skills.slice(0, 3).join(' · ')}</small></span>)}
          </div>
          <SkillsMatrix language={language} />
        </article>

        <article id="experience" className="dashboard-tile scroll-mt-6">
          <DashboardTitle icon={BriefcaseBusiness} title={isEnglish ? 'Experience' : 'Expérience'} description={isEnglish ? 'Roles where I shipped software.' : 'Mes expériences en développement.'} />
          <div className="experience-mini-list">
            {experiences.slice(0, 3).map((experience) => <span key={`${experience.company}-${experience.period}`}><b>{experience.company}</b><small>{localize(experience.role, language)}</small><em>{experience.period}</em></span>)}
          </div>
        </article>

        <article id="education" className="dashboard-tile scroll-mt-6">
          <DashboardTitle icon={GraduationCap} title={isEnglish ? 'Education' : 'Formation'} description={isEnglish ? 'Software engineering foundations.' : 'Formation en génie logiciel.'} />
          <div className="education-mini"><strong>{education[0].institution}</strong><p>{localize(education[0].degree, language)}</p><span>{education[0].period}</span><div className="education-badge"><Layers3 size={18} aria-hidden="true" />GAMIX</div></div>
        </article>

        <article id="contact" className="dashboard-tile dashboard-tile-contact scroll-mt-6">
          <DashboardTitle icon={Mail} title="Contact" description={isEnglish ? 'Open to software opportunities and product work.' : 'Ouvert aux opportunités software et produit.'} />
          <div className="contact-mini"><a href="mailto:ihebjdey2@gmail.com">ihebjdey2@gmail.com<ArrowUpRight size={15} aria-hidden="true" /></a><a href={language === 'fr' ? '/api/resume/fr' : '/api/resume/en'}><Download size={15} aria-hidden="true" />{isEnglish ? 'Download résumé' : 'Télécharger le CV'}</a></div>
        </article>
      </div>
    </section>
  )
}

function DashboardTitle({ icon: Icon, title, description }: { icon: typeof FolderKanban; title: string; description: string }) {
  return <header className="dashboard-tile-head"><div className="dashboard-tile-label"><span className="dashboard-tile-icon"><Icon size={22} aria-hidden="true" /></span><h2>{title}</h2></div><p>{description}</p></header>
}
