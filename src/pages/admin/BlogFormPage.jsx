import { blogAddSchema } from "@/schemas/blogSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const BlogFormPage = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(blogAddSchema),
  });
  const onSubmit = (data) => {
    fetch("http://localhost:4000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ ...data, createAt: Date.now() }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("thanh cong!");
        // reset();
        nav("/admin/blogs");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* * register("title") -> ...[name, id, handleChange] */}
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
        />
        {errors && <p>{errors?.title?.message}</p>}
        {/* option chainning */}

        {/* <input
          type="price"
          placeholder="price"
          {...register("price", { valueAsNumber: true })}
        /> */}

        <textarea
          placeholder="content"
          {...register("content", { required: true })}
          cols={10}
          rows={3}
        ></textarea>
        {errors && <p>{errors?.content?.message}</p>}

        <select {...register("status")}>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>

        <input type="submit" />
      </form>
    </>
  );
};

export default BlogFormPage;
