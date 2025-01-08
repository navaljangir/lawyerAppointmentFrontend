

const navlinks = [
    {
        name : 'Home' ,
        link : '/'
    } , 
    {
       name : 'Lawyers', 
       link : 'lawyers' 
    } , 
    {
        name : 'Get Appointment Details' , 
        link : 'details' 
    } , 
    {
        name : 'About us' , 
        link : '/about'
    }, 
]
export function Appbar(){
    return <div className="border-b">
        <div className="flex justify-center gap-20 px-40 py-5">
            {navlinks.map((val , index)=>{
                return <a key={index} href={val.link} className="hover:underline hover:text-blue-800">{val.name}</a>
            })}
        </div>
    </div>
}