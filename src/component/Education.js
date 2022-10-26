import '../style/Education.css'

function Education() {
  return (
    <div className="education syncscroll" name="myElements" id = "Education">
      <h2 className = "education-section-title">Education</h2>
      <div className = "education-section">
      <a href = "https://bitmesra.ac.in" className = "invisibleLink" target = "_blank" rel="noreferrer">
      <div className="college">
            <h4 className = "name fade">Birla Institute of Technolgy</h4>
            <h4 className = "location fade">Mesra, Ranchi</h4>
            <h4 className = "degree fade">Bachelor of Technology in CSE</h4>
            <h4 className = "duration fade">2020 - 2024</h4>
            <h4 className = "cgpa fade">Cgpa : 8.6 (4 semester)</h4>
      </div>
      </a>
      <a href = "https://davbistupur.org/" className = "invisibleLink" target = "_blank" rel="noreferrer">
      <div className="school-12">
            <h4 className = "name fade">D. A. V. Public School</h4>
            <h4 className = "location fade">Bistupur, Jamshedpur</h4>
            <h4 className = "degree fade">AISSCE</h4>
            <h4 className = "duration fade">2018 - 2020</h4>
            <h4 className = "cgpa fade">Percentage : 94.4 %</h4>
      </div>
      </a>
      <a href = "https://davbistupur.org/" className = "invisibleLink" target = "_blank" rel="noreferrer">
      <div className="school-10">
            <h4 className = "name fade">D. A. V. Public School</h4>
            <h4 className = "location fade">Bistupur, Jamshedpur</h4>
            <h4 className = "degree fade">AISSE</h4>
            <h4 className = "duration fade">     - 2018</h4>
            <h4 className = "cgpa fade">Percentage : 95.4 %</h4>
      </div>
      </a>

      </div>
    </div>
  );
}

export default Education;
