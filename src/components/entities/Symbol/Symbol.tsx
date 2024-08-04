import Image from 'next/image'
import Link from 'next/link'

interface SymbolProps {
  header_src: string
  lineColor: string
}

const Symbol: React.FC<SymbolProps> = ({ header_src, lineColor }) => {
  const lineStyle = {
    borderLeft: `1px dashed ${lineColor}`
  }

  return (
    <div className="flex w-auto flex-row items-center justify-around rounded-2xl bg-inherit">
      <Link href="/public">
        <Image alt="FIX-remont_logo" src={header_src} width={90} />
      </Link>
      <div
        className="m-4 h-12 w-px border-l border-dashed border-gray-400 opacity-50"
        style={lineStyle}
      ></div>
      <p className="h-15 w-40 text-left text-xs tracking-tight">
        Первый онлайн-сервис по ремонту и строительству <b>c фикс стоимостью</b>
      </p>
    </div>
  )
}

export default Symbol
