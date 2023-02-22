import Card from 'react-bootstrap/Card';
import "bootstrap-icons/font/bootstrap-icons.css";
import '.././Style/ContactUs.css';
import contactImg from '../images/contactUs.jpg';
import { useState, useRef,useEffect } from 'react';
import axios from 'axios';


function ContactUs() {
    const nameRef = useRef('')
    const phoneRef = useRef('')
    const emailRef = useRef('')
    const messageRef = useRef('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState("");
    const [msg, setMsg] = useState("");
    const [error1, setError1] = useState(null);
    const [error2, setError2] = useState(null);
    const [error3, setError3] = useState(null);
    const [error4, setError4] = useState(null);


    function isValidName(name) {
        return /^[A-Za-z]+$/.test(name);
    }
    const onInputChangeName = event => {
        if (!isValidName(event.target.value)) {
            setError1('Enter valid name');
        } else {
            setError1(null);
        }
        setName(event.target.value);
    };

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    const onInputChangeEmail = event => {
        if (!isValidEmail(event.target.value)) {
            setError2('Email is invalid');
        } else {
            setError2(null);
        }
        setEmail(event.target.value);
    };

    function isValidPhone(phone) {
        return /^[0-9\b]+$/.test(phone);
    }
    const handlePhoneNumberChange = event => {
        if (!isValidPhone(event.target.value) || event.target.value.length < 10) {
            setError3("Input valid phone number")
        } else {
            setError3(null);
        }

        setPhone(event.target.value);
    };

    const handleMessageChange = (event) => {
        if (event.target.value.length < 10) {
            setError4("Input atleast 10 letters")
        } else {
            setError4(null);
        }
        setMsg(event.target.value);
    };

   const handleSubmit = (event) => {
        event.preventDefault()
    //     const userName = nameRef.current.value;
    //     const userEmail = emailRef.current.value;
    //     const userPhone = phoneRef.current.value ;
    //     const userMessage = messageRef.current.value;

    //   const jsonObject ={
    //         "Name": "",
    //         "Email": "",
    //         "Phone": "",
    //         "Message": ""
    //     }
    //     jsonObject.Name = userName;
    //     jsonObject.Email = userEmail;
    //     jsonObject.Phone = userPhone;
    //     jsonObject.Message = userMessage;

    //     const jsonStr = JSON.stringify(jsonObject);
    //     document.write(jsonStr);

        
        if (nameRef.current.value === "" || phoneRef.current.value === "" || emailRef.current.value === "" || messageRef.current.value === "") {
            setError("Enter mandetory details")
            setSuccess("")
        }
        else {
            setSuccess("Thank you for getting in touch! We appreciate you contacting us")
            setError("")
        }
    }
    const userName = nameRef.current.value;
    const userEmail = emailRef.current.value;
    const userPhone = phoneRef.current.value ;
    const userMessage = messageRef.current.value;

  const jsonObject ={
        "Name": "",
        "Email": "",
        "Phone": "",
        "Message": ""
    }
    jsonObject.Name = userName;
    jsonObject.Email = userEmail;
    jsonObject.Phone = userPhone;
    jsonObject.Message = userMessage;
    const jsonStr = JSON.stringify(jsonObject);
   
          
    return (
        <div class="container">
            <div class="row justify-content-md-center card-container">
                <div class="col-md-auto">
                    <h1>Contact Us</h1>
                    <Card className="singleCard">
                        <Card.Body>
                            <Card.Subtitle><i class="bi bi-house"> 123 Park Avenue C,
                                AK Marg,
                                Delhi,India</i> <br></br>
                                <br></br>

                                <i class="bi bi-telephone">  (91) 9876543210,
                                    (91) 9876543210</i><br></br>
                                <br></br>

                                <i class="bi bi-envelope">  contact@topjobs.com</i>

                            </Card.Subtitle>

                        </Card.Body>
                    </Card>
                    <div className="get-in-touch-container">
                        <div className="form-content">
                            <h3>Get In Touch</h3>

                            <form onSubmit={handleSubmit}>

                                <div className="form-group">
                                    <label htmlFor="name"></label>
                                    <input
                                        type="text"
                                        id="fname"
                                        ref={nameRef}
                                        className="form-control"
                                        placeholder="Name"
                                        value={name}
                                        onChange={onInputChangeName}
                                        required />
                                    <span style={{ color: 'red' }}>{error1}</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name"></label>
                                    <input
                                        type="email"
                                        id="mail"
                                        ref={emailRef}
                                        className="form-control"
                                        placeholder="Email"
                                        value={email}
                                        onChange={onInputChangeEmail}
                                        required
                                    />
                                    <span style={{ color: 'red' }}>{error2}</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone"></label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        ref={phoneRef}
                                        className="form-control"
                                        placeholder="Phone"
                                        maxLength="10"
                                        value={phone}
                                        onChange={handlePhoneNumberChange}
                                        required
                                    />
                                    <span style={{ color: 'red' }}>{error3}</span>

                                </div>

                                <div className="form-group">
                                    <label htmlFor="message"></label>
                                    <textarea
                                        minLength="10"
                                        maxlength="150"
                                        id="msg"
                                        ref={messageRef}
                                        className="form-control"
                                        placeholder="Message"
                                        value={msg}
                                        onChange={handleMessageChange}
                                        required>

                                    </textarea>
                                    <span style={{ color: 'red' }}>{error4}</span>
                                </div>
                                <button type="submit" className="btn btn-primary contact-button">
                                    Submit
                                </button>
                                {success ? <div className="text-success">{success}</div> : null}
                                {error ? <div className="text-danger">{error}</div> : null}
                            </form>
                        </div>
                        <div className="form-image">
                            <img src={contactImg}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;