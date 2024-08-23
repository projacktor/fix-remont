import React from 'react'

interface AccountNotificationProps {
  value: string
  label: string
  description: string
}

function AccountNotification({ value, label, description }: AccountNotificationProps) {
  return (
    <div className="flex flex-row items-center justify-between space-x-12">
      <article className="flex flex-col space-y-2">
        <h5 className="headingStruct text-lg">{value}</h5>
        <p className="text-xs font-medium text-gray-400">{label}</p>
      </article>

      <article className="max-h-16 max-w-64 overflow-hidden text-ellipsis text-xs font-light text-gray-400">
        {description}
      </article>
    </div>
  )
}

export default AccountNotification
