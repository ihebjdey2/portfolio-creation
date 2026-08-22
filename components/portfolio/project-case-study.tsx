'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Download, FileText, Github } from 'lucide-react'
import type { ReactNode } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/portfolio/footer'
import { CliniclicExperienceOverview, CliniclicMediaGalleries } from '@/components/portfolio/cliniclic-media-showcase'
import { ProjectGallery, ProjectMedia } from '@/components/portfolio/project-media'
import { AgriDiagnoseEvaluation, AgriDiagnoseModelFlow, DevOpsPipeline, LibraryArchitecture, NavigationComparison, TungoArchitecture } from '@/components/portfolio/project-technical-details'
import { TungoEcosystemOverview, TungoRoleGalleries } from '@/components/portfolio/tungo-media-showcase'
import { useLanguage, type Language } from '@/lib/language-context'
import { cliniclicDemoVideo } from '@/lib/cliniclic-media'
import { localize, type LocalizedList } from '@/lib/localization'
import type { Project, ProjectNavigationData } from '@/lib/portfolio-data'
import { tungoDemoVideo, tungoReportCover } from '@/lib/tungo-media'
import { translations } from '@/lib/translations'

function Section({ index, title, children }: { index: string; title: string; children: ReactNode }) {
  return <section className="border-t border-border py-10 sm:py-12"><div className="grid gap-6 lg:grid-cols-[minmax(180px,0.5fr)_minmax(0,1.5fr)] lg:gap-10"><div><p className="font-mono text-[0.65rem] text-primary">{index}</p><h2 className="mt-2 text-xl font-medium tracking-[-0.025em] sm:text-2xl">{title}</h2></div><div className="min-w-0 max-w-4xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{children}</div></div></section>
}

function List({ items, language }: { items: LocalizedList; language: Language }) {
  return <ol className="divide-y divide-border border-y border-border">{items[language].map((item, index) => <li key={item} className="grid grid-cols-[28px_1fr] gap-3 py-4 text-sm leading-6 sm:text-base sm:leading-7"><span className="font-mono text-[0.65rem] text-primary">{String(index + 1).padStart(2, '0')}</span>{item}</li>)}</ol>
}

function Facts({ items }: { items: Array<[string, string]> }) {
  return <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{items.map(([label, value]) => <div key={label} className="bg-surface-muted p-4"><dt className="font-mono text-[0.65rem] uppercase tracking-[0.08em] text-muted-foreground">{label}</dt><dd className="mt-2 text-xl font-medium text-foreground">{value}</dd></div>)}</dl>
}

function RepositoryLink({ project, language }: { project: Project; language: Language }) {
  return <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md bg-foreground px-4 text-sm font-medium text-background hover:bg-primary hover:text-primary-foreground"><Github size={16} aria-hidden="true" />{language === 'en' ? 'View repository' : 'Voir le dépôt'}<ArrowUpRight size={13} aria-hidden="true" /></a>
}

function AgriDiagnoseStory({ project, language }: { project: Project; language: Language }) {
  const study = project.caseStudy
  const media = project.media ?? []
  return <>
    <Section index="01" title={language === 'en' ? 'Overview' : 'Vue d’ensemble'}><p>{localize(study.overview, language)}</p></Section>
    <Section index="02" title={language === 'en' ? 'Dataset & Model' : 'Jeu de données & modèle'}><div className="space-y-6"><Facts items={[[language === 'en' ? 'Audited images' : 'Images auditées', '73,563'], ['Training', '58,857'], ['Validation', '7,362'], [language === 'en' ? 'Internal test' : 'Test interne', '7,344'], ['Classes', '39'], [language === 'en' ? 'Crops' : 'Cultures', '14']]} /><AgriDiagnoseModelFlow language={language} /></div></Section>
    <Section index="03" title={language === 'en' ? 'Application Architecture' : 'Architecture applicative'}><div className="grid gap-4 sm:grid-cols-2">{[['AI', 'TensorFlow · Keras · MobileNetV2 · OpenCV'], ['Backend', 'Flask · Blueprints · SQLAlchemy · REST API'], [language === 'en' ? 'Data' : 'Données', 'SQLite development · PostgreSQL support'], [language === 'en' ? 'Engineering' : 'Ingénierie', 'pytest · Alembic · GitHub Actions · SHA-256']].map(([label, value]) => <div key={label} className="rounded-xl border border-border bg-surface-muted p-5"><p className="font-mono text-[0.68rem] text-primary">{label}</p><p className="mt-3 text-sm leading-6 text-foreground">{value}</p></div>)}</div></Section>
    <Section index="04" title={language === 'en' ? 'Evaluation' : 'Évaluation'}><AgriDiagnoseEvaluation language={language} /></Section>
    <Section index="05" title={language === 'en' ? 'External Domain Shift' : 'Décalage de domaine externe'}><p>{language === 'en' ? 'Internal test performance is not field accuracy. The PlantDoc subset measures transfer to different image conditions and exposes a substantial generalization gap.' : 'La performance sur le test interne ne représente pas une précision terrain. Le sous-ensemble PlantDoc mesure le transfert vers d’autres conditions d’image et révèle un écart important de généralisation.'}</p></Section>
    <Section index="06" title={language === 'en' ? 'Application Features' : 'Fonctionnalités de l’application'}><div className="space-y-7"><p>{language === 'en' ? 'Authentication, Top-3 predictions, history, dashboard, EN/FR/AR localization and Arabic RTL support connect the model to a usable application workflow.' : 'L’authentification, les trois meilleures prédictions, l’historique, le tableau de bord, la localisation EN/FR/AR et le support RTL arabe relient le modèle à un workflow utilisable.'}</p>{media[0] ? <ProjectMedia media={media[0]} language={language} /> : null}</div></Section>
    <Section index="07" title={language === 'en' ? 'Limitations' : 'Limites'}><div className="space-y-7">{study.limitations ? <List items={study.limitations} language={language} /> : null}<ProjectGallery media={media.slice(1)} language={language} /></div></Section>
    <Section index="08" title="Documentation"><p>{language === 'en' ? 'The repository contains the application, model workflow and evaluation documentation used for this case study.' : 'Le dépôt contient l’application, le workflow du modèle et la documentation d’évaluation utilisée pour cette étude de cas.'}</p><RepositoryLink project={project} language={language} /></Section>
  </>
}

