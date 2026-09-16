'use client'

import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowUpRight, BrainCircuit, Code2, Database, GitBranch, Layers3, Server, Smartphone, X } from 'lucide-react'
import type { Language } from '@/lib/language-context'

type MatrixSkill = { name: string; level: number }
type MatrixGroup = {
  id: string
  title: { en: string; fr: string }
  icon: typeof Code2
  skills: MatrixSkill[]
}

// Relative focus across portfolio projects, not a formal proficiency assessment.
const groups: MatrixGroup[] = [
  { id: 'foundational', title: { en: 'Foundational', fr: 'Fondamentaux' }, icon: Code2, skills: [
    { name: 'JavaScript', level: 5 }, { name: 'TypeScript', level: 5 }, { name: 'Python', level: 4 },
    { name: 'Git', level: 5 }, { name: 'REST APIs', level: 5 }, { name: 'C#', level: 3 },
  ] },
  { id: 'frontend', title: { en: 'Frontend', fr: 'Frontend' }, icon: Code2, skills: [
    { name: 'React', level: 5 }, { name: 'Next.js', level: 5 }, { name: 'TypeScript', level: 5 },
    { name: 'Tailwind CSS', level: 4 }, { name: 'HTML', level: 5 }, { name: 'CSS', level: 5 },
  ] },
  { id: 'backend', title: { en: 'Backend', fr: 'Backend' }, icon: Server, skills: [
    { name: 'Node.js', level: 5 }, { name: 'Express.js', level: 4 }, { name: 'NestJS', level: 4 },
    { name: 'Spring Boot', level: 3 }, { name: 'Symfony', level: 3 }, { name: 'Flask', level: 3 },
  ] },
  { id: 'mobile', title: { en: 'Mobile', fr: 'Mobile' }, icon: Smartphone, skills: [
    { name: 'Flutter', level: 5 }, { name: 'Dart', level: 5 }, { name: 'REST APIs', level: 4 },
  ] },
  { id: 'ai', title: { en: 'AI / ML', fr: 'IA / ML' }, icon: BrainCircuit, skills: [
    { name: 'Python', level: 5 }, { name: 'TensorFlow', level: 4 }, { name: 'OpenCV', level: 4 },
    { name: 'scikit-learn', level: 4 }, { name: 'RAG', level: 3 }, { name: 'Computer Vision', level: 4 },
  ] },
  { id: 'devops', title: { en: 'DevOps', fr: 'DevOps' }, icon: GitBranch, skills: [
    { name: 'Docker', level: 5 }, { name: 'GitHub Actions', level: 4 }, { name: 'Jenkins', level: 4 },
    { name: 'SonarQube', level: 4 }, { name: 'Prometheus', level: 3 }, { name: 'Grafana', level: 3 },
  ] },
  { id: 'databases', title: { en: 'Databases', fr: 'Bases de données' }, icon: Database, skills: [
    { name: 'PostgreSQL', level: 5 }, { name: 'MySQL', level: 4 }, { name: 'MongoDB', level: 4 },
  ] },
  { id: 'immersive', title: { en: 'Game & XR', fr: 'Jeu & XR' }, icon: Layers3, skills: [
    { name: 'Unity', level: 4 }, { name: 'C#', level: 4 }, { name: 'Unreal Engine', level: 3 },
    { name: 'OpenXR', level: 3 }, { name: 'Netcode', level: 4 }, { name: 'ML-Agents', level: 3 },
  ] },
]

const CENTER = 300
const RADIUS = 175

function chartPoint(index: number, count: number, radius: number) {
  const angle = -Math.PI / 2 + index * 2 * Math.PI / count
  return { x: CENTER + Math.cos(angle) * radius, y: CENTER + Math.sin(angle) * radius }
}

function polygonPoints(count: number, radius: number) {
  return Array.from({ length: count }, (_, index) => {
    const { x, y } = chartPoint(index, count, radius)
    return `${x},${y}`
  }).join(' ')
}

