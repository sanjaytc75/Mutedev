import React from 'react'
import './Main.css';
import { Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch} from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { MdDateRange } from "react-icons/md";


export default function Main() {
    
   
 
    return (
        <div className="container">
        <div className="jumbotron">
        

            <h3>Book your Tickets Now!</h3>
            <Form className="Form">
                <Row className="mb-4">
                    <Form.Group as={Col} controlId="formGridLeavingFrom" >
                    <Form.Label> <GrMapLocation/>Leaving From</Form.Label>
                        
                    <Form.Select >
                     <option>select city</option>
                        <option value="1">BANGALORE</option>
                        <option value="2">BANGA</option>
                        <option value="2">ASSAM</option>
                        <option value="3">HYDRABAD</option>
                        <option value="4">JAIPUR</option>
                        <option value="5">KOCHI</option>
                        <option value="6">DELHI</option>
                        <option value="7">MUMBAI</option>
                        <option value="8">CHENNAI</option>
                    </Form.Select>

                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridGoingTo">
                    <Form.Label> <GrMapLocation/>Going To </Form.Label>
                    <Form.Select >
                     <option>select city</option>
                        <option value="1">BANGALORE</option>
                        <option value="2">BANGA</option>
                        <option value="2">ASSAM</option>
                        <option value="3">HYDRABAD</option>
                        <option value="4">JAIPUR</option>
                        <option value="5">KOCHI</option>
                        <option value="6">DELHI</option>
                        <option value="7">MUMBAI</option>
                        <option value="8">CHENNAI</option>
                    </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridDateofDepature">
                        <Form.Label> <MdDateRange/> Date of Depature</Form.Label>
                        <Form.Control type="date" placeholder="Date of Depature" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridDateofReturn">
                        <Form.Label> <MdDateRange/> Date of Return</Form.Label>
                        <Form.Control type="date" placeholder="Date of Return" />
                    </Form.Group>
                    <m></m>
                    <br/>
                    <Form.Group as={Col} controlId="formGridSingleLady" style={{color:'black'}}>
                        <Form.Check className="checkbox"type="checkbox" label="Single Lady" />
                    </Form.Group>
                    
                    <Form.Group as={Col} controlId="formGridSingleLady">
                        <button type="button" className="btn btn-primary btn-lg">
                            search for bus <FaSearch/>
                        </button>
                    </Form.Group>
                </Row>
            </Form>


        </div>
    </div> 
 

    )
    
}
