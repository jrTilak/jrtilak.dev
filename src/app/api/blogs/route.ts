import { getAllBlogs, getBlogBySlug } from "@/services/blogs";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const slug = req.nextUrl.searchParams.get("slug");
  const tag = req.nextUrl.searchParams.get("tag");
  const series = req.nextUrl.searchParams.get("series");

  if (slug) {
    const blog = await getBlogBySlug(slug ?? "");

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
    return NextResponse.json({
      data: blogs,
    });
  } else if (series) {
    const allBlogs = await getAllBlogs();
    const blogs = allBlogs?.filter((blog) => blog.series?.includes(series));
    return NextResponse.json({
      data: blogs,
    });
  } else {
    const allBlogs = await getAllBlogs();
    return NextResponse.json({
      data: allBlogs,
    });
  }
};
