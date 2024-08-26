import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
    const data=useActionData()
    return (
      <div className="contact">
        <h3>Contact Us</h3>
        <Form method="post" action="/help/contact">
          <label>
            <span>Your email:</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Your message:</span>
            <textarea name="message" required></textarea>
          </label>
          {data && data.error && <p>Message less than 10 chars</p>}
          <button>Submit</button>
        </Form>
      </div>
    )
  }

export const contactAction=async({request})=>{
  const data=await request.formData()
  const submissionData={
    email:data.get('email'),
    message:data.get('message'),
  }
  //console.log(submissionData)

  if(submissionData.message.length<10){
    return {error:'Message should greater than 10 chars!'}
  }
  return redirect('/')
}