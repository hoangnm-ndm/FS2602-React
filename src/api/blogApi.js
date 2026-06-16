import api from ".";

export const getBlogs = async () => {
  const { data } = await api.get("/blogs");
  return data;
};

export const getDetailBlog = async (id) => {
  const { data } = await api.get(`/blogs/${id}`);
  return data;
};

export const addNewBlog = async (body) => {
  const { data } = await api.post("/blogs", body);
  return data;
};

export const deleteBlog = async (id) => {
  const { data } = await api.delete(`/blogs/${id}`);
  return data;
};
