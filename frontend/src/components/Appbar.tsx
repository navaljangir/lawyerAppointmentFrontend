import { useNavigate, useLocation } from "react-router-dom"
import { Button } from "./ui/button"
import { Home, Users, Calendar, Info } from "lucide-react"

const navlinks = [
    {
        name: 'Home',
        link: '/',
        icon: <Home className="h-4 w-4" />
    },
    {
        name: 'Lawyers',
        link: '/lawyers',
        icon: <Users className="h-4 w-4" />
    },
    {
        name: 'Appointments',
        link: '/details/',
        icon: <Calendar className="h-4 w-4" />
    },
    {
        name: 'About',
        link: 'about',
        icon: <Info className="h-4 w-4" />
    },
]

export function Appbar() {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold text-blue-600">LegalSolutions</span>
                    </div>
                    <nav className="flex items-center space-x-4">
                        {navlinks.map((val, index) => (
                            <Button
                                key={index}
                                variant="ghost"
                                onClick={() => navigate(`${val.link}`)}
                                className={`flex items-center gap-2 ${
                                    location.pathname === val.link
                                        ? 'text-blue-600 bg-blue-50'
                                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                }`}
                            >
                                {val.icon}
                                {val.name}
                            </Button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}