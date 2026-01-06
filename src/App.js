

// export default App;
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Welcome from './components/welcome';
import CradsDetail from './components/CradsDetail';
import Crads from './components/Crads'; // You had this right


import React from 'react';

import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import AdminHome from "./Admin/AdminHome";
import OrderList from "./Admin/orderlist/OrderList";
import OrderDetail from './Admin/orderdetail/OrderDetail';
import Analytics from './Admin/analytics/Analytics';
import Review from './Admin/review/Review';
import Food from './Admin/food/Food';
import FoodDetail from './Admin/fooddetail/FoodDetail';
import Customer from './Admin/customer/Customer';
import Setting from './Admin/setting/Setting';
import Contect from './Admin/contect/Contect';





function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/Crads" element={<Crads />} />
        <Route path="/cart/:id" element={<CradsDetail />} />
        <Route path="/admin" element={<AdminHome />} /> 
        <Route path="/admin/OrderList" element={<OrderList />}/> 
        <Route path="/admin/OrderDetail" element={<OrderDetail/>} /> 
       <Route path="/admin/Analytics" element={<Analytics/>} /> 
       <Route path="/admin/Review" element={<Review/>} /> 
       <Route path="/admin/Food" element={<Food/>} /> 
       <Route path="/admin/FoodDetail" element={<FoodDetail/>}/> 
       <Route path="/admin/Customer" element={<Customer/>}/> 
       <Route path="/admin/Setting" element={<Setting/>}/> 
      <Route path="/admin/Contect" element={<Contect/>}/> 
      </Routes>
      
    </>
   
  );
}

export default App;

