import Image from "next/image";
import Link from "next/link";


interface SymbolProps {
    header_src: string;
    lineColor: string;
}

const Symbol: React.FC<SymbolProps> = ({ header_src, lineColor }) => {
    const lineStyle = {
        borderLeft: `1px dashed ${lineColor}`,
    };

    return (
        <div className="flex flex-row items-center justify-around rounded-2xl bg-inherit w-auto">
            <Link href="/public">
                <Image alt="FIX-remont_logo" className="w-14vh" src={header_src} />
            </Link>
            <div className="w-px h-12 border-l border-dashed border-gray-400 opacity-50 m-4" style={lineStyle}></div>
            <p className="w-40 h-15 font-medium text-xs tracking-tight text-left text-gray-900">
                Первый онлайн-сервис по ремонту и строительству <b>c фикс стоимостью</b>
            </p>
        </div>
    );
};

export default Symbol;
