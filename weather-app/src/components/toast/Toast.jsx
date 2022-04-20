import { useState } from "react"
import { Toast } from "react-bootstrap"

import "./Toast.css"

import logo from "../../assets/images/guru.jpg"

const Message = () => {

    const [show, setShow] = useState(true);

    return(
    <>
        <Toast show={show} onClose={() => setShow(!show)}>
                <Toast.Header>
                    <img
                    src={logo}
                    width="20px"
                    alt=""
                    />
                    <strong className="me-auto">theGuru</strong>
                    <small>Just now</small>
                </Toast.Header>
                <Toast.Body>Welcome! Click the city icon above to display more detailed weather info</Toast.Body>
            </Toast>

    </>)
}

export default Message;