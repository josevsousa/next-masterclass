import Link from "next/link";

export default function MenuItem(props: any){
    return (
        <Link href={props.link} className="
            flex items-center gap-2
            px-4 py-2 rounded-md  
            hover:bg-blue-500   

            ">{props.children}</Link>
    )
}