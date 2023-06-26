import {Container, Col, Row, Image} from "react-bootstrap"
const HeaderImages = () =>{
    return(
        <Container>
            <Col xs={6} md={4}>
                <Image src="holder.js/171x180" rounded />
            </Col>
            <Col xs={6} md={4}>
                <Image src="holder.js/171x180" roundedCircle />
            </Col>
            <Col xs={6} md={4}>
                <Image src="holder.js/171x180" thumbnail />
            </Col> 
        </Container>
    )
}

export default HeaderImages