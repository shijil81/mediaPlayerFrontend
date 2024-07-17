import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <div>
      <Navbar className="bg-dark p-3">
        <Container>
          <Navbar.Brand>
          <h4 className='text-warning'>
            <FontAwesomeIcon icon={faVideo} className='me-3' />
            Meadia Player
          </h4>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
