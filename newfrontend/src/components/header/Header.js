import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import axios from 'axios'
import { Navbar,Container,Nav } from 'react-bootstrap';
import logo from './travel.png';



function Header() {
    const auth = useSelector(state => state.auth)

    const {user, isLogged} = auth


    const handleLogout = async () => {
        try {
            await axios.get('/user/logout')
            localStorage.removeItem('firstLogin')
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
    }

    const userLink = () => {
        return <li className="drop-nav">
            <Link to="#" className="avatar">
            <img src={user.avatar} alt=""/> {user.name} <i className="fas fa-angle-down"></i>
            </Link>
            <ul className="dropdown">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
            </ul>
        </li>
    }

    const transForm = {
        transform: isLogged ? "translateY(-5px)" : 0
        
    }

    return (
        <header>
    <Navbar  collapseOnSelect expand="lg" style={{width:'100%'}}>
      <Container>
      <Navbar.Brand href="/"><img src={logo} alt="logo" width="60" height="28" /><Link style={{ textDecoration:'none',color:"white"}} to='/'>TRAVEL</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" style={{justifyContent:'space-between',flexWrap:'wrap',display:'flex'}}>
      <ul style={transForm}>
                <li><Link style={{ textDecoration:'none',color:"white"}} to="/About"><i className="fas fa-users"></i>About Us</Link></li>
                <li><Link style={{ textDecoration:'none',color:"white"}}  to="/"><i className="fas fa-ticket-alt"></i> Bookings</Link></li>
                {
                    isLogged
                    ? userLink()
                    :<li><Link style={{ textDecoration:'none',color:"white"}} to="/login"><i className="fas fa-user"></i> Sign in</Link></li>
                }
                
            </ul>
            </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
</header>
    )
}

export default Header