import SEO from './SEO'
import '../style/Education.css'

function Education() {
  return (
    <section className="education" name="myElements" id = "Education">
      <SEO
                title="Education - Md Shabbir Jamal"
                description="I did my undergrad from BIT Mesra,India. Hi, I am a CS undergrad with a strong enthusiasm for web development, machine learning, and competitive programming. Explore my interests on this website."
                name="@lamajribbahs"
                image="../assets/image/picture.jpg" />
      <h2 className = "education-section-title">Education</h2>
      <div className = "blob1"></div>
      <div className = "education-section">
      <div className = "card">
            <div className = "contentCard">
                    <div className="back">
                            <a href = "https://bitmesra.ac.in" className = "invisibleLink" target = "_blank" rel="noreferrer">
                            <div className="college">
                                  <h4 className = "name">Birla Institute of Technolgy</h4>
                                  <h4 className = "location">Mesra, Ranchi</h4>
                                  <h4 className = "degree">Bachelor of Technology in CSE</h4>
                                  <h4 className = "duration">2020 - 2024</h4>
                                  <h4 className = "cgpa"><b>Cgpa : 8.57 (7 semester)</b></h4>
                            </div>
                            </a>
                    </div>
            </div>
      </div>
      <div className = "card">
            <div className = "contentCard">
                    <div className="back">
                            <a href = "https://davbistupur.org/" className = "invisibleLink" target = "_blank" rel="noreferrer">
                            <div className="school-12">
                                  <h4 className = "name">D. A. V. Public School</h4>
                                  <h4 className = "location">Bistupur, Jamshedpur</h4>
                                  <h4 className = "degree">AISSCE ( CBSE )</h4>
                                  <h4 className = "duration">2018 - 2020</h4>
                                  <h4 className = "cgpa"><b>Percentage : 94.4 %</b></h4>
                            </div>
                            </a>
                    </div>
            </div>
      </div>
      <div className = "card">
            <div className = "contentCard">
                    <div className="back">
                            <a href = "https://davbistupur.org/" className = "invisibleLink" target = "_blank" rel="noreferrer">
                            <div className="school-10">
                                  <h4 className = "name">D. A. V. Public School</h4>
                                  <h4 className = "location">Bistupur, Jamshedpur</h4>
                                  <h4 className = "degree">AISSE ( CBSE )</h4>
                                  <h4 className = "duration">Passout - 2018</h4>
                                  <h4 className = "cgpa"><b>Percentage : 95.4 %</b></h4>
                            </div>
                            </a>
                    </div>
            </div>
      </div>
      </div>
      <div className = "blob2"></div>
      <div className = "separator"></div>
      <h2 className="score-section-title">scores</h2>
      <div className = "score-section-description">Scores achieved on varoius Competitive Examinations :</div>
      <div className = "score-section">
          <ul className = "score-list">
                <li className = "score-element">Achieved <b>8252</b> ( All India Rank ) in <b>JEE Advance 2020</b> </li>
                <li className = "score-element">Achieved <b>98.6238085</b> percentile in <b>JEE Mains 2020</b></li>
                <li className = "score-element">Achieved a <b>Perfect Score [ 100 / 100 ]</b> in Mathematics in the AISSCE 2020 examination ( class 12 )</li>
                <li className = "score-element">Achieved <b>408</b> (All India Rank) in <b>WBJEE 2020</b></li>
                <li className = "score-element">Achieved <b>3413</b> (All India Rank) in <b>VITEEE 2020</b></li>
          </ul>
      </div>
    </section>
  );
}

export default Education;
