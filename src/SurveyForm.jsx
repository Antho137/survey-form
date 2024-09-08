import React, { useState } from "react";

const SurveyForm = () => { 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [status, setStatus] = useState("Select your status");
    const [connect, setConnect] = useState("One hour");
    const [service, setService] = useState("Select your preferable service");
    const [interest, setInterest] = useState([]);
    const [textarea, setTextarea] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [ageError, setAgeError] = useState("");

    const handleChange = (event) => {
        if (event.target.checked) {
            setInterest(prev => [...prev, event.target.value]);
        } else {
            setInterest(prev => prev.filter(item => item !== event.target.value));
        }
    };

    const handleUncheck = () => {
        if (interest) {
            setInterest(interest === false);
        } 
    };
  
    const reset = () => {
      document.location.reload();
    };

    const handleSubmit = event => {
        event.preventDefault();

        let nameValid = false;
        const regexName = /^[a-zA-Z]+$/;
        if (!regexName.test(name)) {
            setNameError("Please enter a valid username. Only letters")
        }
        else {
            setNameError("");
            nameValid = true;
        }

        let emailValid = false;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regexEmail.test(email)) {
            setEmailError("Please enter a valid email.")
        }
        else {
            setEmailError("");
            emailValid = true;
        }

        let ageValid = false;
        const regexAge = /^[0-9]{2}$/;
        if (!regexAge.test(age)) {
            setAgeError("Please enter a valid age")
        }
        else {
            setAgeError("");
            ageValid = true;
        }

        if (nameValid && emailValid && ageValid && status && connect && connect && service && interest && textarea) {
            alert('Username: ' + name + '\nEmail: ' + email + '\nAge: ' + age  + '\nMarital status: ' + status + '\nConnected period: ' + connect + '\nService used: ' + service + '\nWeb interest: ' + interest.join(', ') + '\nComments: ' + textarea + '\nThank you for your support.');
            setName("");
            setEmail("");
            setAge("");
            setStatus("");
            setConnect("");
            setService("");
            handleUncheck();
            setTextarea("");
            reset();
        }
    };

    return (
        <div className="survey">
            <form className="survey-form" onSubmit={handleSubmit} autoComplete="off">
                <div className="general-info">	
                    <div className="personal-info">
                        <div className="input-container">
                            <label htmlFor="name">Username</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your username" maxLength="20" autoFocus
                                onChange={event => setName(event.target.value)}
                                value={name}
                            />
                            <p className="error">{nameError && 
                            <span>{nameError}</span>}</p>
                        </div>
                        <div className="input-container">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email address" 
                                onChange={event => setEmail(event.target.value)}
                                value={email}
                            />
                            <p className="error">{emailError && 
                            <span>{emailError}</span>}</p>
                        </div>
                        <div className="input-container">
                            <label htmlFor="age">Age</label>
                            <input 
                                type="number"
                                id="age"
                                name="age"
                                placeholder="Enter your age" min="14" max="86"
                                onChange={event => setAge(event.target.value)}
                                value={age}
                            />
                            <p className="error">{ageError && 
                            <span className="error">{ageError}</span>}</p>
                        </div>
                        <div>
                            <h3>What is your marital status?</h3>
                            <select value={status} onChange={event => setStatus(event.target.value)}>
                                <option value="status">Select your status</option>
                                <option value="Married">Married</option>		    
                                <option value="Single">Single</option>
                                <option value="Divorced">Divorced</option>
                                <option value="Widowed">Widowed</option>
                            </select>
                        </div>
                    </div>			
                    <div className="net-action">
                        <div className="connected">
                            <h3>How long do you stay connected to the Internet?</h3>
                            <div>
                                <input 
                                    type="radio" 
                                    name="connect" 
                                    id="oneHour" 
                                    value="One Hour"
                                    checked={connect === 'One Hour'}
                                    onChange={event => setConnect(event.target.value)} 
                                /> 
                                <label htmlFor="oneHour">One hour</label>
                            </div>
                            <div>
                                <input 
                                    type="radio" 
                                    name="connect" 
                                    id="twoHours" 
                                    value="Two Hours"
                                    checked={connect === 'Two Hours'}
                                    onChange={event => setConnect(event.target.value)} 
                                /> 
                                <label htmlFor="twoHours">Two hours</label>
                            </div>
                            <div>
                                <input 
                                    type="radio" 
                                    name="connect" 
                                    id="threeHours" 
                                    value="Three Hours"
                                    checked={connect === 'Three Hours'}
                                    onChange={event => setConnect(event.target.value)} 
                                /> 
                                <label htmlFor="threeHours">Three hours</label>
                            </div>
                            <div>
                                <input 
                                    type="radio" 
                                    name="connect" 
                                    id="moreHours" 
                                    value="More Hours"
                                    checked={connect === 'More Hours'}
                                    onChange={event => setConnect(event.target.value)} 
                                /> 
                                <label htmlFor="moreHours">More than three hours</label>
                            </div>
                        </div>
                        <div className="inter-service">
                            <h3>Which Internet service are you most using?</h3>
                            <select value={service} onChange={event => setService(event.target.value)}>
                                <option value="service">Select your preferable service</option>
                                <option value="Web">Web</option>    
                                <option value="Messaging">Messaging</option>
                                <option value="Video-Communications">Video Communications</option>
                                <option value="Chat Rooms">Chat Rooms </option>
                                <option value="Discussion Forums"> Discussion Forums</option>
                                <option value="File Transfer">File Transfer</option>
                            </select>
                        </div>
                    </div>
                </div>			
				<div className="web-interest">
                    <h3>What types of websites interest you most while connected to the Net? <small>(Check all that apply)</small></h3>
                    <div className="web-type">
                        <div className="website">
                            <div>
                                <input 
                                    type="checkbox"  
                                    name="interest" 
                                    id="news" 
                                    value='News'
                                    onChange={handleChange}
                                />
                                <label htmlFor="news">News</label>
                            </div>                  
                            <div>
                                <input 
                                    type="checkbox"
                                    name="interest"
                                    id="careers-employment" 
                                    value='Careers-Employment'
                                    onChange={handleChange}
                                />
                                <label htmlFor="careers-employment">Careers and Employment</label>
                            </div>                   
                            <div>
                                <input 
                                    type="checkbox" 
                                    name="interest" 
                                    id="sport" 
                                    value='Sport'
                                    onChange={handleChange}
                                />
                                <label htmlFor="sport">Sport</label>
                            </div>                   
                            <div>
                                <input 
                                    type="checkbox" 
                                    name="interest" 
                                    id="banking-finance" 
                                    value='Banking-Finance'
                                    onChange={handleChange}
                                />
                                <label htmlFor="banking-finance">Banking and Finance</label>
                            </div>                   
                            <div>
                                <input 
                                    type="checkbox" 
                                    name="interest" 
                                    id="portals" 
                                    value='Portals'
                                    onChange={handleChange}
                                />
                                <label htmlFor="portals">Portals</label>
                            </div>                   
                            <div>
                                <input 
                                    type="checkbox" 
                                    name="interest" 
                                    id="travel-tourism" 
                                    value='Travel-Tourism'
                                    onChange={handleChange}
                                />
                                <label htmlFor="travel-tourism">Travel and Tourism</label>
                            </div>                    
                            <div>
                                <input 
                                    type="checkbox"                                    
                                    name="interest" 
                                    id="business" 
                                    value='Business'
                                    onChange={handleChange}
                                />
                                <label htmlFor="business">Business</label>
                            </div>                   
                            <div>
                                <input 
                                    type="checkbox" 
                                    name="interest" 
                                    id="health-fitness" 
                                    value='Health-Fitness'
                                    onChange={handleChange}
                                />
                                <label htmlFor="health-fitness">Health and Fitness</label>
                            </div>                     
                            <div>
                                <input 
                                    type="checkbox" 
                                    name="interest" 
                                    id="educa" 
                                    value='Educational'
                                    onChange={handleChange}
                                />
                                <label htmlFor="educa">Educational</label>
                            </div>                     
                            <div>
                                <input 
                                    type="checkbox" 
                                    name="interest" 
                                    id="e-commerce" 
                                    value='E-commerce'
                                    onChange={handleChange}
                                />
                                <label htmlFor="e-commerce">E-commerce</label>
                            </div>						
                            <div>
                                <input 
                                    type="checkbox" 
                                    name="interest" 
                                    id="info" 
                                    value='Informational'
                                    onChange={handleChange}
                                />
                                <label htmlFor="info">Informational</label>
                            </div>                                
                            <div>
                                <input 
                                    type="checkbox" 
                                    name="interest" 
                                    id="entment" 
                                    value='Entertainment'
                                    onChange={handleChange}
                                />
                                <label htmlFor="entment">Entertainment</label>
                            </div> 
                        </div>
                    </div>
                    <div className="comment">		
				        <h3>Please, any comments about your Internet experience?</h3>
                        <textarea value={textarea} onChange={event => setTextarea(event.target.value)} rows="5" cols="40">Enter your comment here...</textarea>
                    </div>
                </div>
                <div className="btn-container">
                    <button className="button" type="submit" id="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default SurveyForm;