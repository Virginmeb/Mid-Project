import { Navbar, Nav, Container } from "react-bootstrap"
const NavigationBar = () =>{
    return(
        <Navbar bg="dark" data-bs-theme="dark" >
            <Container>
                <Navbar.Brand>MY CV</Navbar.Brand>
                <Nav>
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>About</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default NavigationBar