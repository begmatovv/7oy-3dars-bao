import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { calculateTotal } from "../features/products/productsSlice";
const Navbar = () => {
  const { total } = useSelector((store) => store.products);
  const { price } = useSelector((store) => store.products);
  return (
    <div className="navbar bg-base-100 py-4 mb-10">
      <div className="navbar-start ">
        <div className="dropdown btn btn-primary">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Shop center</a>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FiShoppingCart className="w-6 h-6 dropdown" />
              <span className="badge badge-xs badge-primary indicator-item">
                {total}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">{total} Items</span>
              <span className="text-info">Total price: {price}$ </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
