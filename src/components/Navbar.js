import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="flex">
      <li>
        <NavLink
          exact
          to="/trending"
          activeClassName="bg-gh-light-blue"
          className="px-4 py-1.5 border-gh-border text-gh-white border border-r-0 rounded-l-md  text-sm font-medium"
        >
          Repositories
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/developers"
          activeClassName="bg-gh-light-blue"
          className="px-4 py-1.5 border-gh-border text-gh-white border border-l-0 rounded-r-md  text-sm font-medium"
        >
          Developers
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
