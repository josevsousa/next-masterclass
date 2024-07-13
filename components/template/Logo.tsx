export default function Logo(){
    return (
        <div className="flex gap-2">
            <div className="flex gap-1">
                <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
            </div>
            <span>AppJS</span>
        </div>
    )
}