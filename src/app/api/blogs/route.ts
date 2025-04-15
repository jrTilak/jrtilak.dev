import { getAllBlogs, getBlogBySlug } from "@/lib/blogs";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const slug = req.nextUrl.searchParams.get("slug");
  const tag = req.nextUrl.searchParams.get("tag");
  const series = req.nextUrl.searchParams.get("series");
  console.log(slug, tag, series);
  if (slug) {
    const blog = await getBlogBySlug(slug ?? "");
    console.log(blog);
    if (!blog)
      return NextResponse.json(
        {
          data: null,
        },
        {
          status: 404,
        }
      );

    return NextResponse.json({
      data: blog,
    });
  } else if (tag) {
    const allBlogs = await getAllBlogs();
    const blogs = allBlogs?.filter((blog) => blog.tags?.includes(tag));
    console.log(blogs);
    return NextResponse.json({
      data: blogs,
    });
  } else if (series) {
    const allBlogs = await getAllBlogs();
    const blogs = allBlogs?.filter((blog) => blog.series?.includes(series));
    console.log(blogs);
    return NextResponse.json({
      data: blogs,
    });
  } else {
    const allBlogs = await getAllBlogs();
    console.log(allBlogs);
    return NextResponse.json({
      data: allBlogs,
    });
  }
};
