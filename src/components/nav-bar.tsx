import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

interface Props {
    displayBooks(): void,
    displayPodcasts(): void
    displayHome(): void
}


const NavBar = (props: Props) => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className="py-0">
            {/* <Container> */}
            <Nav className='me-md-5'>
                <img src="bebop2.png" />
            </Nav>
            <Navbar.Brand onClick={props.displayHome}>Andy Fairweather</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link eventKey="1" onClick={props.displayBooks}>Books</Nav.Link>
                    <Nav.Link eventKey="2" onClick={props.displayPodcasts}>Podcasts</Nav.Link>
                </Nav>
                <Nav className='mx--10'>
                    <MDBBtn className='my-1 mx-md-2 mx-auto' style={{ backgroundColor: '#0082ca' }} href='https://www.linkedin.com/in/andy-fairweather-17609220b/'>
                        <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>
                    <MDBBtn className='my-1 me-md-5 mx-auto' style={{ backgroundColor: '#6e5494' }} href='https://github.com/ACFairweather'>
                        <MDBIcon fab icon='github' />
                    </MDBBtn>
                </Nav>
            </Navbar.Collapse>
            {/* </Container> */}
        </Navbar>
    )
}

export default NavBar