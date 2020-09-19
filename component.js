import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Axios from 'axios';

class Contact extends Component {
     dataColection(){
            const email= document.getElementById("email").value;
            const pasWord=document.getElementById("password").value;
            const massege=document.getElementById("massege").value;

           Axios.post('formData',{
               email:email,
               pasWord:pasWord,
               massege:massege
           }).then(response=>{
               if(response.status==200 && response.data==1){
                   alert('successfully submited')
               }else{
                   alert(' submite error')
               }
           }).catch(error=>{
               alert(error.massege)
           })
    }
 
    render() {
        return (
            <Fragment>
                <Container fluid={true}>
                    <Row className="comtact-top">
                        <Col className="animated  bounceInLeft delay-10s slower-5s">
                            <h2 className="About-Blog">Contact</h2>
                            <p className="blog-content">  Contact for Premium Business Services </p>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className="Contact-main">
                    <Row >
                        <Col className="contentRow animated  bounceInRight delay-10s slower-5s">
                           <h4>CONTACT ME</h4>
                            <h2 className="contenth2">Get In Touch</h2>
                            <h4><strong>SAUDI ARABIA</strong></h4><hr/>
                                    <p>Olaya,Riyadh,Saudi Arabia<br/>
                                   
                                    </p>
                            <h4><strong>BANGLADESH</strong></h4><hr/>
                            
                        </Col>
                        <Col className="contentRow animated  bounceInUp delay-10s slower-5s">
                            <h2 className="contenth2" >Request a free consultation</h2>
                           
                            <Form >
                                <Form.Group >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" id="email" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" id="password"/>
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Example textarea</Form.Label>
                                    <Form.Control as="textarea" rows="3" id="massege"/>
                                </Form.Group>
                                <Button onClick={this.dataColection}variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Contact;