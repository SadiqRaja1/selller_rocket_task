import { Link } from "react-router-dom"

function Header() {
    return (
        <div>
            <header className="bg-primary px-4 md:px-16 py-4 flex items-center justify-between">
                <div>
                    <Link to="/"><h1 className="text-lg md:text-2xl font-bold">Seller Rocket</h1></Link>
                </div>
                <nav>
                    <ul className="text-sm md:text-lg flex items-center justify-between gap-3 md:gap-6 font-medium">
                        <Link to="/" className="w-14 md:w-20 text-center hover:scale-105"><li>Home</li></Link>
                        <a href="#services" className="w-14 md:w-20 text-center hover:scale-105"><li>Services</li></a>
                        <a href="#contact" className="w-14 md:w-20 text-center hover:scale-105"><li>Contact</li></a>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header