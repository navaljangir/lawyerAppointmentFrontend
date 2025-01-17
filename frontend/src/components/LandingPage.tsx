import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Briefcase, Clock, Users } from "lucide-react";

export function LandingPage() {
    const navigate = useNavigate();

    const features = [
        {
            icon: <Briefcase className="h-12 w-12 text-blue-600" />,
            title: "Expert Lawyers",
            description: "Access to highly qualified legal professionals across various specializations"
        },
        {
            icon: <Clock className="h-12 w-12 text-blue-600" />,
            title: "Easy Scheduling",
            description: "Book appointments at your convenience with our simple booking system"
        },
        {
            icon: <Users className="h-12 w-12 text-blue-600" />,
            title: "Client-Focused",
            description: "Dedicated to providing the best legal consultation experience"
        }
    ];

    return (
        <div className="min-h-[calc(100vh-73px)] bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <div className="text-center">
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                        Welcome to LegalSolutions
                    </h1>
                    <p className="text-xl text-gray-600 mb-4">
                        Finding the right lawyer doesn't have to be stressful.
                    </p>
                    <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
                        At LegalSolution, we're here to make the process simple and hassle-free by connecting you with trusted legal professionals who are ready to help.
                    </p>
                    <Button 
                        onClick={() => navigate('/lawyers')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
                    >
                        Book Your Appointment
                    </Button>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-center">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}