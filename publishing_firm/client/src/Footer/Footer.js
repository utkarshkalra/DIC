const Footer = () => {
  return (
    <footer className="p-4  sm:p-6 bg-yellow-900">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <a href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Publishers
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
              Resources
            </h2>
            <ul className="text-orange-200">
              <li className="mb-4">
                <a href="#events" className="hover:underline">
                  Upcoming Events
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:underline">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
              Follow us
            </h2>
            <ul className="text-orange-200">
              <li className="mb-4">
                <a
                  href="https://github.com/utkarshkalra"
                  className="hover:underline "
                >
                  Github
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://github.com/utkarshkalra"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/utkarshkalra"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white">Legal</h2>
            <ul className="text-orange-200">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 sm:mx-auto border-orange-300 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm sm:text-center text-orange-200">
          © 2022{" "}
          <a href="/" className="hover:underline">
            Publishers™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