function TungoStory({ project, language }: { project: Project; language: Language }) {
  const study = project.caseStudy
  const media = project.media ?? []
  const titles = language === 'en'
    ? ['Context', 'Final-Year Report', 'Platform Overview', 'Multi-Client Architecture', 'Product Ecosystem', 'Mobile Experiences', 'Web Dashboards', 'Backend & Data', 'RAG Assistant', 'Complete Demonstration', 'Engineering Workflow', 'Engineering Challenges', 'Repository']
    : ['Contexte', 'Rapport de fin d’études', 'Vue de la plateforme', 'Architecture multi-client', 'Écosystème produit', 'Expériences mobiles', 'Tableaux de bord web', 'Backend & données', 'Assistant RAG', 'Démonstration complète', 'Workflow d’ingénierie', 'Défis d’ingénierie', 'Dépôt']
  return <>
    <Section index="01" title={titles[0]}><p>{study.context ? localize(study.context, language) : localize(study.overview, language)}</p></Section>
    <Section index="02" title={titles[1]}><div className="grid items-start gap-6 sm:grid-cols-[minmax(0,0.8fr)_minmax(220px,0.55fr)]"><div className="space-y-4"><p>{language === 'en' ? 'The original report cover is included as an academic project artifact and is presented without alteration.' : 'La couverture originale du rapport est intégrée comme preuve académique du projet et présentée sans modification.'}</p><p className="text-sm leading-6">ESPRIT · GAMIX · INVEEP</p></div><ProjectMedia media={tungoReportCover} language={language} expandable /></div></Section>
    <Section index="03" title={titles[2]}><List items={study.built} language={language} /></Section>
    <Section index="04" title={titles[3]}><TungoArchitecture language={language} /></Section>
    <Section index="05" title={titles[4]}><div className="space-y-5"><p>{language === 'en' ? 'Six interfaces serve distinct passenger, driver and operational needs while sharing the same transport domain.' : 'Six interfaces répondent aux besoins distincts des passagers, chauffeurs et équipes opérationnelles tout en partageant le même domaine de transport.'}</p><TungoEcosystemOverview language={language} /></div></Section>
    <Section index="06" title={titles[5]}><div className="space-y-5"><p>{language === 'en' ? 'The passenger and driver applications are documented separately. Each collection can be expanded without loading an endless wall of screens.' : 'Les applications passager et chauffeur sont documentées séparément. Chaque collection peut être dépliée sans imposer un mur d’écrans interminable.'}</p><TungoRoleGalleries language={language} layout="mobile" /></div></Section>
    <Section index="07" title={titles[6]}><div className="space-y-5"><p>{language === 'en' ? 'The public platform and role-based React dashboards cover network, station and operational workflows.' : 'La plateforme publique et les tableaux de bord React par rôle couvrent les workflows réseau, station et opérations.'}</p><TungoRoleGalleries language={language} layout="wide" /></div></Section>
    <Section index="08" title={titles[7]}><p>Node.js · Express · PostgreSQL · JWT · REST API</p></Section>
    <Section index="09" title={titles[8]}><div className="space-y-5"><p>{language === 'en' ? 'A retrieval-augmented assistant is integrated with the application/backend flow to support transport questions.' : 'Un assistant à génération augmentée par récupération est intégré au flux application/backend pour répondre aux questions de transport.'}</p>{media[4] ? <ProjectMedia media={media[4]} language={language} /> : null}</div></Section>
    <Section index="10" title={titles[9]}><div className="space-y-5"><p>{language === 'en' ? 'The complete walkthrough is kept as optional evidence rather than replacing the faster screenshot overview.' : 'Le parcours complet reste une preuve optionnelle et ne remplace pas l’aperçu rapide fourni par les captures.'}</p><ProjectMedia media={tungoDemoVideo} language={language} /></div></Section>
    <Section index="11" title={titles[10]}><p>Git · Docker · Jenkins</p></Section>
    <Section index="12" title={titles[11]}>{study.engineeringDecisions ? <List items={study.engineeringDecisions} language={language} /> : null}</Section>
    <Section index="13" title={titles[12]}><RepositoryLink project={project} language={language} /></Section>
  </>
}

