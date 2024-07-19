import React from 'react'
import { Whatsapp, Facebook, Envelope, Instagram } from 'react-bootstrap-icons'
import { Row, Col } from 'antd'

function AboutUs() {
    return (
        <div className='mt-5 '>
            <div className=' px-3'>
                <Row gutter={[16, 16]}>
                    <Col md={{ span: 8, offset: 8 }}>
                        <h1 className='textwhite mt-3 p-2 px-3'
                            style={{ textAlign: "center" }}
                        >
                            Resume-Builder
                        </h1>
                    </Col>
                </Row>
            </div>
            <div >
                <Row gutter={[16, 16]}>
                    <Col md={{ span: 8, offset: 8 }}>
                        <div className=' mt-2  mb-5 p-2 px-3'
                            style={{
                                fontSize: '17px',
                                textAlign: 'justify',
                                textJustify: 'inter-word',
                            }}
                        >
                            <i className='textwhite'>
                                A vibrant selection of eye-catching and professional resume
                                and cover letter premium templates from Office help you
                                stand out from other applicants and leave a lasting impression.
                                We have some of the best resume templates for job seekers in almost every field.
                                Our templates are professionally designed, employer-ready,
                                ATS-friendly and easy to customize. Choose from dozens of free resume templates,
                                then use our Resume Builder to create a professional resume in minutes.
                            </i>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='mt-5 px-3 '>
                <Row gutter={[16, 16]}>
                    <Col md={{ span: 8, offset: 8 }}>
                        <h3 className='px-4 textwhite' style={{ wordSpacing: "5px", letterSpacing: "1px" }}>
                            Share with your friends.
                        </h3>
                        <div style={{ display: 'flex' }}>
                            <div className='ms-5  p-2'>
                                <Whatsapp style={{ fontSize: "25px" }} className='icon'/>
                            </div>
                            <div className='p-2 ms-4' >
                                <Facebook style={{ fontSize: "25px" }} className='icon'/>
                            </div>
                            <div className='p-2 ms-4' >
                                <Envelope style={{ fontSize: "25px" }} className='icon'/>
                            </div>
                            <div className='p-2 ms-4' >
                                <Instagram style={{ fontSize: "25px"}} className='icon'/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AboutUs
