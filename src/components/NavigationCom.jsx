import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const NavigationCom = ({wisata}) => {

    return (

        <div>
            <Navbar bg="success" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><strong>{wisata}</strong></Navbar.Brand>
                    <Nav className="me-auto">
                        {/* <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer> */}
                        
                        {/* <LinkContainer to='/wisata-alam'>
                             <Nav.Link>Wisata Alam</Nav.Link>
                        </LinkContainer>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationCom;