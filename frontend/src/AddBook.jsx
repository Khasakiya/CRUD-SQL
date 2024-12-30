import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
const AddBook = () => {

    const [values, setValues] = useState({
        title: '',
        author: '',
        price: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/books', values)
            .then(res => {
                console.log(res);
                navigate('/')
                setValues({ title: '', author: '', price: '' });
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Add Book</h2>
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
    );
};

export default AddBook;
