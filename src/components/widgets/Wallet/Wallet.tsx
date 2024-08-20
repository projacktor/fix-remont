import React from 'react'
import OrangeButton from '@/components/shared/buttons/Orange Button/OrangeButton'
import CheckButton from '@/components/shared/buttons/Check Button/CheckButton'

// TODO: add interface as a props in production
interface WalletProps {
  balance: number
  work: number
}

function Wallet() {
  return (
    <div className="flex flex-row items-center justify-between space-x-8 rounded-3xl bg-white p-5">
      <h3 className="heading2 w-40">Кошелек</h3>

      <div className="flex flex-col items-start space-y-4">
        <p className="text-sm text-gray-400">Баланс:</p>
        <h3 className="heading2">145 300 руб</h3>
      </div>

      <div className="flex flex-col items-start space-y-4">
        <p className="text-sm text-gray-400">В работе:</p>
        <h3 className="heading2">67 800 руб</h3>
      </div>

      <div className="button_container h-20 w-64">
        <OrangeButton text="Вывести средства" className="text-base" />
      </div>

      <div className="button_container h-20 w-64">
        <CheckButton text="Перейти в кошелек" />
      </div>
    </div>
  )
}

export default Wallet
