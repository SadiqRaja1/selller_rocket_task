
function Hero() {
    return (
        <div>
            <section className="bg-blue-200 h-[65vh] w-full flex flex-col items-center justify-center gap-8">
                <h1 className="text-4xl md:text-6xl font-light text-center">Sell your product with <span className="font-semibold">ease</span></h1>
                <p className="text-xl font-light text-center">We help small businesses and individuals to sell their products online with ease</p>
                <div>
                    <a href="#services"><button className="bg-blue-900 cursor-pointer text-white px-8 py-2 rounded-full border-2 border-secondary hover:bg-secondary hover:text-primary hover:scale-105 transition-all duration-300 font-light">Explore Services</button></a>
                </div>
            </section>
        </div>
    )
}

export default Hero