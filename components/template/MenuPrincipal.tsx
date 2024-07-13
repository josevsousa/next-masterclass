import MenuItem from "./MenuItem"
import { IconCopyMinusFilled, IconHexagonNumber1, IconHexagonNumber2, IconList} from "@tabler/icons-react"

export default function MenuPrincipal(){
    return (
        <div>
            <aside className="bg-zinc-900 w-70 h-full">
                <nav className="flex flex-col p-5">
                    <MenuItem link="/primeiro">
                        <IconHexagonNumber1 />
                        <span>Primeiro Component</span>
                    </MenuItem>
                    <MenuItem link="/flexbox">
                        <IconHexagonNumber2 />
                        <span>Flexbox</span>
                    </MenuItem>
                    <MenuItem link="/pagina">
                        <IconCopyMinusFilled/>
                        <span>Pagina</span>
                    </MenuItem>
                    <MenuItem link="/estado">
                        <IconList/>
                        <span>Estado</span>
                    </MenuItem>
                </nav>
            </aside>
        </div>
    )
}