import React from 'react'

function ViewBlogs({blog}) {
  return (
    <div className='BlogCard'>
        <div>
            {new Date(blog.createdAt).toLocaleString("en-US")}
        </div>
        <h3>{blog.title}</h3>
        <h3>{blog.category}</h3>
        <p>{blog.Blog}</p>
        <button>Delete</button>
        <button>update</button>
    </div>
  )
}

export default ViewBlogs