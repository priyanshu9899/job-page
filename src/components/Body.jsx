import './Body.css';
import { GrLocation } from "react-icons/gr";
import { TbCoins } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { TbUserCheck } from "react-icons/tb";
import { FiMessageSquare } from "react-icons/fi";
import { LuEye } from "react-icons/lu";


function Body() {
    return (
        <div className='body-container'>
            <div className='job'>
                <div className='job-details'>
                    <div className='job-post'>
                        <p className='title'> Senior Product Designer</p>
                        <span className="dot-1">&middot;</span>
                        <p className='posting'>posted 2 days ago</p>
                        <p className='open'>
                        <span className="dot">&middot;</span>
                            Open</p>
                    </div>
                    <div className='location'>
                        <p> <GrLocation className='icon'/> Delaware, USA</p>
                        <p> <TbCoins className='icon'/> $300k-$400k</p>
                    </div>
                </div>
                <div className='skills'>
                    <div className='skills-required'>Skills Required
                        <p className='figma'> <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png" alt="" className='icons' /> Figma</p>
                        <p className='illustrator'> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1051px-Adobe_Illustrator_CC_icon.svg.png" alt="" className='icons' /> Adobe Illustrator</p>
                        <p className='xd'> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/800px-Adobe_XD_CC_icon.svg.png" alt="" className='icons'/> Adobe Xd</p>
                    </div>
                    <div className='language'>Preferred Language
                        <p className='eng'>English</p>
                    </div>
                    <div className='type'>Type
                        <p className='full'>Full time</p>
                    </div>
                    <div className='years'>Years of Experience
                        <p className='year'> 3+ Years of Experience</p>
                    </div>
                </div>
                <div className='job-description'>
                    <div className='about-job'>About the job
                        <div className='desc'>
                            <p>1. Handle the UI/UX research design</p>
                            <p>2. Work on researching on latest web applications designs & trends</p>
                            <p>3. Work on conceptualizing and visualizing</p>
                            <p>4. Work on creating graphics content and other graphic related works</p>
                            <div>Benefits:
                                <ul className='list'>
                                    <li>Health Insurance</li>
                                    <li>Provident Fund</li>
                                </ul>
                            </div>
                            <div>Schedule:
                                <ul className='list'>
                                    <li>Day shift</li>
                                </ul>
                            </div>
                            <div>Supplemental pay types:
                                <ul className='list'>
                                    <li>Performance Bonus</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='company-details'>
                    <div className='Company-name'>
                        <div><img className='company-img' src="https://s3-alpha-sig.figma.com/img/7622/cd8b/0141197fff7d64b94226a8c17be3edce?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l4Y8yiQzPLyWBrt9QqkZn7pR9okvDvC3NgGSV0UGkZuif1-plYp3IhOBV9zw~Y1G4~M~pSheAtnedkSiFzfvqxS1fjySDbX7Zaq8CficHwF10YRGHeGn0zCc9BwvPkqhDzf7tY6lg6lSaAZzUujt5zZ-QEk7WU~qCI~vZo5tpoUmE4KvJmAGIaoHnm5WHe6cg72RJ~NVhCU~1AV9mBVQHKGlohMZM3if9KzQlAq~xSN7O1HoDQP7hyaascss9aWBVsh7SHG~m91DwYa8TfnPrcAY~uBpYzDed8qWVC-x7mkgYM9fRkwiHbxD9rvbSq08mC-dRvKzdt40pdf4TTaFBA__" alt="" /></div>
                        <div className='atl'>Atlassian</div>
                        <button className='comp-button'>Follow</button>
                    </div>
                    <div className='details-container'>
                        <div className='leftside'>
                            <p className='heading'>Company size</p>
                            <p className='ans'>1k - 2k Employees</p>
                            <p className='heading'>Sector</p>
                            <p className='ans'>Information Technology, Infrastructure</p>
                            <p className='heading'>Founded In</p>
                            <p className='ans'>2019</p>
                            <div className='report-1'> <u>Report this listing</u></div>
                        </div>
                        <div className='rightside'>
                            <p className='heading'>Type</p>
                            <p className='ans'>Private</p>
                            <p className='heading'>Funding</p>
                            <p className='ans'>Bootstrapped</p>
                            <p className='heading'>Founded By</p>
                            <p className='ans'>Scott Farquhar,Mike Cannon-Brookes</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sidebar'>
                <div className='side-button'>
                    <button className='delete-button'> <RiDeleteBinLine className='del-icon'/> Delete job</button>
                    <button className='edit-button'> <MdOutlineEdit className='del-icon' /> Edit job</button>
                </div>
                <div className='report'>
                    <div>
                        <p className='appl'> <MdOutlinePeopleOutline className='icon-1'/> Applicants</p>
                        <hr className='stline' width="230%" size="1"></hr>
                        <p className='matche'> <TbUserCheck className='icon-1'/> Matches</p>
                        <hr className='stline' width="230%" size="1"></hr>
                        <p className='mess'> <FiMessageSquare className='icon-1'/> Messages </p>
                        <hr className='stline' width="230%" size="1"></hr>
                        <p className='view'> <LuEye className='icon-1'/> views</p>
                    </div>
                    <div>
                        <p className='fv'>400</p>
                        <p className='sv'>100</p>
                        <p className='tv'>147</p>
                        <p className='fov'>800</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='quotes'>
                        <q className='quote'>A quote from Atlassian.</q>
                    </div>
                    <div className='bio'>
                        <img className='bio-image' src="https://s3-alpha-sig.figma.com/img/eef3/6a48/1a33eb6dc13aa6b624105a5a5e591e72?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YmgDmm2nn0JJScksBHxnifzU~7qInlvNBLhh30Kc4~cZuXiWQgz1iASqefe~JggT9Zqievy5FvyhjGVIjIn~tmwnEY1V89BPhpOExVtZKJ4~D2f0rqfcSBVhD-bb6grgrbOT~7OeCfzg~szt257-f-AWwqus~J671ttVKoVLp7lZLnAMwpIg89a3gts41mVxRDwoys8-ThJi2tZAevox8al-3QYS932EQRbyLER2SCiJOka84-8l3yzDg50VX1JIDzfSbbPMCBSSv9m5gKX9TaDf3NwNVunjt-WwGtc0lyb223zy9tJqiIJxKc1lKV1HrGOEaMlnmlX4KDYCcoGYpQ__" alt="" />
                        <p className='name'>Name
                            <br />
                            <p className='descr'>Description</p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;
