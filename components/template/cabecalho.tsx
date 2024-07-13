import Logo from "./Logo"
import MenuUsuario from "./MenuUsuario"

export default function Cabecalho(){
    return (
        <header className=" flex items-center gap-5 px-5 h-11 bg-slate-800">
            <Logo />
            <span className="flex-grow">Cabeçalho</span>
            <MenuUsuario />
        </header>
    )
}