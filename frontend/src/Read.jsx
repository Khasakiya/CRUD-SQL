import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios';

const Read = () => {
    const{id} = useParams();
    const [book,setBook] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8081/read/'+id)
        .then(res => {
            console.log(res)
            setBook(res.data[0]);
        })
        .catch(err => console.log(err));
    },[])


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="bg-white shadow-lg rounded-lg p-8 w-96">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Book Details</h2>
    <div className="space-y-4">
      <div className="flex justify-between">
        <span className="font-semibold text-gray-700">ID:</span>
        <span className="text-gray-800">{book.id}</span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold text-gray-700">Title:</span>
        <span className="text-gray-800">{book.title}</span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold text-gray-700">Author:</span>
        <span className="text-gray-800">{book.author}</span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold text-gray-700">Price:</span>
        <span className="text-gray-800">{book.price}</span>
      </div>
    </div>
    <div className="flex justify-between mt-6">
      <Link to='/' className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Back
      </Link>
      <Link to={`/edit/${book.id}`} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
        Edit
      </Link>
    </div>
  </div>
</div>

  )
}

export default Read
