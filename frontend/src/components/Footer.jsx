
function Footer() {
    return (
        <>
            <footer className="w-full flex flex-col md:flex-row items-center justify-between py-10 px-5 sm:px-10 md:px-20 ">
                <h1 className="text-2xl font-semibold ">Seller Rocket</h1>
                <div className="flex gap-4">
                    <a href="mailto:[seller.rocket@gmail.com]"><p className="text-xl ">Email: seller.rocket@gmail.com</p></a>
                    <a href="tel:+919999999999"><p className="text-xl ">Phone: +91 9999999999</p></a>
                </div>
            </footer>
        </>
    )
}

export default Footer
