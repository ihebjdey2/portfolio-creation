import type { Language } from '@/lib/language-context'

export type LocalizedText = Record<Language, string>
export type LocalizedList = Record<Language, string[]>

export function localize(text: LocalizedText, language: Language) {
  return text[language]
}
