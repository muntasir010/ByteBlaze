import { useEffect, useState } from "react";
import BlogCard from "../Components/BlogCard";
import { deleteBlog, getBlogs  } from "../utils";
import EmptyState from "../Components/EmptyState";

const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    }, [])

    const handleDelete = id =>{
        deleteBlog(id)
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    }

    if(blogs.length<1)return <EmptyState message='No Bookmarks Available!' address={'/blogs'} label={'Go To Blogs'} />
    return (
        <div className="max-w-7xl mx-auto my-5 sm:my-10">
            <div className="grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {
                    blogs.map(blog =>
                        <BlogCard 
                        handleDelete={handleDelete} deletable={true} 
                        key={blog.id} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default Bookmarks;