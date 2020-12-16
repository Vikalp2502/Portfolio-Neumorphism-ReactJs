import React, { Component } from "react";

class Social extends Component {
  render() {
    return (
      <div class="social">
        <a
          class="btnsame btn1"
          href="https://github.com/vikalp2502"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-github"></i>
        </a>
        <a
          class="btnsame btn2"
          href="https://twitter.com/@kaushik_vikalp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-twitter"></i>
        </a>
        <a
          class="btnsame btn3"
          href="https://linkedin.com/in/vikalp-kaushik-99966a1ab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-linkedin"></i>
        </a>
        <a
          class="btnsame btn4"
          href="https://instagram.com/vikalp._.kaushik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-instagram"></i>
        </a>
      </div>
    );
  }
}

export default Social;
