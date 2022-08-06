import ProductCard from "./SingleProduct/productCard";

const Product = () => {
  let ids = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <main className="pt-14 bg-gray-100">
      <h1 className="text-3xl text-center text-yellow-900 my-10 font-bold">
        Our Bestselling Products
      </h1>
      <div className="h-14 bg-yellow-900 fixed w-screen z-1 top-0 "></div>
      <div className="flex w-screen flex-wrap justify-center">
        {ids.map((i) => {
          return <ProductCard index={i} />;
        })}
      </div>
    </main>
  );
};

export default Product;
