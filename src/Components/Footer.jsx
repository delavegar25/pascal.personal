const Footer = () => {
    const whatsappLink = 'https://wa.me/+2349028589617';
    return (
      <footer className='footer'>
      {/* Whatsapp message link */}
      <a href={whatsappLink} className='whatsapp-link' target="_blank" rel="noopener noreferrer">
       Send me a Whatsapp message
      </a>
   </footer>
    )
  }

  export default Footer();