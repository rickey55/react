import "../css/all.min.css";
import "../css/sb-admin-2.css";
import React from 'react';
import { Link } from 'react-router-dom';
import Test from "./Test";


const Home = () => {
    return (
        <div >
            {/* <!-- Page Wrapper --> */}
            <div id="wrapper">

                {/* <!-- Sidebar --> */}
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                  
                    {/* <!-- Divider --> */}
                    {/* <hr className="sidebar-divider my-0"> */}

                    {/* <!-- Nav Item - Dashboard --> */}
                    <li className="nav-item active">
                        <a className="nav-link" href="/test">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span></a>
                    </li>

                    
                    {/* <!-- Nav Item - Tables --> */}
                    <li className="nav-item">
                        <a className="nav-link" href="tables.html">
                            <i className="fas fa-fw fa-table"></i>
                            <span>Tables</span></a>
                    </li>
                </ul>
                {/* <!-- End of Sidebar --> */}


                {/* <!-- Content Wrapper --> */}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/* <!-- Main Content --> */}
                    <div id="content">

                        {/* <!-- Topbar --> */}
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                            {/* <!-- Sidebar Toggle (Topbar) --> */}
                            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                <i className="fa fa-bars"></i>
                            </button>

                        </nav>
                        {/* <!-- End of Topbar --> */}

                        {/* <!-- Begin Page Content --> */}
                        <div className="container-fluid">

                            {/* <!-- Page Heading --> */}
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                                <Link to="/react/Login" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</Link>
                            </div>

                            {/* <!-- Content Row --> */}
                            <div className="row">
                                {/* <!-- Earnings (Monthly) Card Example --> */}
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-primary shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                        Earnings (Monthly)</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                

                                {/* <!-- Earnings (Monthly) Card Example --> */}
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-success shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                        Earnings (Annual)</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* <!-- End of Main Content --> */}

                    {/* <!-- Footer --> */}
                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright &copy; Your Website 2023</span>
                            </div>
                        </div>
                    </footer>
                    {/* <!-- End of Footer --> */}

                </div>
                {/* <!-- End of Content Wrapper --> */}

            </div>
            {/* <!-- End of Page Wrapper --> */}
            {/* </hr> */}
        </div>
    );
};

export default Home;
