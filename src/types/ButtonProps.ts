import openLink from '@/functions/openLink'

export interface ButtonProps {
  text: string
  link?: string
  function?: void | openLink
  type?: string
}