function CliniclicStory({ project, language }: { project: Project; language: Language }) {
  const study = project.caseStudy
  const titles = language === 'en'
    ? ['Context', 'Platform Scope', 'Three Client Branches', 'Multi-Client Experience', 'Interface Evidence', 'Technical Approach', 'Engineering Decisions', 'Web Demonstration', 'Limitations', 'Repository']
    : ['Contexte', 'Périmètre de la plateforme', 'Trois branches clientes', 'Expérience multi-client', 'Preuves d’interface', 'Approche technique', 'Décisions d’ingénierie', 'Démonstration web', 'Limites', 'Dépôt']

  const clients = [
    ['Web', 'Symfony 7.4', 'agent/web-symfony-modernization'],
    ['Desktop', 'JavaFX · FXML · JDBC', 'agent-desktop-java-pidev'],
    ['Mobile', 'Java · Codename One', 'agent/mobile-codenameone'],
  ]

  return <>
    <Section index="01" title={titles[0]}><p>{study.context ? localize(study.context, language) : localize(study.overview, language)}</p></Section>
    <Section index="02" title={titles[1]}><div className="space-y-6"><Facts items={[[language === 'en' ? 'Client applications' : 'Applications clientes', '3'], [language === 'en' ? 'Repository branches' : 'Branches du dépôt', '3'], [language === 'en' ? 'Web roles' : 'Rôles web', '4']]} /><List items={study.built} language={language} /></div></Section>
    <Section index="03" title={titles[2]}><div className="grid gap-4 sm:grid-cols-3">{clients.map(([name, stack, branch]) => <div key={name} className="rounded-xl border border-border bg-surface-muted p-5"><p className="font-medium text-foreground">{name}</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{stack}</p><p className="mt-4 break-words font-mono text-[0.65rem] leading-5 text-primary">{branch}</p></div>)}</div></Section>
    <Section index="04" title={titles[3]}><div className="space-y-5"><p>{language === 'en' ? 'The web, desktop and mobile clients expose different workflows while keeping the same CliniClic product identity.' : 'Les clients web, desktop et mobile exposent des workflows différents tout en conservant la même identité produit CliniClic.'}</p><CliniclicExperienceOverview language={language} /></div></Section>
    <Section index="05" title={titles[4]}><div className="space-y-5"><p>{language === 'en' ? 'Screens are grouped by client and role so the three applications remain understandable without creating an endless gallery.' : 'Les écrans sont regroupés par client et par rôle afin que les trois applications restent compréhensibles sans créer une galerie interminable.'}</p><CliniclicMediaGalleries language={language} /></div></Section>
    <Section index="06" title={titles[5]}><List items={study.technicalApproach} language={language} /></Section>
    <Section index="07" title={titles[6]}>{study.engineeringDecisions ? <List items={study.engineeringDecisions} language={language} /> : null}</Section>
    <Section index="08" title={titles[7]}><div className="space-y-5"><p>{language === 'en' ? 'The recording documents the Symfony web application: registration, patient workspace, role-aware navigation and the public clinic experience.' : 'L’enregistrement documente l’application web Symfony : inscription, espace patient, navigation adaptée au rôle et expérience publique de la clinique.'}</p><ProjectMedia media={cliniclicDemoVideo} language={language} /></div></Section>
    <Section index="09" title={titles[8]}>{study.limitations ? <List items={study.limitations} language={language} /> : null}</Section>
    <Section index="10" title={titles[9]}><RepositoryLink project={project} language={language} /></Section>
  </>
}

function GymExerciseStory({ project, language }: { project: Project; language: Language }) {
  const study = project.caseStudy
  const media = project.media ?? []
  const desktopMedia = media.filter((item) => item.kind === 'image' && !item.src.includes('mobile-experience'))
  const mobileMedia = media.find((item) => item.src.includes('mobile-experience'))
  const demoVideo = media.find((item) => item.kind === 'video')
  const titles = language === 'en'
    ? ['Internship Context', 'Product Scope', 'Catalogue & Discovery', 'Mobile Experience', 'API & Delivery', 'Engineering Decisions', 'Product Demonstration', 'Internship Report', 'Limitations', 'Repository']
    : ['Contexte du stage', 'Périmètre produit', 'Catalogue & découverte', 'Expérience mobile', 'API & livraison', 'Décisions d’ingénierie', 'Démonstration produit', 'Rapport de stage', 'Limites', 'Dépôt']

  return <>
    <Section index="01" title={titles[0]}><div className="space-y-6"><p>{study.context ? localize(study.context, language) : localize(study.overview, language)}</p><Facts items={[[language === 'en' ? 'Company' : 'Entreprise', 'SOTUDEV'], [language === 'en' ? 'Period' : 'Période', '09–11/2024'], [language === 'en' ? 'Media evidence' : 'Preuves média', '7']]} /></div></Section>
    <Section index="02" title={titles[1]}><List items={study.built} language={language} /></Section>
    <Section index="03" title={titles[2]}><div className="space-y-5"><p>{language === 'en' ? 'The catalogue exposes exercise illustrations and metadata through search and body-part navigation.' : 'Le catalogue expose les illustrations et métadonnées des exercices via la recherche et la navigation par partie du corps.'}</p><ProjectGallery media={desktopMedia} language={language} expandable /></div></Section>
    <Section index="04" title={titles[3]}><div className="grid items-start gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(220px,0.55fr)]"><div className="space-y-4"><p>{language === 'en' ? 'The mobile web experience gives users a focused navigation path to the exercise catalogue, body-part categories and search.' : 'L’expérience web mobile offre un parcours de navigation ciblé vers le catalogue d’exercices, les catégories par partie du corps et la recherche.'}</p><p className="text-sm leading-6">{language === 'en' ? 'A slide-out menu keeps the primary actions easy to reach on a phone while preserving the visual identity of the desktop product.' : 'Un menu latéral garde les actions principales facilement accessibles sur téléphone tout en conservant l’identité visuelle du produit desktop.'}</p></div>{mobileMedia ? <ProjectMedia media={mobileMedia} language={language} expandable /> : null}</div></Section>
    <Section index="05" title={titles[4]}><List items={study.technicalApproach} language={language} /></Section>
    <Section index="06" title={titles[5]}>{study.engineeringDecisions ? <List items={study.engineeringDecisions} language={language} /> : null}</Section>
    <Section index="07" title={titles[6]}>{demoVideo ? <ProjectMedia media={demoVideo} language={language} /> : null}</Section>
    <Section index="08" title={titles[7]}><div className="rounded-xl border border-border bg-surface-muted p-5"><FileText size={24} className="text-primary" aria-hidden="true" /><h3 className="mt-4 font-medium text-foreground">{language === 'en' ? 'Engineering internship report' : 'Rapport de stage ingénieur'}</h3><p className="mt-2 text-sm leading-6">{language === 'en' ? 'Supporting PDF supplied with the project media.' : 'Document PDF fourni avec les médias du projet.'}</p><a href="/projects/gym-exercise-finder/internship-report.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-surface px-4 text-sm font-medium text-foreground hover:border-primary"><Download size={16} aria-hidden="true" />{language === 'en' ? 'Open PDF report' : 'Ouvrir le rapport PDF'}</a></div></Section>
    <Section index="09" title={titles[8]}>{study.limitations ? <List items={study.limitations} language={language} /> : null}</Section>
    <Section index="10" title={titles[9]}><RepositoryLink project={project} language={language} /></Section>
  </>
}

