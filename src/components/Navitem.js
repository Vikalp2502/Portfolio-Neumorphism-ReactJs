import { Component } from "react";
import { Link } from "react-router-dom";

class Navitem extends Component {
  render() {
    return (
      <Link
        to={this.props.tolink}
        onClick={this.props.activec.bind(this, this.props.item)}
      >
        <li id={this.props.item}>{this.props.item}</li>
      </Link>
    );
  }
}

export default Navitem;
