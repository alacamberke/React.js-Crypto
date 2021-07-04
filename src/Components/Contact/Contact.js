import React, { useState } from 'react';
import { useEffect } from 'react';

const Contact = (props) => {

    const [maksletter, setMaksletter] = useState(300);
    const [maksLetterSymbol, setMaksLetterSymbol] = useState(maksletter);
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");

    //Set alert messages according to proccesing.
    const [successfull, setSuccessfull] = useState();
    const [error, setError] = useState();

    //Destructure
    const { SendEmail, check } = props;


    useEffect(() => {
        const number = maksletter - message.length;
        setMaksLetterSymbol(number);
    }, [message.length]);


    const sendEmail = (event) => {
        const result = SendEmail(event, message, email);
        if (result) {
            setSuccessfull(true);
            setTimeout(function () { setSuccessfull(false); }, 3000);
        } else {
            setError(true);
            setTimeout(function () { setError(false); }, 3000);
        }
    }

    const messageChangeHandler = (e) => {
        if (check(message, e, maksletter)) {
            //Do nothing
        } else {
            setMessage(e.target.value);
        }
    }

    return (
        <div>

            {
                successfull ?
                    <div className="alert alert-success">
                        <span>
                            <strong>SUCCESSFULL</strong>
                        </span>
                    </div> : null
            }
            {
                error ?
                    <div className="alert alert-danger">
                        <span>
                            <strong>ERROR!</strong>
                        </span>
                    </div> : null
            }
            
            <form onSubmit={(e) => sendEmail(e)}>
                <div class="form-group">
                    <label>Your email address</label>
                    <input
                        type="email"
                        class="form-control "
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </div>

                <div class="form-group">
                    <label>Message</label>
                    <textarea
                        class="form-control"
                        rows="9"
                        value={message}
                        onChange={(e) => messageChangeHandler(e)} >
                    </textarea>
                </div>

                <span>
                    <strong>Maks Letters: </strong> {maksLetterSymbol} <br />
                </span>

                <button className="myButton">Send</button>
            </form>
        </div>
    )

}

export default Contact