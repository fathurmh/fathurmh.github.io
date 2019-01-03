import React from "react";
const PageHeader = props => (
  <section className={`hero ${props.color}`}>
      <div className="container">
        <h1 className="title">{props.title}</h1>
        <h2 className="subtitle">{props.children}</h2>
      </div>
  </section>
);
export default PageHeader;
