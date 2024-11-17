import React from "react";
import SEO from './SEO'
import '../style/Experience.css'
import Company from '../components/Company'
import kwsLogo from '../assets/icon/KWS.svg'
import glLogo from '../assets/icon/GL.svg'
import experienceData from '../assets/data/experienceData.json'

function Experience() {
    const logo = [kwsLogo, glLogo];

    const companyList = experienceData.company.map((companyElement) => {

        const roleList = experienceData.work.filter((role) => role.companyId === companyElement.companyId);
        const projectList = experienceData.project.filter((project) => roleList.some((role) => role.roleId === project.roleId));
        return (
            <Company name = {companyElement.name} 
                     location = {companyElement.location}
                     duration = {companyElement.duration}
                     work = {roleList}
                     project = {projectList}
                     logo = {logo[companyElement.companyId - 1]}
                     logoWidth = {companyElement.logoWidth}
                     officialWebsite = {companyElement.site}
            />
        );
    })
    return (
        <section className="experience" name="myElements" id="experience">
            <SEO
                title="Experience - Md Shabbir Jamal"
                description="Hi, I am a CS undergrad with a strong enthusiasm for web development, machine learning, and competitive programming. Explore my interests on this website."
                name="@lamajribbahs"
                image="../assets/image/picture.jpg" />
            <h2 className="experience-section-title">Experience</h2>
            <div class="timeline-container">
                <div class="timeline-line"></div>
                {companyList}
            </div>
            <div className = "phoneNote">Open in desktop to see more info</div>
        </section>
    );
}

export default Experience;  