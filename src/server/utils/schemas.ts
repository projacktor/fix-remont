import tariff from '@/server/types/Tariff'

export interface SingleNews {
  id: number
  heading: string
  section?: string
  picture1: string
  picture2: string
  picture3: string
  label: string
  article1: string
  article2: string
}

export interface Order {
  id: number
  name: string
  type: string
  tariff: tariff
  area: number
  location: string
}

export interface SupportCategory {
  heading: string
  date: string
  key_word: string
}
