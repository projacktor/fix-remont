import openLink from '@/functions/openLink'

export interface ButtonProps {
  text: string
  link?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
}
