import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import type { Language } from '@/lib/language-context'
import { localize } from '@/lib/localization'
import type { ProjectMedia as ProjectMediaData } from '@/lib/portfolio-data'

export function ProjectMedia({ media, language, hero = false, expandable = false }: { media: ProjectMediaData; language: Language; hero?: boolean; expandable?: boolean }) {
  if (media.kind === 'video') return <ProjectVideo media={media} language={language} />

  const visual = (
    <Image
      src={media.src}
      alt={localize(media.alt, language)}
      width={media.width}
      height={media.height}
      sizes={hero ? '(max-width: 1023px) calc(100vw - 40px), 72rem' : '(max-width: 767px) calc(100vw - 40px), 42rem'}
      className={`${hero ? 'max-h-[44rem]' : 'max-h-[36rem]'} h-auto w-full object-contain transition-transform duration-300 ${expandable ? 'group-hover:scale-[1.015]' : ''}`}
    />
  )

  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-surface-muted">
      {expandable ? <a href={media.src} target="_blank" rel="noopener noreferrer" className="group block" aria-label={`${localize(media.alt, language)} — ${language === 'en' ? 'open full-size image' : 'ouvrir l’image en taille réelle'}`}>{visual}</a> : visual}
      {media.caption ? <figcaption className="flex items-start justify-between gap-3 border-t border-border px-4 py-3 text-sm leading-6 text-muted-foreground"><span>{localize(media.caption, language)}</span>{expandable ? <ExternalLink size={14} className="mt-1 shrink-0" aria-hidden="true" /> : null}</figcaption> : null}
    </figure>
  )
}

export function ProjectGallery({ media, language, layout = 'default', expandable = false }: { media: ProjectMediaData[]; language: Language; layout?: 'default' | 'mobile' | 'wide'; expandable?: boolean }) {
  if (media.length === 0) return null

  const layoutClass = layout === 'mobile' ? 'sm:grid-cols-2 lg:grid-cols-3' : layout === 'wide' ? 'grid-cols-1' : 'md:grid-cols-2'

  return (
    <div className={`grid gap-5 ${layoutClass}`}>
      {media.map((item) => <ProjectMedia key={item.src} media={item} language={language} expandable={expandable} />)}
    </div>
  )
}

export function ProjectVideo({ media, language }: { media: ProjectMediaData; language: Language }) {
  const summaryId = `video-summary-${media.src.replace(/[^a-z0-9]+/gi, '-')}`

  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-surface-muted">
      <video
        controls
        playsInline
        preload="none"
        poster={media.poster}
        className="h-auto w-full bg-black object-contain"
        style={{ aspectRatio: `${media.width} / ${media.height}` }}
        aria-label={localize(media.alt, language)}
        aria-describedby={media.caption ? summaryId : undefined}
      >
        <source src={media.src} type="video/mp4" />
        {language === 'en' ? 'Your browser does not support embedded video.' : 'Votre navigateur ne prend pas en charge la vidéo intégrée.'}
      </video>
      {media.caption ? (
        <figcaption id={summaryId} className="border-t border-border px-4 py-3 text-sm leading-6 text-muted-foreground">
          <span className="font-medium text-foreground">
            {language === 'en' ? 'Video summary:' : 'Résumé de la vidéo :'}
          </span>{' '}
          {localize(media.caption, language)}
        </figcaption>
      ) : null}
    </figure>
  )
}
