import React, { Component } from "react";
import API from "../../utils/API";
import UserTable from "../Table";

class Main extends Component {
  state = {
    users: [],
    filteredUsers: [],
    order: "ascend"
  }

  componentDidMount() {
    API.getUsers().then(results => this.setState({users: results.data.results}))
  }

  render() {
    return (
      <UserTable users={this.state.users} order={this.state.order}/>
    )
  }
}
export default Main;