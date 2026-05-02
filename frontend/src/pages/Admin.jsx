import { useEffect, useState } from "react"
import axios from "axios"

function Admin() {
    const [data, setData] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState("all");

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const fetchLeads = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/leads?filter=${selectedFilter}`)
            console.log(response.data)
            setData(response.data.data)
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }

    useEffect(() => {
        fetchLeads()
    }, [selectedFilter])


    return (
        <div>
            <div className="w-full flex justify-center items-center">
                <select className="w-1/3 p-2 rounded-lg border border-gray-600 cursor-pointer mb-5" onChange={(e) => setSelectedFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="Amazon-management">Amazon-Management</option>
                    <option value="Shopify-store-setup">Shopify-Store-Setup</option>
                    <option value="WordPress-development">WordPress-Development</option>
                </select>
            </div>

            <table className="w-full border border-collapse">
                <thead>
                    <tr className="border border-gray-600 bg-gray-200">
                        <th className="border border-gray-600">Name</th>
                        <th className="border border-gray-600">Email</th>
                        <th className="border border-gray-600">Phone</th>
                        <th className="border border-gray-600">Service</th>
                        <th className="border border-gray-600">Message</th>
                        <th className="border border-gray-600">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 ? (
                        data.map((item) => (
                            <tr key={item._id} className="border border-gray-400">
                                <td className="border border-gray-400 p-2">{item.name}</td>
                                <td className="border border-gray-400 p-2">{item.email}</td>
                                <td className="border border-gray-400 p-2">{item.phone}</td>
                                <td className="border border-gray-400 p-2">{item.service}</td>
                                <td className="border border-gray-400 p-2">{item.message}</td>
                                <td className="border border-gray-400 p-2">{item.status}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center p-4 italic text-gray-500">No leads found</td>
                        </tr>
                    )}
                </tbody>
            </table>


            <div className="w-full flex justify-center items-center">
                <button className="bg-green-500 p-2 mt-5 cursor-pointer text-white rounded-lg shadow-lg flex justify-center items-center w-fit " onClick={fetchLeads}>Get Data</button>
            </div>
        </div>
    )
}

export default Admin