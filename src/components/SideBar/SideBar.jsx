import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, List } from 'reactstrap';
import './SideBar.css'
import { Link } from 'react-router-dom';

export const SideBar = () => {
    return (
        <div>
            <Container className="" fluid >
                <Row xs="4">
                    <Col className="">
                        <div className="sidebar p-1">
                            <List type='unstyled' className='Menu'>
                                <li className='mt-3'><Link className='NavMenu'><i className="bi bi-gear"></i> Dell</Link></li>
                                <li className='mt-3'><Link className='NavMenu'><i className="bi bi-hypnotize"></i> SAMSUNG</Link></li>
                                <li className='mt-3'><Link className='NavMenu'><i className="bi bi-gear-wide-connected"></i> Nokia</Link></li>
                                <li className='mt-3'><Link className='NavMenu'><i className="bi bi-file-bar-graph"></i> Motorola</Link></li>
                                <li className='mt-3'><Link className='NavMenu'><i className="bi bi-apple"></i> Apple</Link></li>
                            </List>
                        </div>
                    </Col>
                    {/* <Col className="border" xs="7">
                        Column
                    </Col> 
                    */}
                </Row>
            </Container>
        </div>
    )
}
