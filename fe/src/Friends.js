import React,{useEffect,useState} from "react"
import Channel from "./channel"
import axios from "axios"
const Friends = props => {
const [searchValue,setSearchValue] = useState("")
const [friends,setFriends] = useState([])
useEffect(() => {
    axios.get(`https://www.google.com/m8/feeds/contacts/ksharper@studentmba.org/full`).catch(
        err => console.log(err)
    )
    setFriends()
},[])
return (
    <div className="container clearfix">
  <div className="people-list" id="people-list">
    <div className="search">
      <input type="text" placeholder="search" />
      <i className="fa fa-search" />
    </div>
    <ul className="list">
      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
        <div className="about">
          <div className="name">Vincent Porter</div>
          <div className="status">
            <i className="fa fa-circle online" /> online
          </div>
        </div>
      </li>
      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg" alt="avatar" />
        <div className="about">
          <div className="name">Aiden Chavez</div>
          <div className="status">
            <i className="fa fa-circle offline" /> left 7 mins ago
          </div>
        </div>
      </li>
      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg" alt="avatar" />
        <div className="about">
          <div className="name">Mike Thomas</div>
          <div className="status">
            <i className="fa fa-circle online" /> online
          </div>
        </div>
      </li>
      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg" alt="avatar" />
        <div className="about">
          <div className="name">Erica Hughes</div>
          <div className="status">
            <i className="fa fa-circle online" /> online
          </div>
        </div>
      </li>
      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_05.jpg" alt="avatar" />
        <div className="about">
          <div className="name">Ginger Johnston</div>
          <div className="status">
            <i className="fa fa-circle online" /> online
          </div>
        </div>
      </li>
      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_06.jpg" alt="avatar" />
        <div className="about">
          <div className="name">Tracy Carpenter</div>
          <div className="status">
            <i className="fa fa-circle offline" /> left 30 mins ago
          </div>
        </div>
      </li>
      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_07.jpg" alt="avatar" />
        <div className="about">
          <div className="name">Christian Kelly</div>
          <div className="status">
            <i className="fa fa-circle offline" /> left 10 hours ago
          </div>
        </div>
      </li>
      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_08.jpg" alt="avatar" />
        <div className="about">
          <div className="name">Monica Ward</div>
          <div className="status">
            <i className="fa fa-circle online" /> online
          </div>
        </div>
      </li>
      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_09.jpg" alt="avatar" />
        <div className="about">
          <div className="name">Dean Henry</div>
          <div className="status">
            <i className="fa fa-circle offline" /> offline since Oct 28
          </div>
        </div>
      </li>
      <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_10.jpg" alt="avatar" />
        <div className="about">
          <div className="name">Peyton Mckinney</div>
          <div className="status">
            <i className="fa fa-circle online" /> online
          </div>
        </div>
      </li>
    </ul>
  </div>
 <Channel  />
</div> 
)
}
export default Friends