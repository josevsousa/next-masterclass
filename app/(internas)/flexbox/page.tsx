import Caixa from "@/components/Caixa";

export default function Page(){
    return (

            <div className="h-96">
                <h1>flexbox</h1>
                <div className='
                            flex
                            h-96
                            items-start
                            justify-around
                            bg-slate-500'>
                    <Caixa text="jose" />
                    <Caixa text="fifa" className="flex-grow" />
                    <Caixa text="negao" />
                </div>
            </div>
    
    )
}