function RadarChart({ group, language }: { group: MatrixGroup; language: Language }) {
  const count = group.skills.length
  const dataPoints = group.skills.map((skill, index) => {
    const { x, y } = chartPoint(index, count, RADIUS * skill.level / 5)
    return `${x},${y}`
  }).join(' ')

  return (
    <div className="skills-chart-area">
      <svg className="skills-radar" viewBox="0 0 600 600" role="img" aria-labelledby="skills-radar-title skills-radar-desc">
        <title id="skills-radar-title">{group.title[language]}</title>
        <desc id="skills-radar-desc">{group.skills.map((skill) => `${skill.name}: ${skill.level}/5`).join(', ')}</desc>
        {[1, 2, 3, 4, 5].map((ring) => <polygon key={ring} points={polygonPoints(count, RADIUS * ring / 5)} className="skills-radar-grid" />)}
        {group.skills.map((skill, index) => {
          const { x, y } = chartPoint(index, count, RADIUS)
          return <line key={skill.name} x1={CENTER} y1={CENTER} x2={x} y2={y} className="skills-radar-axis" />
        })}
        <polygon key={group.id} points={dataPoints} className="skills-radar-shape" />
        {group.skills.map((skill, index) => {
          const { x, y } = chartPoint(index, count, RADIUS + 23)
          const anchor = x < CENTER - 12 ? 'end' : x > CENTER + 12 ? 'start' : 'middle'
          return <text key={skill.name} x={x} y={y} textAnchor={anchor} dominantBaseline="middle" className="skills-radar-label">{skill.name}</text>
        })}
      </svg>
      <div className="skills-mobile-values" aria-label={group.title[language]}>
        {group.skills.map((skill) => <div key={skill.name} className="skills-mobile-value"><span>{skill.name}</span><div className="skills-mobile-track"><span style={{ width: `${skill.level * 20}%` }} /></div><small>{skill.level}/5</small></div>)}
      </div>
      <p className="skills-matrix-note">{language === 'en' ? 'Relative focus across projects · 1–5 scale' : 'Expérience relative dans les projets · échelle de 1 à 5'}</p>
    </div>
  )
}

export function SkillsMatrix({ language }: { language: Language }) {
  const [activeId, setActiveId] = useState('ai')
  const activeGroup = groups.find((group) => group.id === activeId) ?? groups[0]

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button" className="skill-matrix-open">
          {language === 'en' ? 'Explore skills matrix' : 'Explorer la matrice'} <ArrowUpRight size={15} aria-hidden="true" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="skills-matrix-overlay" />
        <Dialog.Content className="skills-matrix-dialog" aria-describedby="skills-matrix-description">
          <div className="skills-matrix-heading">
            <div>
              <Dialog.Title>{language === 'en' ? 'Skills Matrix' : 'Matrice des compétences'}</Dialog.Title>
              <Dialog.Description id="skills-matrix-description" className="sr-only">
                {language === 'en' ? 'Choose a category to explore technologies and their relative focus across my projects.' : 'Choisissez une catégorie pour explorer les technologies et leur place relative dans mes projets.'}
              </Dialog.Description>
            </div>
            <Dialog.Close asChild><button type="button" className="skills-matrix-close" aria-label={language === 'en' ? 'Close skills matrix' : 'Fermer la matrice'}><X size={22} aria-hidden="true" /></button></Dialog.Close>
          </div>
          <div className="skills-matrix-layout">
            <div className="skills-matrix-categories" role="group" aria-label={language === 'en' ? 'Skill categories' : 'Catégories de compétences'}>
              {groups.map((group) => {
                const Icon = group.icon
                return <button key={group.id} type="button" aria-pressed={activeId === group.id} onClick={() => setActiveId(group.id)} className="skills-matrix-category"><Icon size={20} aria-hidden="true" /><span>{group.title[language]}</span></button>
              })}
            </div>
            <RadarChart group={activeGroup} language={language} />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
