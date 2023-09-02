import { NavLink } from "react-router-dom";

const SubHeader = () => {
  return (
    <div>
      <nav className="bg-purple-700 shadow-md  md:h-12">
        <div className=" px-4 py-3.5 mx-auto md:px-6">
          <div className=" flex flex-col md:flex-row justify-between">
            <ul className="flex flex-col md:flex-row  mr-6  gap-6 text-sm font-medium">
              <NavLink to="/" className="text-black font-bold no-underline">
                Home
              </NavLink>
              <NavLink to="/products" className="text-black font-bold no-underline">
                Products
              </NavLink>

              <NavLink to="/Services" className="text-black font-bold no-underline">
                Services
              </NavLink>

              <NavLink to="/contact" className="text-black font-bold no-underline mb-2">
                Contact
              </NavLink>
            </ul>
            <form>
              <div className="flex">
                <input
                  type="text"
                  className="bg-gray-300  text-gray-900 text-sm rounded-md h-7 mb-2 pl-2  "
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  className="   mb-2 px-3 ml-1 text-sm font-medium text-black bg-red-500 rounded-md border border-red-700 hover:bg-red-600   "
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SubHeader;
