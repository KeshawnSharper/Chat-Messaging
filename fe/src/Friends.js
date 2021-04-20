import React,{useEffect,useState} from "react"
import Channel from "./channel"
import axios from "axios"
const Friends = ({user}) => {
const [searchValue,setSearchValue] = useState("")
const [friends,setFriends] = useState([])
const [results,setResults] = useState([])
useEffect(() => {
    axios.get(`https://api.github.com/users/${user.additionalUserInfo.username}/followers`).then(res =>
    setFriends(res.data)
    )
},[])
const handleChange = e => {
  axios.get(`https://api.github.com/search/users?q=${e.target.value}&per_page=10`).then(res => (
    setResults(res.data.items)
  ))
setSearchValue(e.target.value)
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
 <Channel  />
</div> 
)
}
export default Friends