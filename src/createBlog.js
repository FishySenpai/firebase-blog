import React, { useState, useEffect } from 'react';
import {addDoc, collection} from 'firebase/firestore'
import { db, auth } from './firebase-config';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [blog, setBlog] = useState("");

    const blogsCollection = collection(db, "blogs");
    const navigate = useNavigate;
    const createBlog = async ()=>{
        await addDoc(blogsCollection, {title, blog, author:{name: auth.currentUser.displayName, id: auth.currentUser.uid}})
        navigate("/")
    }
    
    
  return (
    <div className="bg-gray-400 flex flex-col">
      <div className="flex flex-col">
        <label>Title</label>
        <div>
          <input
            placeholder="Title.."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label>Create Blog</label>
        <div>
          <textarea
            placeholder="Create Blog.."
            onChange={(e) => {
              setBlog(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <button onClick={createBlog}>Submit</button>
      </div>
    </div>
  );
}

export default CreateBlog;