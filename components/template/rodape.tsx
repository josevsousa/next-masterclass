import { IconHeartFilled } from "@tabler/icons-react"

export default function Rodape(){
    return (
        <footer>
            <div className="flex justify-end p-2 gap-2 text-sm text-zinc-400 bg-zinc-700">
                <span>Desenvolvido com</span>
                <IconHeartFilled size={18} className="text-red-600" />
                <strong>Cod3r - {new Date().getFullYear()}</strong>
            </div>
        </footer>
    )
}