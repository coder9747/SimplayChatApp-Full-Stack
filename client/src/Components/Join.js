import React, { useContext } from 'react'
import Chatcontext from './Context/Chatcontext'
import { useNavigate } from 'react-router-dom';

const Join = () => {
    const { info, setInfo } = useContext(Chatcontext);
    const navigate = useNavigate();
    const handleClick = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        console.log(e);
        if (info.name && info.roomId) {
            navigate("/chat");
        }
        else {
            e.preventDefault();
        }
    }
    return (
        <div className='col-md-4 mx-auto mt-5'>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" name='name' onChange={handleClick} value={info.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Room Id</label>
                <input type="text" name='roomId' onChange={handleClick} value={info.roomId} className="form-control" id="exampleInputPassword1" />
            </div>

            <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
        </div>
    )
}

export default Join