function StudentManagementStory({ project, language }: { project: Project; language: Language }) {
  const study = project.caseStudy
  const media = project.media ?? []
  const qualityMedia = media.find((item) => item.src.includes('sonarqube-quality-gate'))
  const infrastructureMedia = media.find((item) => item.src.includes('docker-monitoring-stack'))
  const artifactMedia = media.find((item) => item.src.includes('nexus-artifacts'))
  const demoVideo = media.find((item) => item.kind === 'video')
  const titles = language === 'en'
    ? ['Project Context', 'Delivery Pipeline', 'Quality Evidence', 'Artifact Management', 'Containerized Infrastructure', 'Complete Demonstration', 'Engineering Scope', 'Limitations', 'Repository']
    : ['Contexte du projet', 'Pipeline de livraison', 'Preuves de qualité', 'Gestion des artefacts', 'Infrastructure conteneurisée', 'Démonstration complète', 'Périmètre d’ingénierie', 'Limites', 'Dépôt']

  return <>
    <Section index="01" title={titles[0]}><div className="space-y-6"><p>{study.context ? localize(study.context, language) : localize(study.overview, language)}</p><Facts items={[[language === 'en' ? 'Pipeline' : 'Pipeline', 'Jenkins'], [language === 'en' ? 'Media evidence' : 'Preuves média', '5'], [language === 'en' ? 'Demo' : 'Démo', '02:51']]} /></div></Section>
    <Section index="02" title={titles[1]}><div className="space-y-6"><DevOpsPipeline language={language} /><List items={study.built} language={language} /></div></Section>
    <Section index="03" title={titles[2]}><div className="space-y-6"><Facts items={[[language === 'en' ? 'Quality gate' : 'Quality gate', language === 'en' ? 'Passed' : 'Validée'], [language === 'en' ? 'Unit tests' : 'Tests unitaires', '924'], [language === 'en' ? 'Coverage' : 'Couverture', '88.9%'], [language === 'en' ? 'Bugs' : 'Bugs', '0'], [language === 'en' ? 'Vulnerabilities' : 'Vulnérabilités', '0'], [language === 'en' ? 'Duplications' : 'Duplications', '1.4%']]} />{qualityMedia ? <ProjectMedia media={qualityMedia} language={language} expandable /> : null}</div></Section>
    <Section index="04" title={titles[3]}><div className="space-y-5"><p>{language === 'en' ? 'Successful Maven packages are versioned in Nexus so the build output remains traceable outside the Jenkins workspace.' : 'Les packages Maven validés sont versionnés dans Nexus afin que le résultat du build reste traçable en dehors du workspace Jenkins.'}</p>{artifactMedia ? <ProjectMedia media={artifactMedia} language={language} expandable /> : null}</div></Section>
    <Section index="05" title={titles[4]}><div className="space-y-5"><p>{language === 'en' ? 'The local Docker environment brings together continuous integration, quality analysis and monitoring services. Prometheus, Grafana, Node Exporter and cAdvisor form the observable runtime shown in the evidence.' : 'L’environnement Docker local réunit les services d’intégration continue, d’analyse qualité et de monitoring. Prometheus, Grafana, Node Exporter et cAdvisor composent l’exécution observable visible dans les preuves.'}</p>{infrastructureMedia ? <ProjectMedia media={infrastructureMedia} language={language} expandable /> : null}</div></Section>
    <Section index="06" title={titles[5]}><div className="space-y-5"><p>{language === 'en' ? 'The optional walkthrough documents Jenkins build history, SonarQube analysis, Nexus artifact management and the published Docker image.' : 'Le parcours optionnel documente l’historique des builds Jenkins, l’analyse SonarQube, la gestion des artefacts Nexus et l’image Docker publiée.'}</p>{demoVideo ? <ProjectMedia media={demoVideo} language={language} /> : null}</div></Section>
    <Section index="07" title={titles[6]}><List items={study.technicalApproach} language={language} /></Section>
    <Section index="08" title={titles[7]}>{study.limitations ? <List items={study.limitations} language={language} /> : null}</Section>
    <Section index="09" title={titles[8]}><RepositoryLink project={project} language={language} /></Section>
  </>
}

