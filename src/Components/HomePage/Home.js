import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { templateImagesPaths } from '../Data/Data'//templateImagesPaths is imported from Data.js which is used to display static images of various templates on the Home page.
import { useDispatch } from 'react-redux'
import { updateState } from '../../ReduxManager/dataStoreSlice'
const shortid = require('shortid')

//this Home component is rendering various resume templates on to the screen and the user can select either of them and proceed further. 
function Home() {
    const [isMouseOver, setIsMouseOver] = useState('MouseIsNotOver')//this state is used to display 'useTemplate' button when user hovers over the template

    const dispatch = useDispatch();
    return (
        <div style={{ minWidth: '300px' }} className=''>
            <div className=' d-flex justify-content-center mt-5' >
                <h3 className='p-3 rounded ' style={{ backgroundColor: '#405D72', color: '#F7E7DC' }}>Select a Template to get started!</h3>
            </div>
            <div className='container' style={{ color: '#1f4287', }}>
                <div className='row'>
                    {templateImagesPaths.map((currentTemplate) => {
                        return (
                            <div className='col col-lg-3 col-md-6  col-12 mt-5' key={shortid.generate()}>
                                <div
                                    style={{ position: 'relative' }}
                                    onMouseOver={() => {
                                        setIsMouseOver(currentTemplate.name)
                                    }}
                                    onMouseOut={() => {
                                        setIsMouseOver('MouseIsNotOver')
                                    }}
                                >
                                    <div className='w-100 d-flex justify-content-center' style={{ color: '#F7E7DC', marginBottom: '20px' }}>
                                        <h3>{currentTemplate.name}</h3>
                                    </div>
                                    <img style={{ borderRadius: '13px' }} className="box_ w-100 image-aspect-ratio" src={currentTemplate.imageSource} alt='template' />
                                    {isMouseOver === currentTemplate.name     
                                        ? <Link to="/detailsfillingpage/personalinfo">
                                            <button className='btn btn-primary'
                                                style={{ position: 'absolute', top: '50%', right: '30%' }}
                                                onClick={() => {
                                                    dispatch(updateState({  
                                                        key: 'selectedTemplate',
                                                        value: currentTemplate.name
                                                    }))
                                                }}
                                            >
                                                Use Template
                                            </button>
                                        </Link>
                                        : null
                                    }
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home
