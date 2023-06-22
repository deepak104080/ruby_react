import React from "react";
import {Link} from 'react-router-dom';

const Menubar = () => {
    return (
        <>
            <div className="row bg-info-subtle">
                <div className="col-12">

                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to="/home" className="nav-link active">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link" >About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/services" className="nav-link" >Sevices</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact" className="nav-link" >Contact</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/counter" className="nav-link" >Counter</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/class" className="nav-link" >ClassComp</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/todo" className="nav-link" >To Do</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/todo1" className="nav-link" >To Do 1</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/conditionals" className="nav-link" >Conditionals</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/colortoggle" className="nav-link" >ColorToggle</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/colorchange" className="nav-link" >ColorChange</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/formbasic" className="nav-link" >Form 1</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/lifecycle" className="nav-link" >Lifecycle</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/useeffect" className="nav-link" >UseEffect</Link>
                                    </li>

                                    {/* <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown link
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                        </li> */}
                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </>
    )
}

export default Menubar;