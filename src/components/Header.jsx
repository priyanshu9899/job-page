import './Header.css';
import { LuBriefcase } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";
import { PiHandCoinsLight } from "react-icons/pi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { VscBellDot } from "react-icons/vsc";
import { RiArrowDropDownLine } from "react-icons/ri";

function Header() {
    return (
    <div className='Header-container'>
        <div className='Logo'>
            <button className='Logo-button'>Logo</button>
        </div>
        <div className='Jobs'>
            <button className='Jobs-button'> <LuBriefcase className='icon'/>Jobs</button>
        </div>
        <div className='Nav-buttons'>
            <button className='messages'> <FiMessageSquare className='icon'/>Messages</button>
            <button className='payments'> <PiHandCoinsLight className='icon'/>Payments</button>
            <button className='application'> < MdOutlinePeopleAlt className='icon'/>Application</button>
        </div>
        <div className='Notification'>
            <button className='notification-button'><VscBellDot className='notification-icon'/></button>
        </div>
        <div className='Profile'>
            <img className='image' src="https://static-00.iconduck.com/assets.00/atlassian-icon-512x512-a4v5uln8.png"  alt="Atlassian icon" />
            <span className='dropdown'><RiArrowDropDownLine className='notification-icon'/></span>
        </div>
    </div>
    )
}

export default Header;
    