function LibraryMicroservicesStory({ project, language }: { project: Project; language: Language }) {
  const study = project.caseStudy
  const titles = language === 'en'
    ? ['Architecture Context', 'System Architecture', 'Domain Service Catalogue', 'Gateway & Discovery', 'Independent Service Lifecycle', 'Angular Client', 'Architecture Principles', 'Limitations', 'Repository']
    : ['Contexte d’architecture', 'Architecture du système', 'Catalogue des services métier', 'Gateway & découverte', 'Cycle de vie indépendant', 'Client Angular', 'Principes d’architecture', 'Limites', 'Dépôt']
  const services = language === 'en'
    ? [
        ['Loan Service', 'Loan lifecycle and borrowing operations', ':8189'],
        ['Book Service', 'Book catalogue management', ':8183'],
        ['Reservation Service', 'Library reservations', ':8184'],
        ['Subscription Service', 'Member subscriptions', ':8009'],
        ['Stock Service', 'Inventory and stock management', ':8008'],
        ['Event Service', 'Library event management', ':8112'],
      ]
    : [
        ['Service d’emprunts', 'Cycle de vie des emprunts', ':8189'],
        ['Service de livres', 'Gestion du catalogue de livres', ':8183'],
        ['Service de réservations', 'Réservations de la bibliothèque', ':8184'],
        ['Service d’abonnements', 'Abonnements des membres', ':8009'],
        ['Service de stock', 'Gestion de l’inventaire et du stock', ':8008'],
        ['Service d’événements', 'Gestion des événements', ':8112'],
      ]

  return <>
    <Section index="01" title={titles[0]}><div className="space-y-6"><p>{study.context ? localize(study.context, language) : localize(study.overview, language)}</p><Facts items={[[language === 'en' ? 'Domain services' : 'Services métier', '6'], [language === 'en' ? 'API entry point' : 'Entrée API', 'Gateway :8111'], [language === 'en' ? 'Discovery' : 'Découverte', 'Eureka :8761']]} /></div></Section>
    <Section index="02" title={titles[1]}><LibraryArchitecture language={language} /></Section>
    <Section index="03" title={titles[2]}><div className="grid gap-4 sm:grid-cols-2">{services.map(([name, responsibility, port]) => <div key={name} className="rounded-xl border border-border bg-surface-muted p-5"><div className="flex items-start justify-between gap-3"><h3 className="font-medium text-foreground">{name}</h3><span className="font-mono text-xs text-primary">{port}</span></div><p className="mt-3 text-sm leading-6 text-muted-foreground">{responsibility}</p><p className="mt-4 font-mono text-[0.65rem] text-muted-foreground">Spring Boot · Maven</p></div>)}</div></Section>
    <Section index="04" title={titles[3]}><div className="space-y-6"><p>{language === 'en' ? 'The Angular client uses one gateway address. The gateway routes requests to domain services, while Eureka maintains the runtime registry used to locate service instances.' : 'Le client Angular utilise une seule adresse de gateway. La gateway route les requêtes vers les services métier, tandis qu’Eureka maintient le registre d’exécution utilisé pour localiser les instances.'}</p><Facts items={[[language === 'en' ? 'Frontend' : 'Frontend', ':4200'], ['API Gateway', ':8111'], ['Eureka', ':8761']]} /></div></Section>
    <Section index="05" title={titles[4]}><div className="space-y-5"><p>{language === 'en' ? 'Each domain service keeps its own Maven configuration, source tree, application settings and tests. This supports separate builds and a distinct lifecycle for every service.' : 'Chaque service métier conserve sa configuration Maven, son code source, ses paramètres applicatifs et ses tests. Cela permet des builds séparés et un cycle de vie distinct pour chaque service.'}</p><List items={study.technicalApproach} language={language} /></div></Section>
    <Section index="06" title={titles[5]}><div className="space-y-5"><p>{language === 'en' ? 'The Angular 15 application provides the user and administration interface with TypeScript, Angular Material and RxJS, while backend access stays centralized through the gateway.' : 'L’application Angular 15 fournit les interfaces utilisateur et d’administration avec TypeScript, Angular Material et RxJS, tandis que l’accès backend reste centralisé par la gateway.'}</p><Facts items={[[language === 'en' ? 'Framework' : 'Framework', 'Angular 15'], [language === 'en' ? 'Interface' : 'Interface', 'Angular Material'], [language === 'en' ? 'Reactive layer' : 'Couche réactive', 'RxJS']]} /></div></Section>
    <Section index="07" title={titles[6]}>{study.engineeringDecisions ? <List items={study.engineeringDecisions} language={language} /> : null}</Section>
    <Section index="08" title={titles[7]}>{study.limitations ? <List items={study.limitations} language={language} /> : null}</Section>
    <Section index="09" title={titles[8]}><RepositoryLink project={project} language={language} /></Section>
  </>
}

