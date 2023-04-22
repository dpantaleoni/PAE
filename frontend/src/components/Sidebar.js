import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const Sidebar = () => {
    return (
      <>
        <div className="" id='sidebar'>
          <Link to='#' className="" id='menu-bars'>
            <FaIcons.FaBars/>
          </Link>

        </div>
      </>
    );
  }

export default Sidebar