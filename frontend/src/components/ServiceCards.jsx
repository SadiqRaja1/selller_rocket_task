
function ServicesCards() {
    return (
        <>
            <section id="services" className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 px-5 sm:px-10 md:px-20 scroll-mt-20" >
                <h1 className="text-4xl md:text-5xl font-semibold text-center col-span-1 md:col-span-3">Our Services</h1>
                <div className="bg-secondary px-10 py-8 md:px-20 md:py-10 flex flex-col gap-8 md:gap-16 items-center rounded-2xl border border-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer" id="card_1">
                    <h1 className="text-2xl md:text-4xl font-light text-center">Amazon Management</h1>
                    <p className="text-lg md:text-xl font-light text-center">Launch and scale your brand on Amazon with our comprehensive management services.</p>
                </div>
                <div className="bg-secondary px-10 py-8 md:px-20 md:py-10 flex flex-col gap-8 md:gap-16 items-center rounded-2xl border border-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer" id="card_2">
                    <h1 className="text-2xl md:text-4xl font-light text-center">Shopify Store Setup</h1>
                    <p className="text-lg md:text-xl font-light text-center">Build a stunning, high-converting Shopify store tailored to your brand and business goals.</p>
                </div>
                <div className="bg-secondary px-10 py-8 md:px-20 md:py-10 flex flex-col gap-8 md:gap-16 items-center rounded-2xl border border-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer" id="card_3">
                    <h1 className="text-2xl md:text-4xl font-light text-center">WordPress Development</h1>
                    <p className="text-lg md:text-xl font-light text-center">Professional WordPress development to create custom websites that are fast, secure, and scalable.</p>
                </div>
            </section>
        </>
    )
}

export default ServicesCards