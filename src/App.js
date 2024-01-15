import React from 'react'
import './style.css';
import submitForm from './submitForm';

export default function App() {
  return (
    //This work is done by md kaif manzar
    //email: kaifmanzar321@gmail.com
    //phone: 6200561062
    <form
      
      onSubmit={submitForm} 
      
      action='https://www.greatfrontend.com/api/questions/contact-form'
      method='post'>
      <lable for='name'>Name</lable>
      <input classname='input_tab' name='name' id='name'  type="text" />
      <lable for='name'>Email</lable>
      <input classname='input_tab' name='email' id='email'  type="text" />
      <lable for='name'>Message</lable>
      <textarea classname='input_tab' name='message' id='message' type="text" />
      <input type='submit' id='submit_btn' value='Send'/>
    </form>
  );
}
