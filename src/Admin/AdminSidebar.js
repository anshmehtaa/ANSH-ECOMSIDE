import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./AdminSidebar.css";

export default function AdminSidebar({ closeSidebar }) {
  const menu = [
    { to: "/admin", icon: "house-check-fill", label: "Home" },
    { to: "/admin/orderlist", icon: "list-ul", label: "Orders" },
    { to: "/admin/analytics", icon: "bar-chart-fill", label: "Analytics" },
    { to: "/admin/food", icon: "fork-knife", label: "Food" },
    { to: "/admin/customer", icon: "person-fill", label: "Customers" },
    { to: "/admin/setting", icon: "gear-fill", label: "Settings" },
    { to: "/admin/contect", icon: "person-lines-fill", label: "Contact" },
  ];

  return (
    <div className="admin-sidebar">
      {menu.map((item, index) => (
        <NavLink
          key={index}
          to={item.to}
          end
          onClick={closeSidebar}
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <i className={`bi bi-${item.icon}`}></i>
          <span>{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
}
