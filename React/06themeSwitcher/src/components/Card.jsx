export default function Card() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <img
          className=" pb-3 rounded-lg"
          src="https://cdn-1.motorsport.com/images/amp/YN1NBo42/s1000/marc-marquez-gresini-racing.jpg"
          alt="product_image1"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            8 Times World Champion
          </h5>
        </a>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            Marc Marquez
          </span>
        </div>
      </div>
    </div>
  );
}
