import React from "react";
import './AboutUsPage.css'
import Header from "../Header/Header";
import '../Header/Header.css'
import Footer from '../Footer/Footer';
import twitter from '../../assets/images/team-icon-twitter.png'
import facebook from '../../assets/images/team-icon-facebook.png'
import youtube from '../../assets/images/team-icon-youtube.png'
import linkedin from '../../assets/images/team-icon-linkedin.png'
import instagram from '../../assets/images/team-icon-instagram.png'
import partner1 from '../../assets/images/partners-icon1.png'
import partner2 from '../../assets/images/partners-icon2.png'
import partner3 from '../../assets/images/partners-icon3.png'
import partner4 from '../../assets/images/partners-icon4.png'
import partner5 from '../../assets/images/partners-icon5.png'
import team1 from '../../assets/images/team1.png'
import team2 from '../../assets/images/team2.png'
import team3 from '../../assets/images/team3.png'
import '../Footer/Footer.css';


const AboutUsPage = () => {
    return (
        <div className="aboutus-container">
            <Header />
            <div className="first-hero">
                <h2>About Us</h2>
            </div>
            <div className="aboutus-section">
                <h2>About Us</h2>
                <p>Jamor Technology is a catalyst for innovation and growth. 
                    We bridge the gap between talent and opportunity by 
                    offering revolutionary internship programs, cutting-edge 
                    tech solutions, strategic outsourcing, and investment opportunities.
                     Our mission is to empower individuals and businesses to achieve their
                      full potential.
                </p>
            </div>
            <div className="aboutus-hero">
                <div className="inner-mission">
                    <h4>Our Mission</h4>
                    <p>Guided by our core values, we develop interns through soft skills training, 
                        mentorship, and hands-on projects, ensuring satisfaction for businesses, 
                        employers and investors with innovative tech solutions.
                    </p>
                   
                </div>
                <div className="inner-mission">
                    <h4>Our Vision</h4>
                    <p>Equipping aspiring professionals to become skilled tech innovators, 
                        in driving global business growth through hands-on projects and 
                        internships.
                    </p>
                </div>

            </div>
            <div className="core-container">
                <h2>Our Core Value</h2>
                <div className="core-content">
                    <div className="core-writeup">
                        <h4>Reliability</h4>
                        <p>We understand the importance of meeting client expectations and deadlines, 
                            and we strive to be a reliable partner that clients can trust. by 
                            maintaining open lines of communication, adhering to our promises, and 
                            consistently delivering on our commitments.
                        </p>
                    </div>
                    <div className="core-writeup">
                        <h4>Professionalism</h4>
                        <p>We hold ourselves to the highest standards of professionalism, integrity, 
                            and ethical conduct. our team members are dedicated professionals who 
                            approach their work with a sense of responsibilities, respect, and professionalism.
                        </p>
                    </div>
                    <div className="core-writeup">
                        <h4>Collaboration</h4>
                        <p>We recognise that successful outcomes are often achieved through effective teamwork
                             and collaboration. We believe in the power of diverse perspectives, ideas, and 
                             expertise coming together to drive  innovation, problem-solving, and continuous improvement.
                        </p>
                    </div>
                    <div className="core-writeup">
                        <h4>Innovation</h4>
                        <p>We believe that innovation is essential to staying at the forefront of the industry and 
                            providing cutting-edge solutions to our clients. we encourage a culture of creativity, curiosity,
                             and continuous learning, empowering our team members and interns to think outside the box, 
                             challenge the status quo, and bring fresh ideas and perspectives to the table.
                        </p>
                    </div>
                </div>
            </div>
            <div  className="horizontal-line"></div>
            <div className="team-container">
                <h2>Meet Our Teams</h2>
                <div className="team-content">
                    <div className="team-card">
                        <img src={team1} alt="team's picture" />
                        <p>Usman Lawal</p>
                        <p>Condinator</p>
                        <div>
                            <img src={twitter} alt="twitter icon" />
                            <img src={facebook} alt="facebook icon" />
                            <img src={youtube} alt="youtube icon" />
                            <img src={linkedin} alt="linkedin icon" />
                            <img src={instagram} alt="instagram icon" />
                        </div>
                    </div>
                    <div className="team-card">
                        <img src={team2} alt="team's picture" />
                        <p>Usman Lawal</p>
                        <p>Condinator</p>
                        <div>
                            <img src={twitter} alt="twitter icon" />
                            <img src={facebook} alt="facebook icon" />
                            <img src={youtube} alt="youtube icon" />
                            <img src={linkedin} alt="linkedin icon" />
                            <img src={instagram} alt="instagram icon" />
                        </div>
                    </div>
                    <div className="team-card">
                        <img src={team3} alt="team's picture" />
                        <p>Usman Lawal</p>
                        <p>Condinator</p>
                        <div>
                            <img src={twitter} alt="twitter icon" />
                            <img src={facebook} alt="facebook icon" />
                            <img src={youtube} alt="youtube icon" />
                            <img src={linkedin} alt="linkedin icon" />
                            <img src={instagram} alt="instagram icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="partners-container">
                <h2>Our Partners</h2>
                <div className="partners-content">
                    <img src={partner1} alt="partner1" />
                    <img src={partner2} alt="partner2" />
                    <img src={partner3} alt="partner3" />
                    <img src={partner4} alt="partner4" />
                    <img src={partner5} alt="partner5" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUsPage;