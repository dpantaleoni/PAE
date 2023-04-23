import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";

const Sidebar = () => {
  const [sidebar, setsidebar] = useState(false)
  const showsidebar = () => setsidebar(!sidebar)
    return (
      <>
        <div className="sidebar">
          <Link to='#' className="menu-bars">
            <FaIcons.FaBars onClick={showsidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'active-sidebar' : 'hidden-sidebar'}>
          <ul className="menu-items">
            <li className="sidebar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }

export default Sidebar