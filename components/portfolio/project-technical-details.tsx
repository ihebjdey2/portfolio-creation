import type { Language } from '@/lib/language-context'

const arrow = <span aria-hidden="true" className="font-mono text-primary">↓</span>

function Flow({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-col items-stretch gap-2 text-center">
      {steps.map((step, index) => (
        <div key={step} className="contents">
          <div className="rounded-lg border border-border bg-surface px-4 py-3 font-mono text-xs leading-5 sm:text-sm">{step}</div>
          {index < steps.length - 1 ? arrow : null}
        </div>
      ))}
    </div>
  )
}

export function AgriDiagnoseModelFlow({ language }: { language: Language }) {
  return (
    <div className="grid gap-5 md:grid-cols-[minmax(0,1.35fr)_minmax(220px,0.65fr)]">
      <div className="rounded-xl border border-border bg-surface-muted p-5 sm:p-6">
        <p className="mb-4 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-primary">{language === 'en' ? 'Model flow' : 'Flux du modèle'}</p>
        <Flow steps={['224×224 RGB', 'MobileNetV2', 'GlobalAveragePooling2D', 'Dropout 0.25', 'Dense 39 softmax']} />
      </div>
      <div className="grid gap-5">
        <div className="rounded-xl border border-border bg-surface-muted p-5">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-primary">{language === 'en' ? 'Preprocessing' : 'Prétraitement'}</p>
          <p className="mt-3 font-mono text-sm">Resize → float32 → /255.0</p>
        </div>
        <div className="rounded-xl border border-border bg-surface-muted p-5">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-primary">{language === 'en' ? 'Confidence threshold' : 'Seuil de confiance'}</p>
          <p className="mt-3 text-3xl font-medium tracking-[-0.04em]">60%</p>
        </div>
      </div>
    </div>
  )
}

export function AgriDiagnoseEvaluation({ language }: { language: Language }) {
  const tableLabel = language === 'en'
    ? 'AgriDiagnose model evaluation results'
    : 'Résultats d’évaluation du modèle AgriDiagnose'
  const rows = [
    [language === 'en' ? 'Validation' : 'Validation', '95.48%', '96.01%'],
    [language === 'en' ? 'Internal test' : 'Test interne', '95.44%', '95.92%'],
    ['External PlantDoc subset', '41.41%', '45.79%'],
  ]

  return (
    <div className="space-y-5">
      <div
        role="region"
        aria-label={tableLabel}
        tabIndex={0}
        className="overflow-x-auto rounded-xl border border-border focus-visible:ring-2 focus-visible:ring-primary/30"
      >
        <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
          <caption className="sr-only">{tableLabel}</caption>
          <thead className="bg-surface-muted font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted-foreground">
            <tr><th scope="col" className="px-4 py-3">{language === 'en' ? 'Evaluation' : 'Évaluation'}</th><th scope="col" className="px-4 py-3">Accuracy</th><th scope="col" className="px-4 py-3">Macro-F1</th></tr>
          </thead>
          <tbody>{rows.map(([label, accuracy, macroF1]) => <tr key={label} className="border-t border-border"><th scope="row" className="px-4 py-4 font-medium">{label}</th><td className="px-4 py-4 font-mono">{accuracy}</td><td className="px-4 py-4 font-mono">{macroF1}</td></tr>)}</tbody>
        </table>
      </div>
      <p className="text-sm leading-7 text-muted-foreground sm:text-base">
        {language === 'en'
          ? 'The model performs strongly on the internal audited dataset, but the external PlantDoc subset reveals substantial domain shift. The external result is presented as evidence of the model’s current real-world limitation rather than hidden or treated as a tuning target.'
          : 'Le modèle obtient de solides résultats sur le jeu interne audité, mais le sous-ensemble externe PlantDoc révèle un important décalage de domaine. Ce résultat externe documente donc une limite actuelle en conditions réelles, au lieu d’être masqué ou présenté comme une cible d’ajustement.'}
      </p>
    </div>
  )
}

