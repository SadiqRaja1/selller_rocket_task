import axios from "axios";

import { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: ""
    });

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const validate = () => {
        if (formData.name.length < 3) {
            return false;
        }
        if (formData.phone.length !== 10) {
            return false;
        }
        if (!formData.email.includes("@")) {
            return false;
        }
        return true;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) {
            alert("Please fill all the fields correctly");
            return;
        }
        axios.post(`${backendUrl}/api/leads`, formData)
            .then((res) => {
                console.log(res.data);
                alert("Message sent successfully");
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    service: "",
                    message: ""
                });
            })
            .catch((err) => {
                console.log(err);
                alert("Failed to send message");
            });
    };

    return (
        <>
            <section id="contact" className="bg-secondary w-full flex flex-col gap-10 py-10 items-center justify-center bg-blue-200">
                <h1 className="text-5xl font-semibold text-center ">Get in Touch</h1>
                <form action="" onSubmit={handleSubmit} className="w-5/6 sm:w-1/2 md:w-1/3 flex flex-col gap-2 items-center md:p-10 p-5 justify-center rounded-2xl border-white border-2 shadow-lg bg-white">
                    <label htmlFor="name" className="w-full">Name</label>
                    <input className="w-full p-2 rounded-lg border border-gray-600" type="text" placeholder="Name" id="name" name="name" onChange={onChange} value={formData.name} required minLength={3} />

                    <label htmlFor="phone" className="w-full">Phone</label>
                    <input className="w-full p-2 rounded-lg border border-gray-600" type="text" placeholder="Phone" id="phone" name="phone" onChange={onChange} value={formData.phone} required minLength={10} maxLength={10} />

                    <label htmlFor="email" className="w-full">Email</label>
                    <input className="w-full p-2 rounded-lg border border-gray-600" type="email" placeholder="Email" id="email" name="email" onChange={onChange} value={formData.email} required />

                    <label htmlFor="service" className="w-full">Service Required</label>
                    <select className="w-full p-2 rounded-lg border border-gray-600" id="service" name="service" onChange={onChange} value={formData.service} required>
                        <option value="" disabled>Select Service</option>
                        <option value="Amazon-management">Amazon Management</option>
                        <option value="Shopify-store-setup">Shopify Store Setup</option>
                        <option value="WordPress-development">WordPress Development</option>
                    </select>

                    <label htmlFor="message" className="w-full">Message</label>
                    <textarea className="w-full p-2 rounded-lg border border-gray-600" placeholder="Message" id="message" name="message" onChange={onChange} value={formData.message}></textarea>

                    <button className="bg-blue-200 text-black px-8 py-2 rounded-full border-2 border-secondary hover:bg-secondary hover:text-black hover:scale-105 transition-all duration-300 font-light cursor-pointer mt-5 md:w-1/2 w-1/3" type="submit">Send</button>
                </form>
            </section>
        </>
    )
}

export default Form