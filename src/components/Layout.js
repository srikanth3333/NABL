import React from 'react';
import { AiFillHome,AiFillProfile } from 'react-icons/ai';
import {FcStatistics} from 'react-icons/fc';
import {IoPerson,IoSearch,IoNotificationsSharp,IoSettings} from 'react-icons/io5';
import {BsFillBriefcaseFill, BsFillCalendarFill, BsLightbulbFill, } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function Layout({children}) {


    const [token,setToken] = React.useState(null)

    const getToken = () => {
        let role = localStorage.getItem('role')
        setToken(role)
    }

    React.useEffect(() => {
        getToken()
    },[])
    
    return (
        <div className="layout">
            <div className="wrapper">
                <div className="sidebar">
                    <div>
                        <div className="logo-box text-center">
                            <h3><b className="text-white">METER</b><span className="text-primary"><b>DATA</b></span></h3>
                        </div>
                        <ul className="items__ul text-white my-5" style={{padding: '0px 1px'}}>
                            <li>
                                <NavLink to="/"  className="d-flex nav__list__item  align-items-center">
                                    <AiFillHome  className="icon__nav icon-active" />
                                    <span>Dashboard</span>
                                </NavLink>
                            </li>
                            {
                                token == "customer"
                                ?
                                    null
                                :
                                <li>
                                    <NavLink to="/addData" className="d-flex nav__list__item  align-items-center">
                                        <FcStatistics className="icon__nav icon-active" />
                                        <span>Upload Readings</span>
                                    </NavLink>
                                </li>
                            }
                            {/* <li>
                                <NavLink to="/qrCode" className="d-flex nav__list__item  align-items-center">
                                    <FcStatistics className="icon__nav icon-active" />
                                    <span>QR Code</span>
                                </NavLink>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className="page">
                    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                        <div class="container">
                            <a class="navbar-brand" href="#">
                                <span className="mx-3">Dashboard</span>
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav ms-auto align-items-baseline mt-2">
                                    <li class="nav-item">
                                        <a className="nav-link"><IoNotificationsSharp size={25} /></a>
                                    </li>
                                    <li class="nav-item">
                                        <a className="nav-link"><IoSettings size={25} /></a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <IoPerson size={25} />
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a class="dropdown-item" href="#">Profile</a></li>
                                            <li onClick={() => {
                                                localStorage.clear();
                                                window.location.href = "/"
                                            }}><a class="dropdown-item" href="#">Logout</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="py-3">
                        <div className="container">
                            {children}
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default Layout
