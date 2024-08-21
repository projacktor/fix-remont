import Tariff from '@/types/Tariff'

export interface PartsFiledProps {
  objectName: string
  tariff: Tariff
  location: string
  payment: number
  part: string
}