function NavigationAgentsStory({ project, language }: { project: Project; language: Language }) {
  const study = project.caseStudy
  const demoVideo = project.media?.find((item) => item.kind === 'video')
  const titles = language === 'en'
    ? ['Comparison Context', 'Shared Test Environment', 'Three Approaches', 'Recorded Run', 'Live Demonstration', 'Engineering Approach', 'Limitations', 'Repository']
    : ['Contexte de comparaison', 'Environnement de test commun', 'Trois approches', 'Exécution enregistrée', 'Démonstration en direct', 'Approche d’ingénierie', 'Limites', 'Dépôt']

  return <>
    <Section index="01" title={titles[0]}><div className="space-y-6"><p>{study.context ? localize(study.context, language) : localize(study.overview, language)}</p><Facts items={[[language === 'en' ? 'Algorithms' : 'Algorithmes', '3'], [language === 'en' ? 'Environment' : 'Environnement', 'Unity'], [language === 'en' ? 'Demo' : 'Démo', '00:40']]} /></div></Section>
    <Section index="02" title={titles[1]}><div className="space-y-5"><p>{language === 'en' ? 'All three agents operate in the same low-poly scene with visible characters, targets and environmental obstacles. A shared HUD reports each score during execution.' : 'Les trois agents évoluent dans la même scène low-poly avec personnages, cibles et obstacles environnementaux visibles. Une interface commune affiche chaque score pendant l’exécution.'}</p><List items={study.built} language={language} /></div></Section>
    <Section index="03" title={titles[2]}><NavigationComparison language={language} /></Section>
    <Section index="04" title={titles[3]}><div className="space-y-6"><Facts items={[[language === 'en' ? 'A* score at 00:35' : 'Score A* à 00:35', '90'], [language === 'en' ? 'Ad Hoc score at 00:35' : 'Score Ad Hoc à 00:35', '70'], [language === 'en' ? 'MCTS score at 00:35' : 'Score MCTS à 00:35', '10']]} /><p className="text-sm leading-6">{language === 'en' ? 'These values are a snapshot from the supplied recording. They describe this run only and should not be interpreted as a general performance ranking.' : 'Ces valeurs sont un instantané de l’enregistrement fourni. Elles décrivent uniquement cette exécution et ne doivent pas être interprétées comme un classement général des performances.'}</p></div></Section>
    <Section index="05" title={titles[4]}><div className="space-y-5"><p>{language === 'en' ? 'The short recording is the strongest evidence for the comparison because it shows the agents moving while all three scores update in the same view.' : 'Le court enregistrement constitue la preuve la plus claire de la comparaison, car il montre les agents en mouvement pendant la mise à jour des trois scores dans la même vue.'}</p>{demoVideo ? <ProjectMedia media={demoVideo} language={language} /> : null}</div></Section>
    <Section index="06" title={titles[5]}><List items={study.technicalApproach} language={language} /></Section>
    <Section index="07" title={titles[6]}>{study.limitations ? <List items={study.limitations} language={language} /> : null}</Section>
    <Section index="08" title={titles[7]}><RepositoryLink project={project} language={language} /></Section>
  </>
}

function EndlessRunnerStory({ project, language }: { project: Project; language: Language }) {
  const study = project.caseStudy
  const media = project.media ?? []
  const screenshots = media.filter((item) => item.kind === 'image')
  const demoVideo = media.find((item) => item.kind === 'video')
  const titles = language === 'en'
    ? ['Gameplay Context', 'Core Loop', 'Three-Lane Challenge', 'Collectibles & Upgrades', 'Procedural Track Flow', 'Gameplay Demonstration', 'Engineering Decisions', 'Limitations', 'Repository']
    : ['Contexte de gameplay', 'Boucle principale', 'Défi à trois voies', 'Objets & améliorations', 'Flux de piste procédural', 'Démonstration de gameplay', 'Décisions d’ingénierie', 'Limites', 'Dépôt']

  return <>
    <Section index="01" title={titles[0]}><div className="space-y-6"><p>{study.context ? localize(study.context, language) : localize(study.overview, language)}</p><Facts items={[[language === 'en' ? 'Lanes' : 'Voies', '3'], [language === 'en' ? 'Media evidence' : 'Preuves média', '4'], [language === 'en' ? 'Demo' : 'Démo', '00:58']]} /></div></Section>
    <Section index="02" title={titles[1]}><List items={study.built} language={language} /></Section>
    <Section index="03" title={titles[2]}><div className="space-y-5"><p>{language === 'en' ? 'The player moves continuously along three railway lanes, choosing when to switch lane or jump as containers, barriers and coin paths approach.' : 'Le joueur avance continuellement sur trois voies ferrées et choisit quand changer de voie ou sauter à l’approche des conteneurs, barrières et trajectoires de pièces.'}</p><ProjectGallery media={screenshots} language={language} expandable /></div></Section>
    <Section index="04" title={titles[3]}><div className="space-y-6"><Facts items={[[language === 'en' ? 'Upgrade duration' : 'Durée des améliorations', '5 sec'], [language === 'en' ? 'Visible upgrade' : 'Amélioration visible', 'JumpBoost'], [language === 'en' ? 'HUD counters' : 'Compteurs HUD', 'Time · Coins']]} /><p>{language === 'en' ? 'Coins feed the run score while timed pickups temporarily modify player behavior. The supplied recording visibly confirms the JumpBoost state in the HUD.' : 'Les pièces alimentent le score de la course tandis que les pickups temporaires modifient brièvement le comportement du joueur. L’enregistrement fourni confirme visiblement l’état JumpBoost dans le HUD.'}</p></div></Section>
    <Section index="05" title={titles[4]}><div className="space-y-5"><p>{language === 'en' ? 'Track segments are created ahead of the runner, populated with lane content and removed after they pass behind the player.' : 'Les segments de piste sont créés devant le runner, remplis avec du contenu réparti par voie puis supprimés après leur passage derrière le joueur.'}</p><List items={study.technicalApproach} language={language} /></div></Section>
    <Section index="06" title={titles[5]}><div className="space-y-5"><p>{language === 'en' ? 'The complete recording demonstrates continuous movement, lane changes, jumping, coin collection, obstacle density and the active upgrade indicator.' : 'L’enregistrement complet démontre la course continue, les changements de voie, les sauts, la collecte de pièces, la densité des obstacles et l’indicateur d’amélioration active.'}</p>{demoVideo ? <ProjectMedia media={demoVideo} language={language} /> : null}</div></Section>
    <Section index="07" title={titles[6]}>{study.engineeringDecisions ? <List items={study.engineeringDecisions} language={language} /> : null}</Section>
    <Section index="08" title={titles[7]}>{study.limitations ? <List items={study.limitations} language={language} /> : null}</Section>
    <Section index="09" title={titles[8]}><RepositoryLink project={project} language={language} /></Section>
  </>
}

