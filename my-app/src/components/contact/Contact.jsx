import axios from "axios";
import React, { useState } from "react";
import { FaRegAddressBook , FaRegEnvelope, FaRegUser, FaRegMap  } from "react-icons/fa";
import './contact.css';
import shapeOne from '../../assets/shape-1.png';

const Contact =()=>{
    const [form,setForm]=useState({
    name:'',
    email:'',
    subject:'',
    Message:''});

    const handleChange= (e) =>{
        const name=e.target.name;
        const value=e.target.value;
        setForm({...form,[name]:value});
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios
            .post(
                'https://sheet.best/api/sheets/7f6ff8dc-6207-4160-9fc4-e6940a88ace3',
                form
            ).then((response) => {
            console.log(response); 
            setForm({name:'', email:'', subject:'', message:''});
            });
    };
    return(
        <section className="contact section contact">
            <h2 className="section__title text-cs">Contact Me</h2>
            <p className="section__subtitle">
                Let's <span>Talk About ideas</span>
            </p>
            <div className="contact__container container grid">
                <div className="contact__content">
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegMap/>
                        </span>
                        <h3 className="contact__card-title">Address</h3>
                        <p className="contact__card-data">Greater Noida,Uttar Pradesh (India)</p>
                        
                    </div>

                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegUser/>
                        </span>
                        <h3 className="contact__card-title">Freelance</h3>
                        <p className="contact__card-data">Availabel Right Now</p>
                        
                    </div>

                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegEnvelope/>
                        </span>
                        <h3 className="contact__card-title">Email</h3>
                        <p className="contact__card-data">Akg568794@gmail.com</p>
                        
                    </div>

                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegAddressBook/>
                        </span>
                        <h3 className="contact__card-title">Phone</h3>
                        <p className="contact__card-data">+91-8799XXXXXX</p>
                        
                    </div>
                </div>
                <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-group grid">
                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">Your full Name<b>*</b></label>
                        <input type="text"
                        name="name"
                        onChange={handleChange}
                        value={form.name}
                        className="contact__form-input" />
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">Your Email Address<b>*</b></label>
                        <input type="email"
                        name="email"
                        onChange={handleChange}
                        value={form.email}
                        className="contact__form-input" />
                    </div>
                </div>

                <div className="contact__form-div">
                    <label className="contact__form-tag text-cs">Your Subject<b>*</b></label>
                    <input type="text"
                    name="subject"
                    onChange={handleChange}
                    value={form.subject}
                    className="contact__form-input" />
                </div>

                <div className="contact__form-div contact__form-area">
                    <label className="contact__form-tag text-cs">Your Message<b>*</b></label>
                    <textarea
                    name="message"
                    onChange={handleChange}
                    value={form.message}
                    className="contact__form-input"></textarea>
                </div>
                <div className="contact__submit">
                    <p>* Accept the terms and conditions.</p>
                    <button type="submit" className="btn text-cs">Send Message</button>
                </div>
            </form>
            </div>
            
            <div className="section__deco deco__right">
              <img src={shapeOne}  className="shape"/>
            </div>


        </section>
    )
}
export default Contact;