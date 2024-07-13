'use client'
import { IconSend, IconTrash, IconTrashFilled } from '@tabler/icons-react';
import { useState } from 'react';
export default function Page(){
    const [tarefas, setTarefa] = useState<string[]>([])
    const [nome, setNome] = useState<string>();

    function addTarefa() {
        if (nome){
            setTarefa([...tarefas, nome])
            setNome('')
        }
    }

    function excluirTarefa(i: any){
        setTarefa(tarefas.filter((_, index)=> index !== i ))   
    }


    return (
        <div className='flex flex-col gap-6'>
            <div className="flex flex-col">
                <label htmlFor="tarefa">Tarefa</label>
                <div className='flex items-center gap-2'>
                    <input 
                        id="tarefa" 
                        type="text" 
                        value={nome} 
                        onChange={(e)=> setNome(e.target.value)}
                        onKeyUp={
                            (e)=> { 
                                if(e.key === 'Enter'){ 
                                    addTarefa(); 
                                } 
                            }
                        }  
                        className="bg-zinc-800 px-4 py-2 rounded-md outline-none text-xl flex-grow " />
                    <button 
                        className='bg-blue-600 text-white p-2 rounded-md  cursor-pointer hover:bg-blue-500'
                        onClick={addTarefa} 
                        >
                        <IconSend />
                    </button>
                    
                </div>    
            </div>
            <div className='flex flex-col'>
                <h2>Lista tarefa</h2>
                <ul className='flex flex-col gap-2'>
                    {tarefas.map((tarefa, i )=>{
                        return (
                            <li key={i} className='bg-zinc-700 px-4 py-2 rounded-md flex'>
                            
                                <span className='flex-grow'>{tarefa}</span>
                                <IconTrashFilled onClick={()=> excluirTarefa(i)} size={18} className=' cursor-pointer hover:text-red-300' />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>

    )
}