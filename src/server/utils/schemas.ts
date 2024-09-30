import tariff from '@/server/types/Tariff'
import { Notification } from '@/server/types/Notification'
import Tariff from '@/server/types/Tariff'

// TODO: check how to make a types for pictures in binaries and videos
// should do I make a type for a document as kinda special Blob?

export type Picture = string

export type Video = string | Blob

export interface article {
  title?: string
  body: string
}

export interface SingleNews {
  id: number
  heading: string
  section?: string
  picture1: string
  picture2: string
  picture3: string
  label: string
  article1: article
  article2: article
}

// For Consulting component
export interface FaqAnswer {
  id: number
  title: string
  label: string
}

// For pages/portfolio/works post
export interface PortfolioPost {
  id: number
  title: string
  deadline: string
  cost: number
  area: number
  video_link: string
  video_duration: number
  category: string
  pictures: Picture[5]
  articles: article[]
}

// For pages/blog/posts
export interface BlogPost {
  id: number
  title: string
  pictures: Picture[3]
  articles: article[]
}

// For Blog Bullet component
export interface BlogBullet {
  id: number
  category: string
  title: string
  link: string
}

// For profile/contracts/ordersId
export interface OrderInfo {
  id: number
  name: string
  type: string
  tariff: tariff
  area: number
  location: string
}

// For MyContracts or MyDocuments
export interface MyContracts {
  id: number
  // TODO: make an enum for object
  object: number
  tariff: Tariff
  location: string
  reward: number
  status: string
  link: string
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

// for profile/contracts page
export interface Contracts {
  id: number
  location: string
  // TODO: make an enum for object
  object: string
  // TODO: make an enum for type
  type: string
  tariff: Tariff
  area: number
  status: Notification
  stage: string
  reward: number
}

// for profile/account
export interface ProfileInfo {
  name: string
  surname: string
  role: string
  phone: number
  email: string
}

// TODO: how will we store them?
export interface ProfileNotification {
  id: number
  title: string
  date: Date
  description: string
}

export type PassportStatus = boolean

// for profile/news/newsId
export interface ProfileNews {
  id: number
  type: string
  title: string
  pictures: Picture[3]
  articles: article[]
}

//
export interface SupportCategory {
  heading: string
  date: string
  key_word: string
}
