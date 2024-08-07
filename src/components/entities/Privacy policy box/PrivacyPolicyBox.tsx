import React from 'react'
import Link from 'next/link'

interface PrivacyPolicyBoxProps {
  color: string
}

const PrivacyPolicyBox: React.FC<PrivacyPolicyBoxProps> = ({ color }) => {
  return (
    <div className={`flex items-center text-sm text-[${color}]`}>
      <input type="checkbox" id="consent" className="mr-2 h-4 w-4" />
      <label htmlFor="consent" className="text-xs">
        Согласен с условиями{' '}
        <Link href="#" className="underline hover:opacity-70">
          Политики конфиденциальности данных
        </Link>
      </label>
    </div>
  )
}

export default PrivacyPolicyBox
