import React, { useEffect, useState } from 'react'
import { useParams,Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Edit = () => {
    const{id} = useParams();
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:8081/read/'+id)
        .then(res => {
            console.log(res)
            setValues({...values,
                title: res.data[0].title,
                author: res.data[0].author,
                price: res.data[0].price});
        })
        .catch(err => console.log(err));
    },[])

    const [values, setValues] = useState({
            title: '',
            author: '',
            price: ''
        });
    
    const handleEdit =(e) =>{
        e.preventDefault();
        axios.put('http://localhost:8081/edit/'+id,values)
        .then(res =>{
            console.log(res);
            navigate('/')
        }).catch(err => console.log(err));
    }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                <form onSubmit={handleEdit}>
                    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Update Book</h2>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                        <input
                            id="title"
                            type="text"
                            placeholder="Enter Title"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
                            value={values.title}
                            onChange={(e) => setValues({ ...values, title: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author:</label>
                        <input
                            id="author"
                            type="text"
                            placeholder="Enter Author"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
                            value={values.author}
                            onChange={(e) => setValues({ ...values, author: e.target.value })}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price:</label>
                        <input
                            id="price"
                            type="text"
                            placeholder="Enter Price"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
                            value={values.price}
                            onChange={(e) => setValues({ ...values, price: e.target.value })}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
  )
}

export default Edit
