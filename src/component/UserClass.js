import React from "react";
import UserContext from "../utils/UserContext";

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
        <UserContext.Consumer>
          {({ loggedInUser }) => {
            return <h3>UserName: {loggedInUser}</h3>;
          }}
        </UserContext.Consumer>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}
export default UserClass;
