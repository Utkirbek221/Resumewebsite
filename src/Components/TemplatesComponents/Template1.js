import React from 'react'
import { useSelector } from 'react-redux'
import imgdef from "../../IMG/imgava.jpeg"

function Template1() {
    const shortid = require('shortid')
    const dataStore = useSelector(state => state.dataStore)
    const imageFile = useSelector(state => state.dataStore.imageFile)
    return (
        <>
            {/* <div className="mb-5 p-4 bd" style={{ backgroundColor: "#D6BD98", minHeight: '1200px' }}>
                <div>
                    <div className="row  m-0 d-flex align-items-center" style={{ height: "200px" }}>
                        <div className="col-2 text-center media" >
                            <img className="rounded align-self-center mx-auto " src={dataStore.imageFile} alt='profile-pic'
                                style={{ maxHeight: '180px', minHeight: "120px", width: '100px', background: 'grey', padding: 0 }} />

                        </div>
                        <div className="col-6    text-left font-weight-bold " style={{ fontFamily: "Serif" }}>
                            <div className=' d-flex justify-content-center' style={{ color: "#00adb5", fontSize: "55px" }}>{dataStore.personalInfo.firstName + " " + dataStore.personalInfo.lastName}</div>
                            <h5 className=' d-flex justify-content-center'>{dataStore.workEx[dataStore.workEx.length - 1].title}</h5>
                        </div>
                        <div className="col-4  ">
                            <div className=' p-3' style={{ fontSize: "18px", float: "left", display: "inline-block" }}>
                                <div >{dataStore.personalInfo.Email}</div>
                                <div>{dataStore.personalInfo.Mobile}</div>
                                <div>{dataStore.personalInfo.Address1 + ", " + dataStore.personalInfo.Address2
                                    + ",  " + dataStore.personalInfo.City + ", " + dataStore.personalInfo.State + ", " + dataStore.personalInfo.Pin}
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />
                <div className="text-justify mx-4">{dataStore.personalInfo.Objective}</div>
                <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />

                <div className="container" style={{ fontFamily: "Serif", }}>
                    <div className="row">
                        <div className="col-3 text-left  " style={{ color: "#00adb5" }}> <h4> Professional Experience</h4></div>
                        <div className="col-9  text-left " style={{ fontSize: "18px" }}>
                            {dataStore.workEx.map((item) => {
                                return (
                                    <div key={shortid.generate()}>
                                        <div className='mt-2'><b>{item.title}</b></div>
                                        <div className='mt-2'>
                                            Worked in {item.orgName} from {item.startYear} to {item.endYear}.
                                        </div>
                                        <div>{item.jobDescription}</div>
                                    </div>
                                )
                            })
                            }

                        </div>
                        <div className="w-100 mt-4"> </div>
                        <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />
                        <div className="col-3 text-left" style={{ color: "#00adb5" }}><h4>Education</h4></div>
                        <div className="col-9 text-left" >
                            <div style={{ fontSize: "18px" }}>
                                {dataStore.education.map((item) => {
                                    return (
                                        <div key={shortid.generate()}>
                                            <b> {item.Degree}</b>
                                            <div> I have persued my {item.Type} in {item.Degree} from {item.University}</div>
                                            <p>Duration: {" " + item.Start + " - " + item.End}</p>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                        <div className="w-100 mt-4"> </div>
                        <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />
                        <div className="col-3 text-left " >
                            <h4 style={{ color: "#00adb5" }}>Key Skills</h4>
                        </div>
                        <div className="col-9 text-left" style={{ fontSize: "18px" }}>

                            {dataStore.skills.map((skill) => {
                                return (
                                    <div key={shortid.generate()}>
                                        <li style={{ listStyle: "none" }}>{skill.skillName}</li>
                                    </div>
                                )

                            })}
                        </div>

                    </div>
                </div>
            </div> */}
            <div className="mb-5  bd" style={{ backgroundColor: "#D6BD98", minHeight: '1200px' }}>
                <div className='temp1_name'>
                    <div>
                        <div className='temp1_imgdiv'>
                            <div className='img'>
                                <img src={imageFile ? imageFile : imgdef} alt='profile' />
                            </div>
                        </div>
                    </div>
                    <div className="temp1_namediv">
                        <h1>MATTHEW <br />
                            SMITH</h1>
                        <div style={{ border: '1px solid #D6BD98', marginBottom: '8px', marginTop: '17px', minWidth: '500px' }} />
                        <h3>Creative Designer</h3>
                    </div>
                </div>
                <div className='bio'>
                    <div className='bio_name'>
                        <div className='bio_name_text'>
                            <h1>Matthewsmith.site.com</h1>
                            <h1>1676 Kemberly Drive, Chicago, IL</h1>
                            <h1>(323) 302-9912</h1>
                        </div>
                        <div style={{ border: '1px solid #D6BD98', marginBottom: '8px', marginTop: '17px', minWidth: '340px' }} />
                        <div className='bio_name_skil'>
                            <h1>SKILLS</h1>
                            <ul>
                                <li>Web Design</li>
                                <li>Design Thinking</li>
                                <li>Wireframe Creation</li>
                                <li>Front End Coding</li>
                                <li>Problem-Solving</li>
                                <li>Computer Literacy</li>
                                <li>Project Management Tools</li>
                                <li>Strong Communication</li>
                            </ul>
                        </div>
                        <div className='bio_name_lang'>
                            <h1>LANGUAGES</h1>
                            <div className='bio_name_texts'>
                                <h2>English</h2>
                                <p>Native</p>
                            </div>
                            <div className='bio_name_texts'>
                                <h2>Portuguese</h2>
                                <p>Advanced</p>
                            </div>
                            <div className='bio_name_texts'>
                                <h2>French</h2>
                                <p>Advanced</p>
                            </div>
                        </div>
                    </div>
                    <div className="bio_info">
                        <div className='bio_info_prof'>
                            <h1>PROFILE</h1>
                            <p>I am a qualified and professional graphic designer with five years of experience in database administration and website design. Strong creative and analytical skills, team player with an eye for detail.</p>
                        </div>
                        <div className='bio_info_work'>
                            <h1>WORK EXPERIENCE</h1>
                            <div>
                                <h3>Applications Developer</h3>
                                <p>Sunrise Company - 20XX - Present</p>
                                <ul>
                                    <li>Database administration</li>
                                    <li>Built the logic for a streamlined ad-serving platform
                                    </li>
                                    <li>Website and UI Design</li>
                                </ul>
                            </div>
                            <div>
                                <h3>Web Content Manager</h3>
                                <p>Sunrise Company - 20XX - 20XX</p>
                                <ul>
                                    <li>Database administration</li>
                                    <li>Built the logic for a streamlined ad-serving platform</li>
                                    <li>Website and UI Design</li>
                                </ul>
                            </div>
                            <div>
                                <h3>Analysis Content</h3>
                                <p>Sunrise Company - 20XX - 20XX</p>
                                <ul>
                                    <li>Database administration</li>
                                    <li>Built the logic for a streamlined ad-serving platform</li>
                                    <li>Website and UI Design</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h1>EDUCATION</h1>
                            <div>
                                <h3>Secondary School</h3>
                                <p>Really Great High School</p>
                                <p>20XX - 20XX</p>
                            </div>
                            <div>
                                <h3>Bachelor of Technology</h3>
                                <p>Bronze University</p>
                                <p>20XX - 20XX</p>
                            </div>
                        </div>
                        <div style={{ border: '1px solid #1a3736', marginBottom: '8px', marginTop: '17px', minWidth: '500px' }} />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Template1