export function TungoArchitecture({ language }: { language: Language }) {
  const clients = [
    ['Passenger App', 'Flutter'],
    ['Driver App', 'Flutter'],
    [language === 'en' ? 'Web Dashboards' : 'Tableaux de bord web', 'React'],
  ]

  return (
    <div className="rounded-xl border border-border bg-surface-muted p-5 sm:p-7">
      <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1.15fr_auto_0.8fr]">
        <div className="grid gap-3">{clients.map(([name, technology]) => <div key={name} className="rounded-lg border border-border bg-surface p-4"><p className="font-medium">{name}</p><p className="mt-1 font-mono text-xs text-primary">{technology}</p></div>)}</div>
        <span aria-hidden="true" className="hidden text-primary md:block">→</span>
        <div className="rounded-lg border border-primary/40 bg-surface p-5 text-center"><p className="font-medium">Node.js / Express API</p><p className="mt-2 font-mono text-xs text-muted-foreground">JWT · REST</p></div>
        <span aria-hidden="true" className="hidden text-primary md:block">→</span>
        <div className="rounded-lg border border-border bg-surface p-5 text-center"><p className="font-medium">PostgreSQL</p></div>
      </div>
      <div className="mx-auto mt-4 max-w-md rounded-lg border border-border bg-surface p-4 text-center"><p className="font-medium">RAG Assistant</p><p className="mt-1 text-xs text-muted-foreground">{language === 'en' ? 'Application/backend integration' : 'Intégration application/backend'}</p></div>
    </div>
  )
}

export function DevOpsPipeline({ language }: { language: Language }) {
  const steps = ['Spring Boot', 'Maven build/test', 'JaCoCo', 'SonarQube', language === 'en' ? 'Package' : 'Packaging', 'Nexus', 'Docker', language === 'en' ? 'Deployment' : 'Déploiement', 'Prometheus / Grafana']
  return <Flow steps={steps} />
}

export function LibraryArchitecture({ language }: { language: Language }) {
  const services = [
    [language === 'en' ? 'Loan Service' : 'Service d’emprunts', ':8189'],
    [language === 'en' ? 'Book Service' : 'Service de livres', ':8183'],
    [language === 'en' ? 'Reservation Service' : 'Service de réservations', ':8184'],
    [language === 'en' ? 'Subscription Service' : 'Service d’abonnements', ':8009'],
    [language === 'en' ? 'Stock Service' : 'Service de stock', ':8008'],
    [language === 'en' ? 'Event Service' : 'Service d’événements', ':8112'],
  ]

  return (
    <div className="space-y-4 rounded-xl border border-border bg-surface-muted p-5 sm:p-7">
      <div className="rounded-lg border border-border bg-surface p-4 text-center">
        <p className="font-medium">Angular 15</p>
        <p className="mt-1 font-mono text-xs text-primary">Frontend · :4200</p>
      </div>
      <div className="text-center font-mono text-primary" aria-hidden="true">↓</div>
      <div className="rounded-lg border border-primary/40 bg-surface p-4 text-center">
        <p className="font-medium">Spring Cloud Gateway</p>
        <p className="mt-1 font-mono text-xs text-primary">{language === 'en' ? 'Single API entry point' : 'Point d’entrée API unique'} · :8111</p>
      </div>
      <div className="text-center font-mono text-primary" aria-hidden="true">↓</div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(([name, port]) => <div key={name} className="rounded-lg border border-border bg-surface p-4"><p className="text-sm font-medium">{name}</p><p className="mt-2 font-mono text-xs text-primary">Spring Boot · {port}</p></div>)}
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-border bg-surface p-4"><p className="font-medium">Eureka</p><p className="mt-2 text-xs leading-5 text-muted-foreground">{language === 'en' ? 'Service registration & discovery' : 'Enregistrement & découverte des services'}</p><p className="mt-2 font-mono text-xs text-primary">:8761</p></div>
        <div className="rounded-lg border border-border bg-surface p-4"><p className="font-medium">MySQL</p><p className="mt-2 text-xs leading-5 text-muted-foreground">{language === 'en' ? 'Persistent data layer' : 'Couche de données persistante'}</p><p className="mt-2 font-mono text-xs text-primary">:3307</p></div>
        <div className="rounded-lg border border-border bg-surface p-4"><p className="font-medium">Docker Compose</p><p className="mt-2 text-xs leading-5 text-muted-foreground">{language === 'en' ? 'Local service orchestration' : 'Orchestration locale des services'}</p></div>
      </div>
    </div>
  )
}

export function NavigationComparison({ language }: { language: Language }) {
  const rows = [
    ['Ad Hoc', language === 'en' ? 'Rule-based decisions' : 'Décisions basées sur des règles'],
    ['A*', language === 'en' ? 'Heuristic path search' : 'Recherche de chemin heuristique'],
    ['Monte Carlo Tree Search', language === 'en' ? 'Simulation-based decisions' : 'Décisions basées sur la simulation'],
  ]
  return <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">{rows.map(([name, description]) => <div key={name} className="bg-surface-muted p-5"><p className="font-medium">{name}</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p></div>)}</div>
}
