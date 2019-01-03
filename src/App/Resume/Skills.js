import React, { Component } from 'react';

class Skills extends Component {
  render() {
    if (this.props.data) {
      var programming = this.props.data.programming.sort(function (a, b) {
        if (a.level < b.level) return 1;
        if (a.level > b.level) return -1;
        return 0;
      }).map(function (skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      })
      var web = this.props.data.web.sort(function (a, b) {
        if (a.level < b.level) return 1;
        if (a.level > b.level) return -1;
        return 0;
      }).map(function (skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      })
    }
    return (
      <section id="skills">
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>
              Programming
            </span></h1>
          </div>
          <div className="nine columns main-col">
            {/* <p>{skillmessage}</p> */}
            <div className="bars">
              <ul className="skills">
                {programming}
              </ul>
            </div>
          </div>
        </div>
        <p />
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Web</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">
                {web}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
