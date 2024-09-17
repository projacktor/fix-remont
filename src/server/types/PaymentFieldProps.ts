import { PaymentProvider } from '@/server/types/Payment Provider'

export interface PaymentFieldProps {
  provider: PaymentProvider
  index: number
  name: string
}
