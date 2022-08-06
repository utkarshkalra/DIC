import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80')] w-100 min-h-screen bg-cover hero text-white flex ">
      <div className="z-1 relative flex flex-col p-20 mt-52 w-4/6">
        <h1 className="text-6xl mb-10 font-bold">Publishers</h1>
        <p className="italic text-2xl mb-10">
          From one Man’s dream to passion of thousands of individuals, measure
          of our success has always been your achievements. Since 1997, we have
          come far yet we feel the journey has just begun.
        </p>
        <Link to="/products">
          <button className="default_button relative hover:border text-xl w-80">
            Explore our Products
            <BsFillArrowRightCircleFill className="right-5 absolute" />
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Hero;
