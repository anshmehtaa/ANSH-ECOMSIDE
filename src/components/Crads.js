import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cardsData from './cardsData';
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';

const Crads = () => {
  const [data, setData] = useState(cardsData);


  const dispatch = useDispatch ();

  const send = (e) =>{
    // console.log (e);
    dispatch(ADD(e));

  }
  return (


    <div className='container mt-3'>
      <h2 className='text-center display-3 fw-bold text-danger '>ADD TO CARD</h2>
      <div className='row d-flex justify-content-center align-items-center'>
        {
          data.map((element, id) => {
          return (
        <>
          <Card style={{ width: '22rem',border:"none" }} className='mx-2 mt-4 card_style'>
            <Card.Img variant="top" src= {element.imgdata} style={{height :"16rem"}} className='mt-3' />
            <Card.Body>
              <Card.Title>{element. rname}</Card.Title>
              <Card.Text>
               Price : ₹{element.price}
              </Card.Text>
              <div className='button_div d-flex justify-content-center'>
              <Button variant="primary"
              onClick={()=>  send(element) }
               className='col-lg-12'>Add to card</Button>
              </div>
              
            </Card.Body>
          </Card>
        </>
        )
      })
      }

      </div>
    </div>
  )

}

export default Crads;
