
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";


export default function AdminSidebar() {
    return (
      
        <div className="list-group">
        <Link
  to="/admin"
  className="list-group-item mybackground d-flex justify-content-between align-items-center"
>
  <i className="bi bi-house-check-fill fs-2"></i>
  <span>Home</span>
</Link>

       
  
 <Link to="/admin/orderlist" className="list-group-item mybackground d-flex justify-content-between align-items-center " aria-current>
    <i className="bi bi-list-ul fs-2"></i>
    <span> Order List</span>
</Link>
 <Link to="/admin/orderdetail" className="list-group-item mybackground d-flex justify-content-between align-items-center" aria-current>
    <i className="bi bi-ticket-detailed-fill fs-2"></i>
    <span> Order Detail</span>
</Link>
 <Link to="/admin/analytics" className="list-group-item mybackground d-flex justify-content-between align-items-center" aria-current>
    <i className="bi bi-bar-chart-fill fs-2"></i>
    <span> Analytics</span>
</Link>
<Link to="/admin/review" className="list-group-item mybackground d-flex justify-content-between align-items-center" aria-current>
    <i className="bi bi-yelp fs-2"></i>
    <span> Review</span>
</Link>
<Link to="/admin/food" className="list-group-item mybackground d-flex justify-content-between align-items-center" aria-current>
    <i className="bi bi-fork-knife fs-2"></i>
    <span> Food</span>
</Link>
<Link to="/admin/fooddetail" className="list-group-item mybackground d-flex justify-content-between align-items-center" aria-current>
    <i className="bi bi-ticket-detailed fs-2"></i>
    <span> Food Detail</span>
</Link>
<Link to="/admin/customer" className="list-group-item mybackground d-flex justify-content-between align-items-center" aria-current>
    <i className="bi bi-person-plus-fill fs-2"></i>
    <span> Custmer Detail</span>
</Link>

<Link to="/admin/setting" className="list-group-item mybackground d-flex justify-content-between align-items-center" aria-current>
    <i className="bi bi-gear-fill fs-2"></i>
    <span> Settings</span>
</Link>
<Link to="/admin/contect" className="list-group-item mybackground d-flex justify-content-between align-items-center" aria-current>
    <i className="bi bi-person-lines-fill fs-2"></i>
    <span> Contect Us</span>
</Link>




</div>
    );
}