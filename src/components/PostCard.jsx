import React from 'react'
import appwriteService from "../appwrite/stor";
import { Link } from "react-router-dom";

function PostCard({
    $id, // appwrite se $id aata hai
    title,
    featuredImage
}) {
  return (
    <Link to={`/post/${$id}`}>// appwrite se $id aata hai
        <div className='w-full bg-gray-100 rounded-lg p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} 
                alt={title}
                className='rounded-lg' />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard