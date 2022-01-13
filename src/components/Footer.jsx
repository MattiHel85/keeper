
function Footer() {
    let year = new Date().getFullYear();

    return (
      <footer>
        <p>&copy; {year}</p>
      </footer>
    );
  }
  
  export default Footer;
  