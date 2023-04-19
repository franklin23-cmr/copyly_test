import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";
import { useTranslation } from "next-i18next";
import ReCAPTCHA from "react-google-recaptcha";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const [recaptchaValue, setRecaptchaValue] = useState();
  const [ disabled , isDisabled] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };
  const {t:translate} = useTranslation('Home')

  const handleSubmit = async (e) => {
  
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  function onChange(value) {
    setRecaptchaValue(value)
    
    const { name, email, number, subject, text } = contact;
    const formIsValid = name && email && number && subject && text && value;
  
    isDisabled(!formIsValid);
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={translate('Name')}
                className="form-control"
                value={contact.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={translate("Email")}
                className="form-control"
                value={contact.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="number"
                placeholder={translate('Number')}
                className="form-control"
                value={contact.number}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder={translate('subject')}
                className="form-control"
                value={contact.subject}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <textarea
                name="text"
                cols="30"
                rows="6"
                placeholder={translate("Write your message...")}
                className="form-control"
                value={contact.text}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <ReCAPTCHA
            sitekey={process.env.SITE_WEB_KEY}
            onChange={onChange}
          />,
          <div className="col-lg-12 col-sm-12">
            {disabled 
            ? <p> {translate("completed all the fields please ")}</p> 
            :<button type="submit" className="btn btn-primary">
              {translate("Send Message")}
            </button>
            }
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
