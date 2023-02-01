import React, { useState, useEffect } from 'react';
import {addDoc, collection} from 'firebase/firestore'
import { db, auth } from './firebase-config';
import { useNavigate, Link } from 'react-router-dom';

const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [blog, setBlog] = useState("");

    const blogsCollection = collection(db, "blogs");
    const navigate = useNavigate;
    const createBlog = async ()=>{
        await addDoc(blogsCollection, {title, blog, author:{name: auth.currentUser.displayName, id: auth.currentUser.uid}})
    }
    
    
  return (
    <div className="flex flex-col absolute left-96 top-28 ">
      <div className="flex flex-col">
        <label className="text-left py-2 text-2xl text-gray-800 italic">
          Title
        </label>
        <div className="">
          <input
            className="rounded-sm p-2 w-[388px] boxShadow"
            placeholder="Title.."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-left py-3 text-2xl text-gray-800 italic">
          Write Blog
        </label>
        <div>
          <textarea
            className="rounded-sm p-2 w-[388px] boxShadow h-[100px]"
            placeholder="Write Blog.."
            onChange={(e) => {
              setBlog(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <button
          className="bg-slate-600 rounded-sm text-gray-300 text-xl px-2 m-2"
          onClick={createBlog}
        >
          <Link to="/">Submit</Link>
        </button>
      </div>
    </div>
  );
}

export default CreateBlog;