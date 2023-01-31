import React, { useState, useEffect } from 'react';
import { async } from "@firebase/util";
import { getDocs, doc, deleteDoc, collection } from 'firebase/firestore';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {db} from "./firebase-config"

const BlogList = () => {
    const [blogList, setBlogList]= useState([]);
    const blogsCollection = collection(db, "blogs");

    useEffect(() => {
      const getBlogs = async()=>{
        const data = await getDocs(blogsCollection);
        setBlogList(data.docs.map((doc)=>({...doc.data(), id: doc.id,})))
      }
      getBlogs();
    })
    const deleteBlog =async (id)=>{
        const blogDoc = doc(db, "blogs", id);
        await deleteDoc(blogDoc);

    }
  return (
    <div className="flex flex-col text-center p-4">
      {blogList.map((blogs) => {
        return (
          <div className="pt-4 text-center content-center p-2 border-solid border-2 border-slate-200 w-[1000px] ml-64">
            <div className="flex flex-row text-center justify-center relative">
              <div className="text-3xl capitalize">{blogs.title}</div>
              <button
                className="absolute top-0 right-6"
                onClick={() => {
                  deleteBlog(blogs.id);
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
            <div className="text-l text-left">{blogs.blog}</div>
            <div className="text-2xl text-right italic">
              @{blogs.author.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BlogList