import React, { useEffect } from 'react'
import { useSearchParams } from "react-router-dom";

const Admin = () => {
    const [ consults, setConsults ] = React.useState([{_id:'',clientName: '', contactNumber: '', email: '', date: '', time: ''}])
    const [searchParams] = useSearchParams();
    const token = searchParams.get('pass');

    useEffect(() => {
        const fetchData = async () => {
            if(token){
                try {
                    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact/consults`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({authToken:token})
                    })
                    if (response.ok) {
                        const data = await response.json()
                        console.log(data.contacts)
                        setConsults(data.contacts);
                    }
                } catch (error) {
                    console.error(error)
                }
            }
            
        }
        fetchData()
    }
    , [])

  return (
    <div className="p-6">
    <h1 className="text-3xl font-semibold text-center mb-4">Consults</h1>
    <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
            <thead>
                <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2">Client Name</th>
                    <th className="border border-gray-300 px-4 py-2">Contact Number</th>
                    <th className="border border-gray-300 px-4 py-2">Email</th>
                    <th className="border border-gray-300 px-4 py-2">Date</th>
                    <th className="border border-gray-300 px-4 py-2">Time</th>
                </tr>
            </thead>
            <tbody>
                {consults.map((consult) => (
                    <tr key={consult._id} className="text-center">
                        <td className="border border-gray-300 px-4 py-2">{consult.clientName}</td>
                        <td className="border border-gray-300 px-4 py-2">{consult.contactNumber}</td>
                        <td className="border border-gray-300 px-4 py-2">{consult.email}</td>
                        <td className="border border-gray-300 px-4 py-2">{consult.date}</td>
                        <td className="border border-gray-300 px-4 py-2">{consult.time}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>

  )
}

export default Admin