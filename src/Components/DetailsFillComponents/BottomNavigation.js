import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateState } from '../../ReduxManager/dataStoreSlice'

function BottomNavigation(props) {
  const dispatch = useDispatch();

  return (
    <div className='mt-2 px-5'>
      <hr />
      <div style={{ display:'flex'}}>
        <div className="col-sm-9 mt-4 d-flex ">
          <Link to={props.prevPagePath}>
            <button className=' btn2 btn-primary  p-1 px-2'
              onClick={() => {
                dispatch(updateState({
                  key: 'errorMessages',
                  value: {}
                }))
              }}
            >
              Previous
            </button>
          </Link>
        </div>
        <div className="col-sm-3 mt-4">
          <Link to={props.isFormValid ? props.nextPagePath : '#'}>
            <button className='btn2 btn-primary p-1 px-2'
              onClick={() => {
                if (!props.isFormValid) {
                  alert('Please fill all the necessary details correctly!')
                  dispatch(updateState({
                    key: 'showErrorMessages',
                    value: true
                  }))
                }
                else if (props.isFormValid) {
                  dispatch(updateState({
                    key: 'showErrorMessages',
                    value: false
                  }))
                }
              }}
            >
              {window.location.pathname === "/detailsfillingpage/keyskills" 
                ? 'Preview'
                : 'Next'}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BottomNavigation
