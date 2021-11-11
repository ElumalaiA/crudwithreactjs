import React, { useState } from "react";
//import Header from "components/Header";
//import AppConfig from "App.config";
//import ExternalInfo from "components/ExternalInfo";

const OTP = () => {
    
    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    //    validateotp= (OTP) => {
    //         if (otp!=1234) {
    //           this.setState({
    //             errorMessage: {...this.state.errorMessage, otp: 'enter correct otp'},
    //             isError: {...this.state.isError, firstName: true}
    //           });
    //           return false;
    //         }
    //         return true;
    //       }
     
    };

    return (
        <>
            
            <div className="row">
                <div className="col text-center">
                    
                    <p>Enter the OTP </p>

                    {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}

                    <p>OTP Entered - {otp.join("")}</p>
                    <p>
                        <button
                            className="btn btn-secondary mr-2"
                            onClick={e => setOtp([...otp.map(v => "")])}
                        >
                            Clear
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={e =>
                                alert("Entered OTP is " + otp.join(""))
                            }
                        >
                            Verify OTP
                        </button>
                        {/* <button
                            className="btn btn-primary"
                            onClick={this.validateotp
                            }
                        >
                            Verify OTP
                        </button> */}
                    </p>
                </div>
            </div>
        </>
    );
};

export default OTP