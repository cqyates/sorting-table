import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import { ArrowUp, ArrowDown } from 'react-bootstrap-icons'

const UserTable = ({ users }) => {
  const [firstNameOrder, setFirstNameOrder] = useState("")
  const [lastNameOrder, setLastNameOrder] = useState("")
  const [emailOrder, setEmailOrder] = useState("")
  const [userList, setUserList] = useState(users)

  const handleFirstNameSort= () => {
    if(firstNameOrder === "ascend") {
      setFirstNameOrder("descend")
      const sortedUsers = users.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);
      setUserList(sortedUsers);
      console.log(userList)
    }
    else {
      setFirstNameOrder("ascend");
      const sortedUsers = users.sort((a,b) => (b.name.first > a.name.first) ? 1 : -1)
      setUserList(sortedUsers);
      console.log(userList)
    }
  }
  const handleLastNameSort= () => {
    if(lastNameOrder === "ascend") {
      setLastNameOrder("descend")
      const sortedUsers = users.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1);
      setUserList(sortedUsers);
      console.log(userList)
    }
    else {
      setLastNameOrder("ascend");
      const sortedUsers = users.sort((a,b) => (b.name.last > a.name.last) ? 1 : -1)
      setUserList(sortedUsers);
      console.log(userList)
      
    }
  }
  const handleEmailSort = () => {
    if(emailOrder === "ascend") {
      setEmailOrder("descend")
      const sortedUsers = users.sort((a, b) => (a.email > b.email) ? 1 : -1);
      setUserList(sortedUsers);
      console.log(userList)
    }
    else {
      setEmailOrder("ascend");
      const sortedUsers = users.sort((a,b) => (b.email > a.email) ? 1 : -1)
      setUserList(sortedUsers);
      console.log(userList)
    }
  }
  console.log(users)
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name{firstNameOrder === "ascend" ? <ArrowUp onClick={() => handleFirstNameSort()} /> : <ArrowDown onClick={() => handleFirstNameSort()}/>}</th>
          <th>Last Name{lastNameOrder === "ascend" ? <ArrowUp onClick={() => handleLastNameSort()}/> : <ArrowDown onClick={() => handleLastNameSort()}/>}</th>
          <th>Email{emailOrder === "ascend" ? <ArrowUp onClick={() => handleEmailSort()}/> : <ArrowDown onClick={() => handleEmailSort()}/>}</th>
        </tr>
      </thead>
      <tbody>
        {users[0] !== undefined ? (
          users.map(({name, email, login, picture}) => {
            return (
              <tr key={login.uuid}>
                <td><img src={picture.medium} alt={name.first}></img></td>
                <td>{name.first}</td>
                <td>{name.last}</td>
                <td>{email}</td>
              </tr>
            )
          })
        ) : <></>}
      </tbody>
    </Table>
  );
};

export default UserTable;
