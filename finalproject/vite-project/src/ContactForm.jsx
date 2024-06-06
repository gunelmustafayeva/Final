import './ContactForm.css'


function ContactForm(){
    return(
        <>
 <div className='form-section'>
        <h2>WE WANT TO HEAR FROM YOU</h2>
        <hr />
        <p>Please submit any questions, concerns, or general feedback in the space below along with your name and email address.</p>
        <form action="">
    <input type="text" name='text' placeholder='Name' />
    <input type="email"  name='email' placeholder='Email'/>
    <textarea name="text" placeholder='Type your message here...'></textarea>
    <button>Submit</button>
        </form>
      </div>
        </>
    )
}

export default ContactForm