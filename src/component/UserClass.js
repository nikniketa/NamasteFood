import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetail: {},
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/nikniketa");
    const response = await data.json();
    this.setState({
      userDetail: response,
    });
  }
  render() {
    console.log(this.state.userDetail);
    const { name, location, avatar_url } = this.state.userDetail;
    return (
      <div className="aboutContainer">
        <img src={avatar_url} />
        <h3>UserName: {name} </h3>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}
export default UserClass;
