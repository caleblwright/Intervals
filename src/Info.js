import React from "react";

class Info extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const title = this.props.title;
    const showTitle = true;

    return (
      <div>
        <h1> {showTitle ? title : ""} </h1>
        <p> Manage your pace while working out!</p>
      </div>
    );
  }
}

Info.defaultProps = {
  title: "default",
};

export default Info;
