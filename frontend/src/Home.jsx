import React, { useEffect, useState } from 'react'
import axios from 'axios'
import{Link} from "react-router-dom"

const Home = () => {

    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(error => console.log(error)); 
    }, [])

    const handleDelete = (id) =>{
        axios.delete('http://localhost:8081/delete/'+id)
        .then(res =>{
            location.reload();
        }).catch(err => console.log(err))
    }

  return (
<div className="p-6 bg-gray-100 min-h-screen">
    <div className="max-w-4xl mx-auto overflow-x-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Book Inventory</h2>
        <div className="shadow-lg rounded-lg overflow-hidden">
            <table className="min-w-full bg-white">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">ID</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Title</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Author</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Price</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((book, index) => (
                        <tr key={index} className="border-t hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm text-gray-600">{book.id}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{book.title}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{book.author}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{book.price}</td>
                            <td className="px-6 py-4 flex space-x-2">
                                <Link to={`/read/${book.id}`}className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600">
                                    Read
                                </Link>
                                <Link to={`/edit/${book.id}`} className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded hover:bg-yellow-600">
                                    Edit
                                </Link>
                                <button onClick={()=>handleDelete(book.id)} className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="flex justify-center mt-6">
            <Link
                to="/addbook"
                className="px-6 py-3 text-sm font-medium text-white bg-blue-500 rounded shadow hover:bg-blue-600"
            >
                Add Book
            </Link>
        </div>
    </div>
</div>

  )
}

export default Home
