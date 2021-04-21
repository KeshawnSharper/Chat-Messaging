import React,{useEffect,useState} from "react"
import Channel from "./channel"
import axios from "axios"
const Friends = ({user}) => {
const [searchValue,setSearchValue] = useState("")
const [friends,setFriends] = useState([])
const [results,setResults] = useState([])
const [friend,setFriend] = useState(null)
useEffect(() => {
    axios.get(`https://api.github.com/users/${user.additionalUserInfo.username}/followers`).then(res => {
    setFriends(res.data)
    setFriend(res.data.length > 0 ? res.data[0] : null)
}
    )
},[])
const handleChange = e => {
  axios.get(`https://api.github.com/search/users?q=${e.target.value}&per_page=10`).then(res => (
    setResults(res.data.items)
  ))
setSearchValue(e.target.value)
}
console.log(friends)
const changeFriend = user => {
  setFriend(user)
}
return (
    <div className="container clearfix">
      
  <div className="people-list" id="people-list">
    <div className="search">
      <input type="text" placeholder="search" onChange={(e) => handleChange(e)}/>
      <i className="fa fa-search" />
    </div>
    <ul className="list">
        {searchValue === ""
        ?
            friends.map(user => (
                <li className="clearfix" style={{cursor:"pointer"}} onClick={() => changeFriend(user)}>
                    <div className="img-container">
                <img src={user.avatar_url} alt="avatar" />
                </div>
                <div className="about">
                  <div className="name">{user.login}</div>
                  <div className="status">
                    <i className="fa fa-circle online" /> online
                  </div>
                </div>
              </li>
            ))
             :
             results.map(user => (
              <li className="clearfix">
                  <div className="img-container">
              <img src={user.avatar_url} alt="avatar" />
              </div>
              <div className="about">
                <div className="name">{user.login}</div>
                <div className="status">
                  <i className="fa fa-circle online" /> online
                </div>
              </div>
            </li>
             ))
        }
  
     
 
    </ul>
  </div>
  {
    friend ?
    <>
 <Channel  friend={friend} user={user}/>
</>
    :
    null
  }
</div> 
)
}
export default Friends