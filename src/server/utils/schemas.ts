import tariff from '@/server/types/Tariff'
import { Notification } from '@/server/types/Notification'

// TODO: check how to make a types for pictures in binaries and videos
// should do I make a type for a document as kinda special Blob?

export type Picture = string

export type Video = string | Blob

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
//
export interface OrderInfo {
  id: number
  name: string
  type: string
  tariff: tariff
  area: number
  location: string
}

export interface WorkState {
  // TODO: Does every WorkState need id?
  // id: ///
  title: string
  status: boolean
  link: string | null
}

export interface WorkStatus {
  id: number
  states: WorkState[]
}

export interface Estimate {
  id: number
  total: number
  materials: number
  job: number
  reward: number
  // TODO: how to send a file or link to it?
  document: string
}

export interface OrderClientInfo {
  // TODO: Should I extract ClientData into stand-alone model?
  id: number
  name: string
  surname: string
  patronymic: string
  // TODO: how we will define phone number: string | number?
  phone: number
  email: string
  // TODO: take a short how to keep a Date types?
  order_date: Date
}

export interface OrderNotification {
  id: number
  type: Notification
  title: string
  label: string | null
}

export interface PaymentStatus {
  id: number
  type: Notification
  value: number
  label: string
}

export interface OrderDocuments {
  id: number
  title: string
  date: Date
  type: Notification
  file: Blob
}

//
export interface SupportCategory {
  heading: string
  date: string
  key_word: string
}
