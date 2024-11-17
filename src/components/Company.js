import React from 'react'
import '../style/Company.css'
import parser from 'html-react-parser'
import { expandString } from '../utils'

const Company = (props) => {
    //making the work details
    // two arrays are passed
    // work, project
    let workItems = props.work.map((designation) => {
        const projectItems = props.project
                                    .filter(projectElement => projectElement.roleId === designation.roleId)
                                    .map(projectElement => (
                                        <div className = "company-work-detail" key = {projectElement.projectName}>
                                            <div className = "company-work-name">{projectElement.projectName}</div>
                                            <ul className = "company-work-list">
                                                {projectElement.pointers.map((point, index) => (
                                                    <li className = "company-work-pointer" key = {index}>{parser(expandString(point))}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ));
        return (
            <div key = {designation.roleId}>
                <div className = "company-work-role">{designation.role}</div>
                <div className = "company-work-duration">{designation.duration}</div>
                {projectItems}
            </div>
        );
    });
    
    return (
        <>
            <div class="timeline-item">
                <div class="company-info">
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems : 'center'}}>
                        <div className="company-name">{props.name}</div>
                        <a className = "company-link" href = {props.officialWebsite}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f56969" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                        </a>
                    </div>
                    <div className="company-location">{props.location}</div>
                    <div className="work-duration">{props.duration}</div>
                </div>
                <div class="mid-circle shine">
                    <img className="company-icon" src={props.logo} alt="keywords studios logo" style = {{width : props.logoWidth}}/>
                </div>
                <div className = "company-work">{workItems}</div>
            </div>
        </>
    )
}

export default Company;