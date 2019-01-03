import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import Header from "./Resume/Header";
import About from "./Resume/About";
import Experiences from "./Resume/Experiences";
import Skills from "./Resume/Skills";
import Footer from "./Resume/Footer";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {}
    };
    ReactGA.initialize("UA-117921349-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: '/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="Resume">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Experiences data={this.state.resumeData.experiences} />
        <Skills data={this.state.resumeData.skills} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default Resume;
