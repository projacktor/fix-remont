import { Tariff } from '@/server/utils/enums'

export interface PartsFiledProps {
  objectName: string
  tariff: Tariff
  location: string
  payment: number
  part: string
}
