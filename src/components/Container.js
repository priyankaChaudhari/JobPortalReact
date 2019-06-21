import React from 'react';
import '../css/style.css';
import JobList from './JobList';
import JobDetail from './JobDetails';
import ApplyJob from './ApplyJob';
import { BrowserRouter, Route } from 'react-router-dom';
const Container = () => {

    return (
        <div>
            <BrowserRouter> 

        <div>
            <header className="main-header">
                <div className="logo"> 
                    <img alt="logo" src="Constants/Images/amazatic-logo.png"  />
                    <label className="header-title"> Job Portal</label>
                </div>
            </header>
        </div>
        <div>
                <div>
                    <Route path="/list" exact component={JobList} />
                    <Route path="/detail" component={JobDetail} />
                    <Route path="/apply" component={ApplyJob} />

                </div>
        </div>
        <div>
            <footer className="main-footer text-center">
                Copyright &copy; Amazatic 2019
            </footer>
        </div>
        </BrowserRouter> 

        </div>

    );
}

export default Container;