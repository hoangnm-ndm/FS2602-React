export const getProducts = async () => await api.get("/products");
export const getProductById = async (id) => await api.get(`/products/${id}`);
export const createProduct = async (data) => await api.post("/products", data);
export const updateProduct = async (id, data) =>
  await api.put(`/products/${id}`, data);
export const deleteProduct = async (id) => await api.delete(`/products/${id}`);
