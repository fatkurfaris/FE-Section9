import React from "react"
import {Button, Col, Row, Modal} from 'react-bootstrap'
import { useState} from "react";
import { useMutation } from '@apollo/client';
import { Insert_Data, LOAD_MOVIE } from "../../GraphQL/Query/Query";
import {Link, useParams, useSearchParams} from 'react-router-dom'
import style from './Confirm.module.css'



function Confirm(index){
    const {id}= useParams();
    // const testing = data?.Movie
    const [insertPemesanan] = useMutation(Insert_Data);
    // const [state, setState] = useState();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [state, setState] = useState({
        Payment: "",
        Title: "",
        Seat: "",
        Harga:"",
        Pemesan:"",
      })

    

    const pembayaran = index.index
    // console.log(index);

    // masukin ke graph ql
        // insertPemesanan({variables: {
        // Payment: pembayaran.Pay,
        // Title: pembayaran.Title,
        // Seat: localStorage.getItem("Seat"),
        // Harga: pembayaran.Harga,
        // }})
        // console.log("ini tambah Pengunjung");

    const handleSubmit = () =>{
        const newData = {
            Payment: pembayaran.Pay,
            Title :pembayaran.Title,
            Harga:pembayaran.harga,
            Seat:localStorage.getItem("Seat"),
            Pemesan:localStorage.getItem("username"),
        }
            insertPemesanan({
                variables: {
                    object:{
                    Payment: pembayaran.Pay,
                    Title: pembayaran.Title,
                    Seat: localStorage.getItem("Seat"),
                    Harga: pembayaran.harga,
                    Pemesan:localStorage.getItem("username"),
                    }
            }})
        console.log(newData);
    }
    
    return(
        <>
         {/* {console.log(newData)} */}
            <Button variant="primary" onClick={handleShow}>
                                    Payment
                                </Button>
                                <div >
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Confirm Payment</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Row>
                                            <h5>
                                            <Row>
                                                <Col sm={2}>Pemesan</Col>
                                                <Col className={style.Tmid} sm={1}>:</Col>
                                                <Col sm={9}>{localStorage.getItem("username")}</Col>
                                            </Row>
                                            <Row>
                                                <Col sm={2}>Title</Col>
                                                <Col className={style.Tmid} sm={1}>:</Col>
                                                <Col sm={9}>{pembayaran.Title}</Col>
                                            </Row>
                                            <Row>
                                                <Col sm={2}>Minute</Col>
                                                <Col className={style.Tmid} sm={1}>:</Col>
                                                <Col sm={9}>{pembayaran.Duration}</Col>
                                            </Row>
                                            <Row>
                                                <Col sm={2}>Price</Col>
                                                <Col className={style.Tmid} sm={1}>:</Col>
                                                <Col sm={9}>Rp {pembayaran.harga}</Col>
                                            </Row>
                                            <Row>
                                                <Col sm={2}>Seat</Col>
                                                <Col className={style.Tmid} sm={1}>:</Col>
                                                <Col sm={9}>{localStorage.getItem("Seat")}</Col>
                                            </Row>
                                            <Row>
                                                <Col sm={2}>Method</Col>
                                                <Col className={style.Tmid} sm={1}>:</Col>
                                                <Col sm={9}>        
                                                    {pembayaran.Pay}
                                                </Col>
                                            </Row>
                                            </h5>
                                        </Row>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    {/* {testing?.filter(index=>index.id==id).map((index,detail)=>( */}
                                    <Link to={`/Description/${id}/Detail/Data`}>
                                    <Button variant="primary" onClick={handleSubmit}>
                                     Yes
                                    </Button>
                                    </Link>
                                     {/* ))} */}
                                    </Modal.Footer>
                                </Modal>
                                </div>
        </>
    )
}

export default Confirm;