function MLAgentTargetChaseStory({ project, language }: { project: Project; language: Language }) {
  const study = project.caseStudy
  const media = project.media ?? []
  const tensorBoardMedia = media.find((item) => item.src.includes('tensorboard-training-metrics'))
  const packageMedia = media.find((item) => item.src.includes('unity-ml-agents-package'))
  const demoVideo = media.find((item) => item.kind === 'video')
  const titles = language === 'en'
    ? ['Experiment Context', 'Learning Task', 'Training Workflow', 'TensorBoard Monitoring', 'Unity Integration', 'Project Demonstration', 'Technical Approach', 'Limitations', 'Repository']
    : ['Contexte de l’expérience', 'Tâche d’apprentissage', 'Workflow d’entraînement', 'Suivi TensorBoard', 'Intégration Unity', 'Démonstration du projet', 'Approche technique', 'Limites', 'Dépôt']

  const workflow = language === 'en'
    ? ['Prepare Python 3.9.13 and create a virtual environment', 'Update pip and install ML-Agents with PyTorch, Protocol Buffers and ONNX', 'Start a named training run and resume from a previous result when needed', 'Monitor cumulative reward and episode length in TensorBoard', 'Install ML Agents 2.0.1 through Unity Package Manager and use the trained policy in Unity']
    : ['Préparer Python 3.9.13 et créer un environnement virtuel', 'Mettre à jour pip et installer ML-Agents avec PyTorch, Protocol Buffers et ONNX', 'Lancer un entraînement nommé et reprendre un résultat précédent si nécessaire', 'Suivre la récompense cumulée et la durée des épisodes dans TensorBoard', 'Installer ML Agents 2.0.1 via Unity Package Manager et utiliser la politique entraînée dans Unity']

  return <>
    <Section index="01" title={titles[0]}><div className="space-y-6"><p>{study.context ? localize(study.context, language) : localize(study.overview, language)}</p><Facts items={[[language === 'en' ? 'Environment' : 'Environnement', 'Unity 3D'], [language === 'en' ? 'Package' : 'Package', 'ML Agents 2.0.1'], [language === 'en' ? 'Demo' : 'Démo', '00:28']]} /></div></Section>
    <Section index="02" title={titles[1]}><List items={study.built} language={language} /></Section>
    <Section index="03" title={titles[2]}><ol className="grid gap-3">{workflow.map((step, index) => <li key={step} className="grid grid-cols-[32px_1fr] gap-3 rounded-xl border border-border bg-surface-muted p-4 text-sm leading-6 text-foreground sm:text-base"><span className="font-mono text-[0.65rem] text-primary">{String(index + 1).padStart(2, '0')}</span><span>{step}</span></li>)}</ol></Section>
    <Section index="04" title={titles[3]}><div className="space-y-5"><p>{language === 'en' ? 'The supplied dashboard records multiple named runs and exposes cumulative reward, reward distribution and episode-length metrics.' : 'Le tableau de bord fourni enregistre plusieurs runs nommés et expose la récompense cumulée, sa distribution et la durée des épisodes.'}</p>{tensorBoardMedia ? <ProjectMedia media={tensorBoardMedia} language={language} expandable /> : null}</div></Section>
    <Section index="05" title={titles[4]}><div className="space-y-5"><p>{language === 'en' ? 'The Unity Package Manager evidence confirms the ML Agents package used to connect the trained behavior to the Unity project.' : 'La preuve Unity Package Manager confirme le package ML Agents utilisé pour connecter le comportement entraîné au projet Unity.'}</p>{packageMedia ? <ProjectMedia media={packageMedia} language={language} expandable /> : null}</div></Section>
    <Section index="06" title={titles[5]}><div className="space-y-5"><p>{language === 'en' ? 'The short recording is included as optional runtime evidence after the faster screenshot and training overview.' : 'Le court enregistrement est proposé comme preuve d’exécution optionnelle après l’aperçu rapide de la scène et de l’entraînement.'}</p>{demoVideo ? <ProjectMedia media={demoVideo} language={language} /> : null}</div></Section>
    <Section index="07" title={titles[6]}><List items={study.technicalApproach} language={language} /></Section>
    <Section index="08" title={titles[7]}>{study.limitations ? <List items={study.limitations} language={language} /> : null}</Section>
    <Section index="09" title={titles[8]}><RepositoryLink project={project} language={language} /></Section>
  </>
}

