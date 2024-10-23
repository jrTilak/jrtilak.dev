import * as fs from "fs";

const PATH_TO_BLOGS_FROM_ROOT = "/src/contents/blogs";

console.log("Creating a new blog post...");

const slug = process.argv[2];

// ask for slug if not given

if (!slug) {
  console.log("Please provide a slug for the blog post");
  process.exit(1);
}

//check if the title is in kebab-case
const kebabRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

if (!kebabRegex.test(slug)) {
  console.log("The slug must be in kebab-case");
  process.exit(1);
}

const fileName = slug.endsWith(".mdx") ? slug : `${slug}.mdx`;

// check if the file already exists
const fullPath = `${process.cwd()}${PATH_TO_BLOGS_FROM_ROOT}/${fileName}`;
if (fs.existsSync(fullPath)) {
  console.log("The file already exists");
  process.exit(1);
}

const fileContent = `---
title: ${slug.replaceAll("-", " ")}
publishedAt: ${new Date().toString()}
image: "/images/blogs/${slug}/thumbnail.png"
tags: []
summary: ""
---

## Hello World
`;

// write the content to file
try {
  fs.writeFileSync(fullPath, fileContent);
} catch (err) {
  console.error("Failed to create blog!");
  console.error(err);
  process.exit(0);
}

console.log("Blog Create Successfully!");
console.log(`Don't forget to add image here "/images/blogs/${slug}.png"`);
