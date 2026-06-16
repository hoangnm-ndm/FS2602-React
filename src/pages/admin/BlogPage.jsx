import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const url = "http://localhost:4000/blogs";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);

  const handleDelete = async (id) => {
    const data = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    console.log(data);
  };
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
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
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
