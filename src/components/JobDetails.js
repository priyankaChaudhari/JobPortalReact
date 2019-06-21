import React from 'react';

const JobDetails = () => {
    return (
        <div>
              <div className="white-panel mt-5 pt-1">
        <div className="container pt-5 mt-5 pb-1">
            <div className="row justify-content-between mb-4 pb-2">
                <div className="col">
                    <h4 className="page-title"><a href="#">Executive Assistant</a></h4>
                    <div className="posting-categories">
                        <span className="badge badge-secondary">Mountain View, CA</span>
                        <span className="badge badge-secondary">Administration</span>
                        <span className="badge badge-secondary">Full-Time</span>
                        <div className="pt-3">
                            A great Executive Assistant will have exceptional detail-orientation, judgment, and
                            integrity.
                            <br />
                            He or she will possess a strong faculty for managing and prioritizing scheduling requests
                            <br />
                            as well as external contacts.
                        </div>
                    </div>
                </div>
                <div className="col- pt-5">
                    <a className="btn btn-primary" href="#">Apply for this job</a>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5">
        <div className="row mb-3">
            <div className="col-12">
                <h3 className="detail-sub-title">Responsibilities:</h3>
                <ul className="pl-3">
                    <li>Supporting 3-4 members of the executive team</li>
                    <li>Coordinate internal and external meetings</li>
                    <li>Manage hectic and complex calendars</li>
                    <li>Coordinate travel arrangements</li>
                    <li>Build cross-functional relationships</li>
                    <li>Planning company off-sites and team events as needed</li>
                </ul>
            </div>
        </div>
        <div className="row mb-3">
            <div className="col-12">
                <h3 className="detail-sub-title">Requirements:</h3>
                <ul className="pl-3">
                    <li>Bachelors degree preferred</li>
                    <li>At least 2-3 years of executive support experience, preferably in a startup environment </li>
                    <li>Excellent computer skills and experience with Google Apps</li>
                    <li>Incredibly organized and detail-oriented</li>
                    <li>Ability to prioritize multiple assignments</li>
                    <li>Strong communication and interpersonal skills</li>
                    <li>Ability to thrive in a fast-paced environment</li>
                    <li>Experience working with engineering teams a plus</li>
                    <li>Self-directed and proactive</li>
                    <li>Ability to maintain complete confidentiality on all business matters</li>
                </ul>
            </div>
        </div>

        <div className="mb-3">
            We are an equal opportunity employer and value diversity at our company. We do not discriminate on the
            basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran
            status, or disability status.
        </div>

        <div className="text-center mb-5 mt-5">
            <a className="btn btn-primary" href="#">Apply for this job</a>
        </div>
    </div>
            
        </div>
    );

}

export default JobDetails;