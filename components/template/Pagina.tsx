import Cabecalho from "./cabecalho";
import MenuPrincipal from "./MenuPrincipal";
import Rodape from "./rodape";

export default function Pagina(props: any){
    return (
        <div className="flex flex-col h-screen">
            <Cabecalho />
            <div className="flex flex-grow">
                <MenuPrincipal />
                <div className="flex flex-col flex-1">
                    <main className="p-4 flex-col flex-1">
                        {props.children}
                    </main>
                    <Rodape />
                </div>
            </div>
            
            
        </div>
    )
}