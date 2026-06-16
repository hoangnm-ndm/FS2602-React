import { deleteBlog, getBlogs } from "@/api/blogApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getBlogs();
      setBlogs(data);
    })();
  }, []);

  return (
    <>
      <h1>Blog Management</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Status</th>
            {/* localhost:5173/admin/blogs */}
            {/* localhost:5173/admin/blogs/add */}
            <th>
              <Link to={"add"}>Add new</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {blogs ? (
            blogs.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.status}</td>
                <td>
                  <button onClick={() => deleteBlog(item.id)}>Delete</button>
                  <Link to={`update/${item.id}`}>Update</Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>Không có bài viết nào, thêm mới ngay!</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default BlogPage;
