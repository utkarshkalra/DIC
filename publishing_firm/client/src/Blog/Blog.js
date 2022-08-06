import { blogs } from "./SingleBlog/blogs.json";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <main className="py-14 bg-[url('https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80')] bg-cover text-white">
      <h1 className="my-5 text-center text-3xl font-bold">
        Teaching & Learning Blog
      </h1>
      <p className="text-center text-xl italic px-10">
        Explore insights, trends, and research that impact teaching, learning,
        and leading.
      </p>
      <section className="list w-4/5 mx-auto p-10 backdrop-blur-md ">
        <ul>
          {blogs.map((blog) => {
            return (
              <li className="my-4">
                <h2 className="text-lg font-semibold uppercase w-5/6 inline-block">
                  {blog.heading}
                </h2>
                <Link to={`/blogs/${blog.id}`} className="w-1/6 underline">
                  {" "}
                  more
                </Link>
                <br />
                <div className="my-1">
                  <span> By: {blog.author}</span>&nbsp;|&nbsp;
                  <span> {blog.date}</span>
                </div>
                <hr />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default Blog;
