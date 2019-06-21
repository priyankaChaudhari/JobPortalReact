import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
const JobList = () => {

    return (
    <div className="container pt-5 mt-5">
        <div className="row justify-content-center mt-5">
            <div className="col- text-center">
                <h3 className=" mr-3 pt-2 mt-1">FILTER BY:</h3>
            </div>
            <div className="col- mr-3">
                <select className="form-control">
                    <option>Location</option>
                    <option>Pune</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                </select>
            </div>
            <div className="col- mr-3">
                <select className="form-control">
                    <option>Team</option>
                    <option>All</option>
                    <option>Administration</option>
                    <option>Data Science</option>
                    <option>Design</option>
                    <option>Engineering</option>
                    <option>Engineering Management</option>
                </select>
            </div>
            <div className="col- mr-3">
                <select className="form-control">
                    <option>Work Type</option>
                    <option>Contract</option>
                    <option>Full Time</option>
                    <option>Half Time </option>
                    <option>Intern</option>
                </select>
            </div>

        <div className="row mt-5">
            <div className="col-12">
                <h2 className="sub-title"> ADMINISTRATION</h2>
            </div>
        </div>
        <div className="pl-3 pr-3 mt-3">
            <div className="row justify-content-between mb-4 pb-2">
                <div className="col-">
                    <h4 className="mb-1"><a href="/">Executive Assistant</a></h4>
                    <div className="posting-categories">
                        <span className="badge badge-secondary">Mountain View, CA</span>
                        <span className="badge badge-secondary">Administration</span>
                        <span className="badge badge-secondary">Full-Time</span>
                    </div>
                </div>
                <div className="col-">
                    </div>
                    <Link className="btn btn-primary"  to="/detail">Apply</Link>   
                    <a className="btn btn-primary" href="/">Apply</a>
                </div>
            </div>
            <div className="row justify-content-between mb-4 pb-2">
                <div className="col-">
                    <h4 className="mb-1"><a href="/">Legal Operations Lead</a></h4>
                    <div className="posting-categories">
                        <span className="badge badge-secondary">Mountain View, CA</span>
                        <span className="badge badge-secondary">Administration</span>
                        <span className="badge badge-secondary">Full-Time</span>
                    </div>
                </div>
                <div className="col-">
                    <a className="btn btn-primary" href="/">Apply</a>
                </div>
            </div>
        </div>

        <div className="row mt-5">
            <div className="col-12">
                <h2 className="sub-title"> DATA SCIENCE</h2>
            </div>
        </div>
        <div className="pl-3 pr-3 mt-3">
            <div className="row justify-content-between mb-4 pb-2">
                <div className="col-">
                    <h4 className="mb-1"><a href="/">Business Data Analyst</a></h4>
                    <div className="posting-categories">
                        <span className="badge badge-secondary">Mountain View, CA</span>
                        <span className="badge badge-secondary">Data Science</span>
                        <span className="badge badge-secondary">Full-Time</span>
                    </div>
                </div>
                <div className="col-">
                    <a className="btn btn-primary" href="/">Apply</a>
                </div>
            </div>
            <div className="row justify-content-between mb-4 pb-2">
                <div className="col-">
                    <h4 className="mb-1"><a href="/">Business Data Analyst</a></h4>
                    <div className="posting-categories">
                        <span className="badge badge-secondary">Mountain View, CA</span>
                        <span className="badge badge-secondary">Data Science</span>
                        <span className="badge badge-secondary">Full-Time</span>
                    </div>
                </div>
                <div className="col-">
                    <a className="btn btn-primary" href="/">Apply</a>
                </div>
            </div>
            <div className="row justify-content-between mb-4 pb-2">
                <div className="col-">
                    <h4 className="mb-1"><a href="/">Data Scientist</a></h4>
                    <div className="posting-categories">
                        <span className="badge badge-secondary">Mountain View, CA</span>
                        <span className="badge badge-secondary">Data Science</span>
                        <span className="badge badge-secondary">Full-Time</span>
                    </div>
                </div>
                <div className="col-">
                    <a className="btn btn-primary" href="/">Apply</a>
                </div>
            </div>
        </div>

        <div className="row mt-5">
            <div className="col-12">
                <h2 className="sub-title">ENGINEERING</h2>
            </div>
        </div>
        <div className="pl-3 pr-3 mt-3">
            <div className="row justify-content-between mb-4 pb-2">
                <div className="col-">
                    <h4 className="mb-1"><a href="/">Full Stack Engineer</a></h4>
                    <div className="posting-categories">
                        <span className="badge badge-secondary">Mountain View, CA</span>
                        <span className="badge badge-secondary">Engineering</span>
                        <span className="badge badge-secondary">Full-Time</span>
                    </div>
                </div>
                <div className="col-">
                    <a className="btn btn-primary" href="/">Apply</a>
                </div>
            </div>
            <div className="row justify-content-between mb-4 pb-2">
                <div className="col-">
                    <h4 className="mb-1"><a href="/">Site Reliability Engineer - Infrastructure/Systems</a></h4>
                    <div className="posting-categories">
                        <span className="badge badge-secondary">Mountain View, CA</span>
                        <span className="badge badge-secondary">Engineering</span>
                        <span className="badge badge-secondary">Full-Time</span>
                    </div>
                </div>
                <div className="col-">
                    <a className="btn btn-primary" href="/">Apply</a>
                </div>
            </div>
            <div className="row justify-content-between mb-4 pb-2">
                <div className="col-">
                    <h4 className="mb-1"><a href="/">Site Reliability Engineer - Machine Learning Systems</a></h4>
                    <div className="posting-categories">
                        <span className="badge badge-secondary">Mountain View, CA</span>
                        <span className="badge badge-secondary">Engineering</span>
                        <span className="badge badge-secondary">Full-Time</span>
                    </div>
                </div>
                <div className="col-">
                    <a className="btn btn-primary" href="/">Apply</a>
                </div>
            </div>
        </div>
    </div>

  

    );
}

export default JobList;