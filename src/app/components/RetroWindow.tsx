interface RetroWindowProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    color?: string;
}

export default function RetroWindow({ title, children, color = '#000080', className }: RetroWindowProps) {
    return (
        <div className={`border border-black shadow-lg bg-white w-fit ${className ?? ''}`}>
            <div
                className="w-full px-2 py-1 flex items-center justify-between gap-2"
                style={{ backgroundColor: color }}
            >
                <span className="text-black text-xs font-bold uppercase truncate">{title}</span>
                <button className="bg-white text-black text-xs border border-black leading-none w-4 h-4 flex items-center justify-center shrink-0 ml-2">
                    X
                </button>
            </div>
            <div className="p-3">{children}</div>
        </div>
    );
}