export default function Caixa(props: any){
    return (
        <div className={`
            justify-center
            items-center
            p-4
            bg-red-500
            border-2 border-zinc-300 rounded-md
            ${props.className ?? ''}
            `}
        >
            <span>{props.text}</span>
        </div>
    )
}