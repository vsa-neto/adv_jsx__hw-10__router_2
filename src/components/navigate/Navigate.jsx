import { NavLink } from "react-router-dom";
// import { HomePage, DriftPage, ForzaPage, TimeAttackPage } from '../pages/Pages';
import './Navigate.css'


export const Navigate = () => {
   const navStyle = {
      display: "flex",
      gap: "20px",
   };

   const activLink = {
      color: "rgb(152, 136, 153)"
   };

   const links = [
      {
         path: "/",
         linkName: "Главная"
      },
      {
         path: "/drift",
         linkName: "Дрифт-такси"
      },
   ]

   const UpperCase = (text) => {
      return text.toUpperCase();
   };

   return (
         <ul style={navStyle} className="links">
            {
               links.map((item) => {
                  console.log(item);
                  return (
                     <li className="link">
                        <NavLink
                           className={({ isActive }) => `a ${isActive ? "link-active" : "nav-link"}`}
                           to={item.path} > {UpperCase(item.linkName)}
                        </NavLink>
                     </li>)

               })
            }
         </ul>
   )
}