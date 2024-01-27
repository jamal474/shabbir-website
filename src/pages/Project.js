import React from "react";
import SEO from './SEO'
import '../style/Project.css'
import ML from '../components/ML.js'
import WebD from '../components/WebD.js'

function Project()
{
    const [toggleState, setToggleState] = React.useState(1);

    function toggleTab(index){
        
        setToggleState(index);
        console.log(toggleState);
    }
    return(
        <section className = "project" name="myElements" id = "Project">
            <SEO
                title="Projects - Md Shabbir Jamal"
                description="Hi, I am a CS undergrad with a strong enthusiasm for web development, machine learning, and competitive programming. Explore my interests on this website."
                name="@lamajribbahs"
                image="../assets/image/picture.jpg" />
            <h2 className = "project-section-title">Projects</h2>
            <div className = "tabsBar" >
                    <div className = {toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}><h3>Web Dev.</h3></div>
                    <div className = {toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}><h3>ML</h3></div>
            </div>
            <div className = {toggleState === 1 ? "content active-content" : "content"}><WebD/></div>
            <div className = {toggleState === 2 ? "content active-content" : "content"}><ML/></div>
            
        </section>
    );
}

export default Project;