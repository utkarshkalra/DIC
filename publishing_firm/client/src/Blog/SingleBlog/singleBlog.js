import { Link, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { blogs } from "./blogs.json";

const SingleBlog = () => {
  const params = useParams();
  const index = params.blogid - 1;

  return (
    <main>
      <div className="h-14 bg-yellow-900 fixed w-screen z-1 top-0"></div>
      <Link
        to="blogs"
        className=" mt-4 ml-4 text-2xl text-yellow-900 flex items-center underline "
      >
        <IoIosArrowRoundBack /> Back
      </Link>
      <div className=" bg-white flex flex-col items-center">
        <div className="w-5/6 mb-10">
          <h1 className="text-4xl text-center font-bold my-10 text-yellow-900">
            {blogs[index].heading}
          </h1>
          <img src={blogs[index].img} alt="img" />
        </div>
        <div className="w-3/5 flex flex-sm-col mb-10">
          <div className="left w-4/5 p-4 text-lg">
            <p> {blogs[index].text} </p>
          </div>
          <div className="p-4 right w-1/5">
            <div className="date font-bold underline">{blogs[index].date}</div>
            <div className="author ">
              <h2 className="text-yellow-900 font-bold">
                {blogs[index].author}
              </h2>
              <p>{blogs[index].aboutAuthor}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleBlog;
