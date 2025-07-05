import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navigation.scss'; // Create this file for styles

const links = [
  { path: '/', name: 'Home' },
  { path: '/designs', name: 'Designs' },
  { path: '/development', name: 'Development' },
  { path: '/model/1', name: 'Models' } // Example model link
];

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="navigation">
      <ul className="nav-list">
        {links.map(({ path, name }) => (
          <li key={path}>
            <NavLink 
              to={path} 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              {name}
              {path === location.pathname && (
                <motion.div
                  layoutId="underline"
                  className="underline"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                />
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;