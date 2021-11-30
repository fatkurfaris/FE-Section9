import React from "react"
import style from './Seat.Module.css'
import{Row,Col, Button} from 'react-bootstrap'
import Check from "./Check"

export default function Seat(){
    let kursi= "A01"
    let kursi2= "A02"
    console.log("ini kursi");
    console.log({kursi});
    return(
        <div>
            <div>

               
                <Row>
                <Col sm={2} className={style.kanan}> 
                    <div className={style.garis_verikal1}></div>   
                </Col>
                
                <Col sm={9} className={style.mid}>
                    
                    <Row>
                    
                    <Col sm={4} className={style.mid}>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={2}><Check kursi={kursi}/></Col>
                        <Col sm={2}><Check kursi={kursi}/></Col>
                        <Col sm={2}><Check kursi={kursi2}/></Col>
                        <Col sm={3}></Col>
                    </Row>
                    </Col>

                    <Col sm={4} className={style.mid}>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={2}><Check kursi={kursi}/></Col>
                        <Col sm={2}><Check kursi={kursi}/></Col>
                        <Col sm={2}><Check kursi={kursi}/></Col>
                        <Col sm={2}><Check kursi={kursi}/></Col>
                        <Col sm={2}><Check kursi={kursi}/></Col>
                        <Col sm={1}></Col>
                    </Row>
                    </Col>

                    <Col sm={4} className={style.mid}>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={2}><Check kursi={kursi}/></Col>
                        <Col sm={2}><Check kursi={kursi}/></Col>
                        <Col sm={2}><Check kursi={kursi}/></Col>
                        <Col sm={3}></Col>
                    </Row>
                    </Col>
                    
                   

                    {/* <Col sm={4} className={style.mid}>
                    <Button className={style.undone}>A04</Button>   
                    <Button className={style.undone}>A05</Button> 
                    <Button className={style.undone}>A06</Button> 
                    <Button className={style.undone}>A07</Button> 
                    <Button className={style.undone}>A08</Button> 
                    </Col>
                    <Col sm={4} className={style.mid}>
                    <Button className={style.undone}>A09</Button> 
                    <Button className={style.undone}>A010</Button>   
                    <Button className={style.undone}>A011</Button> 
                    </Col> */}
                    </Row>

                    <Row className={style.space2}>
                    <Col sm={4} className={style.mid}>
                    <Button className={style.undone}>B01</Button>   
                    <Button className={style.undone}>B02</Button> 
                    <Button className={style.undone}>B03</Button> 
                    </Col>
                    <Col sm={4} className={style.mid}>
                    <Button className={style.undone}>B04</Button>   
                    <Button className={style.undone}>B05</Button> 
                    <Button className={style.undone}>B06</Button> 
                    <Button className={style.undone}>B07</Button> 
                    <Button className={style.undone}>B08</Button> 
                    </Col>
                    <Col sm={4} className={style.mid}>
                    <Button className={style.undone}>B09</Button> 
                    <Button className={style.undone}>B010</Button>   
                    <Button className={style.undone}>B011</Button> 
                    </Col>
                    </Row>

                    <Row className={style.space2}>
                    <Col sm={4} className={style.mid}>
                    <Button className={style.undone}>C01</Button>   
                    <Button className={style.undone}>C02</Button> 
                    <Button className={style.undone}>C03</Button> 
                    </Col>
                    <Col sm={4} className={style.mid}>
                    <Button className={style.undone}>C04</Button>   
                    <Button className={style.undone}>C05</Button> 
                    <Button className={style.undone}>C06</Button> 
                    <Button className={style.undone}>C07</Button> 
                    <Button className={style.undone}>C08</Button> 
                    </Col>
                    <Col sm={4} className={style.mid}>
                    <Button className={style.undone}>C09</Button> 
                    <Button className={style.undone}>C010</Button>   
                    <Button className={style.undone}>C011</Button> 
                    </Col>
                </Row>

                <Row className={style.space2}>
                    <Col sm={4} className={style.mid}>
                    <Button className={style.undone}>D01</Button>   
                    <Button className={style.undone}>D02</Button> 
                    <Button className={style.undone}>D03</Button> 
                    </Col>
                    <Col sm={4} className={style.mid}>
                    <Button className={style.undone}>D04</Button>   
                    <Button className={style.undone}>D05</Button> 
                    <Button className={style.undone}>D06</Button> 
                    <Button className={style.undone}>D07</Button> 
                    <Button className={style.undone}>D08</Button> 
                    </Col>
                    <Col sm={4} className={style.mid}>
                    <Button className={style.undone}>D09</Button> 
                    <Button className={style.undone}>D010</Button>   
                    <Button className={style.undone}>D011</Button> 
                    </Col>
                </Row>

                <Row className={style.space2}>
                    <Col sm={4} className={style.mid}>
                    <Button className={style.undone}>E01</Button>   
                    <Button className={style.undone}>E02</Button> 
                    <Button className={style.undone}>E03</Button> 
                    </Col>
                    <Col sm={4} className={style.mid}>
                    <Button className={style.undone}>E04</Button>   
                    <Button className={style.undone}>E05</Button> 
                    <Button className={style.undone}>E06</Button> 
                    <Button className={style.undone}>E07</Button> 
                    <Button className={style.undone}>E08</Button> 
                    </Col>
                    <Col sm={4} className={style.mid}>
                    <Button className={style.undone}>E09</Button> 
                    <Button className={style.undone}>E010</Button>   
                    <Button className={style.undone}>E011</Button> 
                    </Col>
                </Row>

                <Row className={style.space2}>
                    <Col sm={4} className={style.mid}>
                    <Button className={style.undone}>F01</Button>   
                    <Button className={style.undone}>F02</Button> 
                    <Button className={style.undone}>F03</Button> 
                    </Col>
                    <Col sm={4} className={style.mid}>
                    <Button className={style.undone}>F04</Button>   
                    <Button className={style.undone}>F05</Button> 
                    <Button className={style.undone}>F06</Button> 
                    <Button className={style.undone}>F07</Button> 
                    <Button className={style.undone}>F08</Button> 
                    </Col>
                    <Col sm={4} className={style.mid}>
                    <Button className={style.undone}>F09</Button> 
                    <Button className={style.undone}>F010</Button>   
                    <Button className={style.undone}>F011</Button> 
                    </Col>
                </Row>
                </Col>

                <Row className={style.space2}>
                    <Col sm={1}></Col>
                    <Col sm={11}>
                        <Row>
                    <Col sm={4} className={style.mid}>
                    <Button className={style.undone}>G01</Button>   
                    <Button className={style.undone}>G02</Button> 
                    <Button className={style.undone}>G03</Button> 
                    <Button className={style.undone}>G04</Button> 
                    <Button className={style.undone}>G05</Button>
                    <Button className={style.undone}>G06</Button>  
                    </Col>
                    <Col sm={4} className={style.mid}>
                    <Button className={style.undone}>G07</Button>   
                    <Button className={style.undone}>G08</Button> 
                    <Button className={style.undone}>G09</Button> 
                    <Button className={style.undone}>G010</Button> 
                    <Button className={style.undone}>G011</Button> 
                    </Col>
                    <Col sm={3} className={style.mid}>
                    <Button className={style.undone}>G012</Button> 
                    <Button className={style.undone}>G013</Button>   
                    <Button className={style.undone}>G014</Button> 
                    
                    </Col>
                    </Row>
                    </Col>
                </Row>

                <Row className={style.space2}>
                    <Col sm={1}></Col>
                    <Col sm={11}>
                        <Row>
                    <Col sm={4} className={style.mid}>
                    <Button className={style.undone}>H01</Button>   
                    <Button className={style.undone}>H02</Button> 
                    <Button className={style.undone}>H03</Button> 
                    <Button className={style.undone}>H04</Button> 
                    <Button className={style.undone}>H05</Button> 
                    <Button className={style.undone}>H06</Button> 
                    </Col>
                    <Col sm={4} className={style.mid}>
                    <Button className={style.undone}>H07</Button>   
                    <Button className={style.undone}>H08</Button> 
                    <Button className={style.undone}>H09</Button> 
                    <Button className={style.undone}>H010</Button> 
                    <Button className={style.undone}>H011</Button> 
                    </Col>
                    <Col sm={3} className={style.mid}>
                    <Button className={style.undone}>H012</Button> 
                    <Button className={style.undone}>H013</Button>   
                    <Button className={style.undone}>H014</Button> 
                    
                    </Col>
                    </Row>
                    </Col>
                </Row>

                </Row>
                


                <div className={style.space3}></div>


                

            </div>
        </div>
    )
}