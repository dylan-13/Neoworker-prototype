import React, { useState, useEffect } from 'react';
import axios from 'axios'
// const FormData = require('form-data');
const ImportPicture = () => {
    const [bool, setBool] = useState(0)
    const [image, setImage] = useState([])
    const onChangeHandler = (e) => {
        setImage(e.target.files)
        console.log(e.target.files[0])
    }
    const onClickHandler = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('file', image[0])
        axios.post("http://localhost:3001/upload", data, { // receive two parameter endpoint url ,form data 
            onUploadProgress: ProgressEvent => {
                setBool({
                    loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
                })
            },
        })
            .then(res => { // then print response status
                console.log(res.statusText)
            })
    }
    return (
        <div>
            <form method="POST" encType="multipart/form-data" action="uploaddufichier" >
                <input type="file" name="file" onChange={(e) => onChangeHandler(e)} />
                <button type="submit" onClick={(e) => onClickHandler(e)} > envoyer </button>
            </form>
        </div>
    )
}
export default ImportPicture;
Collapse



