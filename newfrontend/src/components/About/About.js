import React from 'react'
import about from './about.jpg'
import { Card } from 'react-bootstrap';

export const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <h1>ABOUT US</h1>
                    <p style={{fontFamily:'Arial, Helvetica, sans-serif'}}>
                        Radiant Info Systems Limited ("Radiant") is a Bangalore based software products & services company that was formed in 1997 which caters to e-Governance and Transportation Logistics verticals.

                        From the first Online Reservation System in 2006, Radiant became the major market share holder and leader in the Transportation Logistics sector in India. Now, Radiant is a BOOT/BOO order holder with clients like KSRTC, TNSTC, GSRTC, etc.

                        Radiant is awarded the Busindia Portal Project by Government of India. Radiant’s transportations logistics products are innovative and finely tuned to suit the Indian industry needs and can be customized globally.

                        From the development of development of the National ID (UID) to various eGovernance solutions supported by smart card, Radiant has built the knowledgebase and talent.

                        Radiant’s senior management team includes highly educated and experienced IT Software Professionals. The technical staff comprises of experienced Project Managers, Business Analysts, Software Architects, Software Engineers, Software Programmers & Consultants who are engaged in System Integration, Data Center & Disaster Recovery Center Setup, Application software development, software maintenance and support projects for verticals like Transportation, Government, Public & Private Sectors.

                        Radiant has sustained an impressive growth rate in both capability and profitability.
                    </p>

                </div>
                <div className="col-sm-6">
                    <img src={about} alt="about" className="imag-responsive" style={{ width: '100%', height: '110%' }} />
                </div>
            </div>
            <h3 style={{textAlign:'center',fontFamily:'cursive'}}>Radiant info Advantage</h3>
            <div className="container" style={{textAlign:'center'}}>
            <div className="row">
                <Card border="dark" style={{ width: '20rem', margin: '50px' }}>
                    <Card.Body>
                        <Card.Title>Easy to Use</Card.Title>
                        <hr/>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="dark" style={{ width: '20rem', margin: '50px' }}>
                    <Card.Body>
                        <Card.Title>Streamlined Operations</Card.Title>
                        <hr/>
                        <Card.Text>
                            Reduce your workload and expenses with seamless and efficient process management system. No more manual route mapping with Route Manager. Create New Routes and Manage Schedules easily.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="dark" style={{ width: '20rem', margin: '50px' }}>
                    <Card.Body>
                        <Card.Title>Streamlined Operations</Card.Title>
                        <hr/>
                        <Card.Text>
                            Built-in and customizable trigger sensitive alerts. System generated alerts sent to the customers and staff on ticket bookings, sales collections, booking status, booking hold expiry.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="row">
                <Card border="dark" style={{ width: '20rem', margin: '50px' }}>
                    <Card.Body>
                        <Card.Title>Multi Party Coordination</Card.Title>
                        <hr/>
                        <Card.Text>
                            Reduce expenses with paperless management. Send communication internally and to customers through emails and SMSes. Take a complete backup of all your reservation data, reports and analytics.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="dark" style={{ width: '20rem', margin: '50px', }}>
                    <Card.Body>
                        <Card.Title>No Incremental Cost</Card.Title>
                        <hr/>
                        <Card.Text>
                            We are extremely sensitive to your cost requirements. Contact Us to know about our pricing plans.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="dark" style={{ width: '20rem', margin: '50px' }}>
                    <Card.Body>
                        <Card.Title>Busindia.com</Card.Title>
                        <hr/>
                        <Card.Text>
                            Busindia.com is a National Ticketing Portal integrating various State Bus Transport Undertakings(STUs). CIRT has partnered with Radiant Info Systems Ltd, a leading technology provider in the transport domain to develop the online integrated portal www.busindia.com.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            </div>
        </div>
    )
}
