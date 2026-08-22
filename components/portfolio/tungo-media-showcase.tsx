import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import type { Language } from '@/lib/language-context'
import { localize } from '@/lib/localization'
import { tungoMediaGroups, type TungoMediaGroup } from '@/lib/tungo-media'
import { ProjectGallery } from '@/components/portfolio/project-media'

function RoleCard({ group, language }: { group: TungoMediaGroup; language: Language }) {
  const preview = group.media[0]

  return (
    <a href={`#tungo-${group.id}`} className="group overflow-hidden rounded-xl border border-border bg-surface-muted transition-colors hover:border-primary/50">
      <div className={`relative overflow-hidden bg-background ${group.layout === 'mobile' ? 'aspect-[4/3]' : 'aspect-video'}`}>
        <Image
          src={preview.src}
          alt=""
          width={preview.width}
          height={preview.height}
          sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) 45vw, 18rem"
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.025]"
        />
      </div>
      <div className="border-t border-border p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-medium text-foreground">{localize(group.title, language)}</h3>
          <span className="shrink-0 rounded-full border border-border px-2 py-0.5 font-mono text-[0.62rem] text-primary">{group.media.length}</span>
        </div>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{localize(group.description, language)}</p>
      </div>
    </a>
  )
}

export function TungoEcosystemOverview({ language }: { language: Language }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {tungoMediaGroups.map((group) => <RoleCard key={group.id} group={group} language={language} />)}
    </div>
  )
}

export function TungoRoleGalleries({ language, layout }: { language: Language; layout: 'mobile' | 'wide' }) {
  const groups = tungoMediaGroups.filter((group) => group.layout === layout)

  return (
    <div className="space-y-4">
      {groups.map((group) => (
        <details key={group.id} id={`tungo-${group.id}`} className="group scroll-mt-24 overflow-hidden rounded-xl border border-border bg-surface-muted">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 marker:content-none">
            <span>
              <span className="block font-medium text-foreground">{localize(group.title, language)}</span>
              <span className="mt-1 block text-sm text-muted-foreground">{group.media.length} {language === 'en' ? 'screens' : 'écrans'}</span>
            </span>
            <ChevronDown size={18} className="shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="border-t border-border p-4 sm:p-5 [content-visibility:auto]">
            <p className="mb-5 text-sm leading-6 text-muted-foreground">{localize(group.description, language)} {language === 'en' ? 'Select any image to view it full size.' : 'Sélectionnez une image pour l’afficher en taille réelle.'}</p>
            <ProjectGallery media={group.media} language={language} layout={layout} expandable />
          </div>
        </details>
      ))}
    </div>
  )
}
