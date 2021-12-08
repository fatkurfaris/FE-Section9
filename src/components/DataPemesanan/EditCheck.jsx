// import Overlay from "@restart/ui/esm/Overlay";
import React from "react";
import { useState,useRef } from "react";
import {Button,Popover,Overlay, ButtonGroup, ToggleButton} from 'react-bootstrap'
import style from './SeatEdit.module.css'
import {Link} from 'react-router-dom'
import { useParams } from "react-router";

export default function EditCheck({kursi}) {
    const {id}= useParams();
    const [show, setShow] = useState(false);
    const [seat, setSeat] = useState(false);
    // const [radioValue, setRadioValue] = useState('1');
    // const radios = [
    //     { name: 'Active', value: '1' },
    //     { name: 'Radio', value: '2' },
    //     { name: 'Radio', value: '3' },
    //   ];
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
  
    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    //   console.log("inikursi2");
    //   console.log({kursi});
    };
    const handleSeat= () => {
            console.log("ini luar kursi");
            console.log(kursi);
        if (typeof(Storage) !== "undefined") {
            console.log("ini dalem kursi");
            console.log(kursi);
            // Store
            localStorage.setItem("Seat", kursi);
            // Retrieve 
             
          }
          
      };

    //   const handleSubmit = () =>{
    //     const newData = {
    //         Payment: pembayaran.Pay,
    //         Title :pembayaran.Title,
    //         Harga:pembayaran.harga,
    //         Seat:localStorage.getItem("Seat"),
    //         Pemesan:localStorage.getItem("username"),
    //     }
    //         insertPemesanan({
    //             variables: {
    //                 object:{
    //                 Payment: pembayaran.Pay,
    //                 Title: pembayaran.Title,
    //                 Seat: localStorage.getItem("Seat"),
    //                 Harga: pembayaran.harga,
    //                 Pemesan:localStorage.getItem("username"),
    //                 }
    //         }})
    //     console.log(newData);
    // }
    return (
        
      <div ref={ref}>
        <Button className={style.undone} onClick={handleClick}>{kursi} </Button>
        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref}
        >
          <Popover id="popover-contained">
            <Popover.Header as="h3">Chose Your Seat</Popover.Header>
            <Popover.Body>
             Are You Sure for Pick This Seat? <strong>{kursi}</strong> 
             <Link to={`/Description/${id}/Detail`}>
                 <Button className={style.space4} onClick={handleSeat}> Yes</Button>
            </Link>
                
                 
             <Button className={style.space5}>No</Button>
            </Popover.Body>
          </Popover>
        </Overlay>
      </div>
    );
  }
  
