import Link from "next/link";
import React, { Component } from "react";

export default class Language extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    const { is_visible } = this.state;
    return (
      <div className="scroll-lng">
        {is_visible && (
          <div className="top-lng">
                 <p>language</p> <i class="fa-solid fa-chevron-up"></i>
          </div>
        )}
      </div>
    );
  }
}
