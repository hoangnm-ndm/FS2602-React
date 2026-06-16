import * as z from "zod";

export const blogAddSchema = z.object({
  title: z
    .string()
    .min(6, "Tên bài viết tối thiểu 6 ký tự")
    .max(200, "Tên bài viết tối đa 200 ký tự"),
  content: z
    .string()
    .min(6, "Nội dung bài viết cần tối thiếu 6 ký tự")
    .max(20000, "Nội dung bài viết không vượt quá 20.000 ý tự"),
  status: z.string(["published", "draft"]),
});
