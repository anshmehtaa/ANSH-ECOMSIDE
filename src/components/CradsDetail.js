import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DLT } from '../redux/actions/action';

const CradsDetail = () => {
  const [data,setData] = useState([]);
  
  const{id} = useParams();
  // console.id(id);
  const history = useNavigate();
  const dispatch = useDispatch();
  const getdata = useSelector((state) => state.cartreducer.carts);
    // console.log(getdata); 
    const compare = ()=> {
      let comparedata = getdata.filter((e)=>{
        return e.id == id
      });
      setData(comparedata);
    }
    const dlt = (id)=>{
      dispatch(DLT(id));
      history ("/");
  }
    useEffect(()=>{
      compare();
    },[id])
    
  return (
    <>
      <div className='container mt-2'>
        <h2 className='text-center'>Iteams Detail Page</h2>
        <section className='container mt-3'>
          <div className='iteamsdetails'>
          {
            data.map((ele)=>{
              return(
                <>
                <div className='items_img'>
              <img src= {ele.imgdata} alt='' />
            </div>
            <div className='details'>
            <Table>
              <tr>
                <td>
                  <p><strong>Reataurant</strong> {ele.rname}</p>
                  <p><strong>Price</strong> {ele.price}</p>
                  <p><strong>Dishes</strong> {ele.address}  </p>
                  <p><strong>Total</strong> : ₹ 300 </p>
                  <div className='mt-5 d-flex justify-content-center align-items-center' style={{width :100, cursor:"pointer", background:"#ddd", color:"#111"}}>

                  </div>
                </td>

                <td>
                  <p><strong>Rating :</strong> <span style={{background:"green", color:"#fff",padding:"2px 5px", borderRadius:"5px"}}>{ele.rating}</span></p>
                  <p><strong>Order Review :</strong> <span >{ele.somedata}</span></p>
                  <p><strong>Remove :</strong> <span><i className='fas fa-trash'onClick={()=>  dlt (ele.id)} style={{color:"red", fontSize :20, cursor:'pointer'}}></i></span></p>
                </td>
              </tr>
            </Table>

            </div>
                </>
              )
            })
          }
            
            </div>

        </section>
      </div>
    </>
  )
}

export default CradsDetail;