function StandardStory({ project, language }: { project: Project; language: Language }) {
  const t = translations[language]
  const study = project.caseStudy
  let index = 1
  const next = () => String(index++).padStart(2, '0')
  return <>
    <Section index={next()} title={t.project.overview}><p>{localize(study.overview, language)}</p>{project.slug === 'guardian-quests' ? <p className="mt-4 text-sm">{language === 'en' ? 'End-of-Year Project — GAMIX Specialization, ESPRIT' : 'Projet de fin d’année — Spécialisation GAMIX, ESPRIT'}</p> : null}</Section>
    {study.context ? <Section index={next()} title={t.project.context}><p>{localize(study.context, language)}</p></Section> : null}
    <Section index={next()} title={t.project.built}><List items={study.built} language={language} /></Section>
    {project.media?.length ? <Section index={next()} title={language === 'en' ? 'Project Evidence' : 'Aperçu du projet'}><ProjectGallery media={project.media} language={language} /></Section> : null}
    <Section index={next()} title={t.project.approach}><List items={study.technicalApproach} language={language} /></Section>
    {project.slug === 'student-management-devops' ? <Section index={next()} title={language === 'en' ? 'Delivery Pipeline' : 'Pipeline de livraison'}><DevOpsPipeline language={language} /></Section> : null}
    {project.slug === 'library-management-microservices' ? <Section index={next()} title={language === 'en' ? 'Service Architecture' : 'Architecture des services'}><LibraryArchitecture language={language} /></Section> : null}
    {project.slug === 'unity-ai-navigation-algorithms' ? <Section index={next()} title={language === 'en' ? 'Algorithm Comparison' : 'Comparaison des algorithmes'}><NavigationComparison language={language} /></Section> : null}
    {study.engineeringDecisions ? <Section index={next()} title={t.project.decisions}><List items={study.engineeringDecisions} language={language} /></Section> : null}
    {study.results ? <Section index={next()} title={t.project.results}><List items={study.results} language={language} /></Section> : null}
    {study.limitations ? <Section index={next()} title={t.project.limitations}><List items={study.limitations} language={language} /></Section> : null}
  </>
}

function ProjectNavigation({ navigation, language }: { navigation: ProjectNavigationData; language: Language }) {
  const { previous, next } = navigation
  return <nav aria-label={language === 'en' ? 'Project navigation' : 'Navigation des projets'} className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3"><Link href={`/projects/${previous.slug}`} className="bg-surface p-5 hover:bg-surface-muted"><span className="font-mono text-[0.65rem] text-muted-foreground">← {language === 'en' ? 'Previous' : 'Précédent'}</span><span className="mt-2 block font-medium">{previous.title}</span></Link><Link href="/#projects" className="flex items-center justify-center bg-surface p-5 text-sm font-medium hover:bg-surface-muted">{language === 'en' ? 'All Projects' : 'Tous les projets'}</Link><Link href={`/projects/${next.slug}`} className="bg-surface p-5 text-right hover:bg-surface-muted"><span className="font-mono text-[0.65rem] text-muted-foreground">{language === 'en' ? 'Next' : 'Suivant'} →</span><span className="mt-2 block font-medium">{next.title}</span></Link></nav>
}

export function ProjectCaseStudy({ project, navigation }: { project: Project; navigation: ProjectNavigationData }) {
  const { language } = useLanguage()
  const t = translations[language]
  return <><Header /><main id="main-content" tabIndex={-1} className="min-h-screen bg-background text-foreground"><article><header className="section-shell py-14 sm:py-20 lg:py-24"><Link href="/#projects" className="text-link text-sm text-muted-foreground"><ArrowLeft size={15} aria-hidden="true" />{t.project.back}</Link><div className="mt-10 grid gap-8 lg:grid-cols-[minmax(180px,0.5fr)_minmax(0,1.5fr)] lg:gap-10"><p className="font-mono text-[0.7rem] leading-5 text-primary">{localize(project.category, language)}</p><div><h1 className="max-w-4xl text-4xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">{project.title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">{localize(project.description, language)}</p><ul className="mt-7 flex flex-wrap gap-2">{project.technologies.map((technology) => <li key={technology} className="tech-tag">{technology}</li>)}</ul><RepositoryLink project={project} language={language} /></div></div>{project.heroMedia ? <div className="mt-10 lg:mt-14"><ProjectMedia media={project.heroMedia} language={language} hero /></div> : null}</header><div className="section-shell pb-12 sm:pb-20">{project.slug === 'agridiagnose-ai' ? <AgriDiagnoseStory project={project} language={language} /> : project.slug === 'tungo' ? <TungoStory project={project} language={language} /> : project.slug === 'cliniclic' ? <CliniclicStory project={project} language={language} /> : project.slug === 'gym-exercise-finder' ? <GymExerciseStory project={project} language={language} /> : project.slug === 'student-management-devops' ? <StudentManagementStory project={project} language={language} /> : project.slug === 'library-management-microservices' ? <LibraryMicroservicesStory project={project} language={language} /> : project.slug === 'unity-ai-navigation-algorithms' ? <NavigationAgentsStory project={project} language={language} /> : project.slug === 'unity-3d-endless-runner' ? <EndlessRunnerStory project={project} language={language} /> : project.slug === 'ml-agent-target-chase' ? <MLAgentTargetChaseStory project={project} language={language} /> : <StandardStory project={project} language={language} />}<div className="border-t border-border pt-10"><ProjectNavigation navigation={navigation} language={language} /></div></div></article></main><Footer language={language} /></>
}
