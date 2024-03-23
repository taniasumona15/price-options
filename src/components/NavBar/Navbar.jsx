import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/services", name: "Services" },
    { id: 5, path: "/blogs", name: "Blogs" },
  ];
  return (
    <nav className="text-black p-4">
      <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        {
            open === true ? <IoCloseSharp></IoCloseSharp> : <HiMenuAlt1></HiMenuAlt1>
        }
        
      </div>
      {/* <ul className={`md:flex duration-1000 absolute ${open ? '': 'hidden'} */}
      <ul className={`md:flex justify-center duration-1000 absolute md:static ${open ? 'top-16': '-top-60'}

       bg-slate-400 md:bg-transparent ml-10 p-2 rounded`}>
        {routes.map((route) => (
          <Link key={route.id} route1111={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
