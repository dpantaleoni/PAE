import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";
import { SidebarData } from "./SidebarData";
import './Sidebar.css';

const Sidebar = () => {
  const [sidebar, setsidebar] = useState(false)
  const showsidebar = () => setsidebar(!sidebar)
    return (
      <>
        <div className="navbar">
          <Link to='#' className="menu-bars">
            <FaIcons.FaBars onClick={showsidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'sidebar active' : 'sidebar'}>
          <ul className="menu-items">
            <li className="sidebar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link> 
                  </li>
                )
              })}
            </li>
          </ul>
        </nav>
      </>
    );
  }

export default Sidebar