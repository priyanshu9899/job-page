
import './Navbar.css';

function Navbar() {
    return (
        <div className='Navbar-container'>
            <button className='jobs active'>Job preview</button>
            <button className='applicants'>Applicants</button>
            <button className='match'>Match</button>
            <button className='message'>Messages</button>
        </div>
    );
}

export default Navbar;

