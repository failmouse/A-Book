import React , {useState} from 'react';
import './contact-us.scss';
import axios from 'axios'
import { useForm } from "react-hook-form";
import SbmBtnIco from './assets/images/sbmArrow.svg';
import { ErrorMessage } from "@hookform/error-message";
import { useSelector } from 'react-redux';



const ContactUs = () => {
    const selectedLang =  useSelector((state) => state.language.selected);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('We will contact you shortly');
    const [status, setStatus] = useState(false);
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        criteriaMode: "all",
        defaultValues: {
            fullName:"",
            email: "",
            type: "",
            message: ""
        }});

    const onSubmit = (data, e) => {
        e.target.reset();
        axios.post(``, data )
          .then(response => {
            setMessage("Your Message has been sent successfully!");
            setStatus(true);
          })
          .catch(err => {
            setError(err);
          });
    }

    const errColor = ["rgba(236, 63, 63, 0.2)"];
    const langTokens = useSelector((state) => state.language.data);

    return (
        <section className="contactForm">
            <div className="contactForm__main">
                <h2 className="contactForm__formTitle indent__title_auxilary">
                    {langTokens.CONTACT_FORM_TITTLE}
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='formRow'>
                        <div className='formColumn'>
                            <i className='fa fa-name'/>
                            <input type="text" style={{backgroundColor: errors.fullName && errColor}} placeholder="Full name" {...register("fullName", {required: langTokens.CONTACT_ERROR_REQUIRED , pattern:{value: /^[A-Za-z А-Яа-я]+$/i, message: langTokens.CONTACT_ERROR_PATTERN}, minLength:{value:3, message: langTokens.CONTACT_ERROR_MIN_LENGTH}, maxLength: {value: 50, message: langTokens.CONTACT_ERROR_MAX_LENGTH},   })}/>
                                <div>
                                    <ErrorMessage
                                            errors={errors}
                                            name="fullName"
                                            render={({ messages }) => {
                                            return messages
                                                ? Object.entries(messages).map(([type, message]) => (
                                                    <><span key={type}>{message}</span><br/></>
                                                ))
                                                : null;
                                            }}
                                        />
                                </div>
                                {/* {errors.fullName?.type === 'required' &&  <span>{langTokens.CONTACT_ERROR_REQUIRED}</span>}
                                {errors.fullName?.type === 'pattern' &&  <span>{langTokens.CONTACT_ERROR_PATTERN}</span>}
                                {errors.fullName?.type === 'minLength' &&  <span>{langTokens.CONTACT_ERROR_MIN_LENGTH}</span>}
                                {errors.fullName?.type === 'maxLength' &&  <span>{langTokens.CONTACT_ERROR_MAX_LENGTH}</span>} */}
                        </div>
                        <div className='formColumn'>
                            <i className='fa fa-email'/>
                            <input type="text" style={{backgroundColor: errors.email && errColor}} placeholder="Enter email" {...register("email", { required: langTokens.CONTACT_ERROR_REQUIRED, pattern: {value: /^\S+@\S+.\S+$/i, message: langTokens.CONTACT_ERROR_EMAIL}})} />
                            <div>
                                <ErrorMessage
                                        errors={errors}
                                        name="email"
                                        render={({ messages }) => {
                                        return messages
                                            ? Object.entries(messages).map(([type, message]) => (
                                                <><span key={type}>{message}</span><br/></>
                                            ))
                                            : null;
                                        }}
                                    />
                            </div>
                                {/* {errors.email?.type === 'required' &&  <span>{langTokens.CONTACT_ERROR_REQUIRED}</span>}
                                {errors.email?.type === 'pattern' &&  <span>{langTokens.CONTACT_ERROR_EMAIL}</span>} */}
                        </div>
                    </div>
                    <div className='formColumn'>
                        <i className='fa fa-type'/>
                        <input type="text" {...register("type")} placeholder="Topic" />
                    </div>
                    <div className='formColumn'>
                        <i className='fa fa-message'/>
                        <textarea style={{backgroundColor: errors.message && errColor}} placeholder="Message" {...register("message", { required: langTokens.CONTACT_ERROR_REQUIRED, maxLength: {value: 500, message:langTokens.CONTACT_ERROR_MAX_LENGTH_TEXT} })}/>
                        <div>
                            <ErrorMessage
                                    errors={errors}
                                    name="message"
                                    render={({ messages }) => {
                                    return messages
                                        ? Object.entries(messages).map(([type, message]) => (
                                            <><span key={type}>{message}</span><br/></>
                                        ))
                                        : null;
                                    }}
                                />
                        </div>
                            {/* {errors.message?.type === 'required' &&  <span>{langTokens.CONTACT_ERROR_REQUIRED}</span>}
                            {errors.message?.type === 'maxLength' &&  <span>{langTokens.CONTACT_ERROR_MAX_LENGTH_TEXT}</span>} */}
                    </div>
                    <div className='contactForm__submit indent__btn_auxilary'>
                        <button type='submit' className={`submitButton md-btn ${selectedLang === 'ru' ? "lg-btn ruBtn" : ""}`} >
                            {langTokens.CONTACT_BTN_SUBMIT}
                            <img src={SbmBtnIco} alt="" width="24px" height="24px" style={{marginLeft : selectedLang === 'ru' ? "40px" : "20px"}}/>
                        </button>
                        {error !== "" ? "Something went wrong!" : ""}
                        <div className={`submitText${status ? " submitText--Success" : ""}`}>
                            {message}
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactUs;