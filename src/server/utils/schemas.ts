import tariff from '@/server/types/Tariff'
import { Notification } from '@/server/types/Notification'
import Tariff from '@/server/types/Tariff'

// TODO: check how to make a types for pictures in binaries and videos
// should do I make a type for a document as kinda special Blob?
// all interfaces there are models

export type Picture = Blob | string

export type Video = string | Blob

export interface article {
  title?: string
  body: string
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
  project_type: string
  pictures: Picture[] // 5
  articles: article[]
}

// For pages/blog/posts && profile/news/newsId
export interface Post {
  id: number
  title: string
  pictures: Picture[] // 3
  articles: article[]
}

// For Blog Bullet component
export interface BlogBullet {
  id: number
  project_type: string
  title: string
  link: string
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

// For profile/contracts/ordersId
export interface OrderInfo {
  id: number
  object: string
  type: string
  tariff: tariff
  area: number
  location: string
}

export interface WorkState {
  id: number
  title: string
  status: boolean
  document: Blob // PFD
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
  document: Blob
}

export interface OrderClientInfo {
  id: number
  client: ProfileInfo
  order_date: Date
}

// may be deleted
export interface OrderNotification {
  id: number
  type: Notification
  title: string
  label: string | null
}
//

// may be deleted or left
export interface PaymentStatus {
  id: number
  type: Notification
  value: number
  label: string
}

export interface OrderDocuments {
  id: number
  title: string
  label: string
  type: Notification
  attachment: Blob
}

export interface Contracts {
  order: OrderInfo
  status: Notification
  stage: string
  reward: number
}

// for profile/account
export interface ProfileInfo {
  id: number
  name: string
  surname: string
  patronymic: string
  phone: string
  email: string
  role: string
  avatar: Picture
  passport_status: boolean
}
// for invited partners widget
export interface InvitedPartners {
  id: number
  data: ProfileInfo
  reward: number
}

// TODO: how will we store them?
export interface ProfileNotification {
  id: number
  title: string
  date: Date
  label: string
}

//
export interface SupportCategory {
  heading: string
  date: string
  key_word: string
}
