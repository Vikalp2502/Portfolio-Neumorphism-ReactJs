import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h2 className="subtopic">About Me</h2>
            <div className="hr_line line2"><div className="inner2"></div></div>
            <h2 className="abouthead">Vikalp <mark className="mark2">Kaushik</mark></h2>
            <p>Full Stack Developer</p>
            <br></br>
            <p className="p10">I started my journey in the world of computers from an young age,
            now I’m 21 years old, Pursuing my Computer Science and Engineering Degree in
            GNDEC Ludhiana.  Web development is my center of interest, i always
            love the idea of cross-platform development, 1-n one code base deploy into almost
            any platform, which web technology like Javascript enables me to do. I also like
            creating Interactive UI components for better UX  and share those design and codes
            to the world through Github and Instagram.
            </p>
            <div className="Edu">
                <div class="back1 back2"><i class="fa fa-book i1 i3"></i></div>
            </div>
            <h3>Education</h3>
            <div className="vr_line">
                <div className="vr_inner inn1"></div>
                <div className="vr_inner inn2"></div>
            </div>
            <h4>B.Tech in CSE</h4>
            <p className="p1">GNDEC, Ludhiana</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>May 2018 - 2022</p>
            <h4>High School</h4>
            <p className="p1">St. Farid Public School, MGG</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>May 2017</p>

            <h3 class="sk_head">Skills</h3>
            <div class="sk">HTML</div>
            <div class="sk s2">CSS</div>
            <div class="sk s3">JavaScript</div>
            <div class="sk s4">React</div>
            <div class="sk s5">Node</div>
            <div class="sk s6">Python</div>
            </div>
            )
        }
    }
    
export default About
    