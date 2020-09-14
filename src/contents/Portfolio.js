import React, { Component } from 'react';
import project1 from '../img/project1.png';
import project2 from '../img/project2.png';
import project3 from '../img/project3.png';
import project4 from '../img/project4.png';

class Portfolio extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Work</h1>
            <div className="hr_line line2"><div className="inner2 inner3"></div></div>
            <div class="port_out port1"><div class="port_in"><a href="https://github.com/vikalp2502/AlgoSort-Sorting-Visualiser"><img src={project1} className="po1"></img></a></div></div>
            <div class="port_out port2"><div class="port_in"><a href="https://github.com/vikalp2502/Shoes-Nike-Landing-page"><img src={project2} className="po1"></img></a></div></div>
            <div class="port_out port3"><div class="port_in"><a href="https://github.com/vikalp2502/To-do-list-v2"><img src={project3} className="po1"></img></a></div></div>
            <div class="port_out port4"><div class="port_in"><a href="https://github.com/vikalp2502/Tribute-to-msd"><img src={project4} className="po1"></img></a></div></div>
            </div>
            )
        }
    }
    
export default Portfolio
    