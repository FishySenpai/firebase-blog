import React, { useState, useEffect } from 'react';
import { async } from "@firebase/util";
import { getDocs, doc, deleteDoc, collection } from 'firebase/firestore';
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
    <div>
        {blogList.map((blogs)=>{
            return (
              <div>
                <div>{blogs.title}</div>
                <div>{blogs.blog}</div>
                <div>{blogs.author.name}</div>
                <button onClick={()=>{deleteBlog(blogs.id)}}>Delete</button>
              </div>
            );
        })}
    </div>
  )
}

export default BlogList