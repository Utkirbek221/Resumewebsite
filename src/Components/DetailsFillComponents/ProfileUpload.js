import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { updateState} from '../../ReduxManager/dataStoreSlice'
import imgdef from "../../IMG/avatardf.webp"
function App() {
    const imageFile= useSelector(state=> state.dataStore.imageFile)
    const dispatch = useDispatch();
    
    function handleChange(e) {
        //this function is used to update 'imageFile' in dataStoreSlice with the user given input ,
        //which will be reflected in personalInfo as the profile image.
        let file = e.target.files[0]
        const  fileType = file['type'];
        const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
        if (validImageTypes.includes(fileType)) {
            let temp=URL.createObjectURL(file)

            dispatch(updateState({
                key:'imageFile',
                value:temp,
            }))
        }
        else{
            alert('Uploaded file type should be jpg/png!')
        }
    }
    return (
        <div className="container img_css">
            <div className="row">
                <img style={{height:'150px', width:'130px', background:'grey',padding:0, objectFit:'cover'}} className="rounded " src={imageFile ? imageFile : imgdef}  alt='profile'/>
            </div>
            <div className="row" style={{marginTop:'10px'}}>
                <input type="file" onChange={handleChange} style={{ display:'flex'}}/>
            </div>
        </div>
    );
} 
export default App;