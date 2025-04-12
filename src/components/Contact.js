// import React from 'react';

// function Contact() {
//   return (
//     <section id="contact">
//       <h2>Contact Me</h2>
//       <form>
//         <input type="text" placeholder="Name" required />
//         <input type="email" placeholder="Email" required />
//         <textarea placeholder="Message" required></textarea>
//         <button type="submit">Send</button>
//       </form>
//     </section>
//   );
// }

// export default Contact;

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_w97l24g', 'template_ltx75sl', form.current, '1Un7wZiswAT8hsuo2')
      .then(
        () => alert('Message sent!'),
        (error) => alert('Failed to send: ' + error.text)
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
