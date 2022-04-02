import React from 'react';
import {Navbar,Container} from 'react-bootstrap'

function Heading() {
  return (
    <div className='Heading'>
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Angela Tuto</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Maya</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
export default Heading;