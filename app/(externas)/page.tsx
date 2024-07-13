import Pagina from "@/components/template/Pagina";
import { IconDashboard } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

function minhaList(){
  return (
    <ul>
      <li>a</li>
      <li>b</li>
      <li>c</li>
    </ul>
  )
}

const teste = ( <h1>Teste Jose Ok</h1> )


export default function Home() {
  return (
      <div className="flex flex-col items-center">
        <IconDashboard size={100} stroke={0.5} className="text-zinc-500" />
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">Olá Usuário!</h1>
          <p className="text-lg">Seja bem vindo, ao Sistema!</p>
        </div>
        <Link href="/primeiro" className="bg-blue-500 text-white font-mono px-4 py-2 mt-10 rounded-md">Entrar</Link>
      </div>
  );
}
