import {Container, Row, Col, Form ,Button} from "react-bootstrap"
const GetInTouch = () => {
    return(
        <Container>
            <Row>
                <Col>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label style={{color:'white'}}>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label style={{color:'white'}}>Masukan Pesan Anda</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button size="lg" variant="outline-light">Kirim</Button>
                    </div>
                </Form>
                </Col>
                <Col>
                <ol style={{ listStyleType: 'none', marginLeft:'150px', color:'white', fontSize:'25px' }}>
                    <li className="text-start">Nomor Telepon : +62 82194874202</li>
                    <li className="text-start">Alamat email : virginmeb11@gmail.com</li>
                    <li className="text-start">Facebook : Virginia Bareweng</li>
                    <li className="text-start">Instagram : virginmeb</li>
                </ol>  
                </Col>
            </Row>
        </Container>
    )
}

export default GetInTouch