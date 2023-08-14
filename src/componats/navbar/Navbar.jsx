import "./Navbar.css"
import { BsClock, BsInstagram } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { FiSquare } from 'react-icons/fi';
import { AiFillFacebook, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { useState } from "react";

const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <div className="navbar-headline-container">
                <div className="max-width-container">
                    <div className="navbar-headline py-1">
                        <div className="d-flex">
                            <div className="mx-2">
                                <span className="mx-1"><BsClock color="#fff" /></span>
                                <span>we are avalable 24/7</span>
                            </div>
                            <div className="mx-2">
                                <span className="mx-1"><CgWebsite color="#fff" /></span>
                                <span>miltimade.com</span>
                            </div>
                        </div>
                        <div>
                            <span className="mx-2"><AiOutlineTwitter color="#fff" /></span>
                            <span className="mx-2"><AiFillFacebook color="#fff" /></span>
                            <span className="mx-2"><AiFillLinkedin color="#fff" /></span>
                            <span className="mx-2"><BsInstagram color="#fff" /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-second-container">
                <div className="max-width-container">
                    <div className="d-flex justify-content-between py-3 mx-2">
                        <div className="d-flex align-items-center">
                            <span><FiSquare size={30} color="#03a9f5" /></span>
                            <span className="logo">Jadhav</span>
                        </div>
                        <div className="nav-items ">
                            <a className="mx-3" href="">Home</a>
                            <a className="mx-3" href="">About</a>
                            <a className="mx-3" href="">Project</a>
                            <a className="mx-3" href="">Blog</a>
                            <a className="mx-3" href="">Services</a>
                            <a className="mx-3" href="">Contact</a>
                        </div>
                        <div onClick={() => setShow(!show)} className="responsive-menu-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="black" />
                            </svg>
                        </div>
                    </div>
                    {show && <div className="nav-items-responsive-container">
                        <div className="nav-items-responsive">
                            <a className="mx-3" href="">Home</a>
                            <a className="mx-3" href="">About</a>
                            <a className="mx-3" href="">Project</a>
                            <a className="mx-3" href="">Blog</a>
                            <a className="mx-3" href="">Services</a>
                            <a className="mx-3" href="">Contact</a>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Navbar



