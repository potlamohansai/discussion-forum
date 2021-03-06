
import React,{useState} from 'react'
import HomeIcon from '@material-ui/icons/Home'
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined'
import {AssignmentTurnedInOutlined, PeopleAltOutlined, NotificationsOutlined, Search, ExpandMore,} from '@material-ui/icons'
import CloseIcon from '@material-ui/icons/Close'
import { Avatar, Button, Input } from '@material-ui/core'
import "./css/QuoraHeader.css"
import {Modal} from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import axios from 'axios'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../feature/userSlice'

// Navbar Component

function QuoraHeader() {

  const [isModalOpen,setIsModalOpen]= useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");
  const Close = <CloseIcon/>;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  
  
//Add Question handler which is in Navbar

  const handleSubmit = async () => {
    if(question !== "") {

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }
      const body = {
        questionName: question,
        questionUrl : inputUrl,
        user: user,
      }
      await axios.post("/api/questions", body,config).then((res) => {
        console.log(res.data);
        alert(res.data.message);
        window.location.href = "/";
      }).catch((e) => {
        console.log(e);
        alert('Error in adding question')
      });
    }
  }


  //Logout Handler when we click on Avatar in the Navbar

  const handleLogout = () => {
    if(window.confirm('Are you sure to logout?')) {
      signOut(auth).then(() => {
        dispatch(logout())
        console.log('Logged Out')
      }).catch(() => {
        console.log("Error in logout")
      })
    }
  }

  return (
    <div className='qHeader'>
       <div className='qHeader-content'>
          <div className='qHeader__logo'>
            <img src='data:image/jpeg;base64,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' alt="logo" />
          </div>  
            <div className='qHeader__icons'>
              <div className='qHeader__icon'><HomeIcon/></div>
              <div className='qHeader__icon'><FeaturedPlayListOutlinedIcon/></div>
              <div className='qHeader__icon'><AssignmentTurnedInOutlined/></div>
              <div className='qHeader__icon'><PeopleAltOutlined/></div>
              <div className='qHeader__icon'><NotificationsOutlined/></div>
            </div>
            <div className='qHeader__input'>
                <Search/>
                <input type="text" placeholder="Search Question"/>
            </div>
            <div className='qHeader__Rem'>
                
                <span onClick = {handleLogout}>
                  <Avatar src= {user?.photo}/>
                </span>
            
                <Button onClick ={() => setIsModalOpen(true)} >Add Question</Button>
                <Modal
                open={isModalOpen}
                closeIcon={Close}
                onClose= {() => setIsModalOpen(false)}
                closeOnEsc
                center
                closeOnOverlayClick={false}
                styles={{
                  overlay: {
                    height: "auto",
                  },
                }}
                >
                  <div className='modal__title'>
                    <h5>Add Question</h5>
                    <h5>Share Link</h5>
                  </div>
                  <div className='modal__info'>
                    <Avatar src= {user?.photo} className='avatar' />
                    <div className='modal__scope'>
                      <PeopleAltOutlined/>
                      <p>Public</p>
                      <ExpandMore/>
                    </div>
                  </div>
                  <div className='modal__Field'>
                    <Input 
                    value = {question}
                    onChange = {(e) => setQuestion(e.target.value)}
                    type="text" placeholder= "What do you want to ask or share?"/>
                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                    }}>
                      <input 
                        type="text" 
                        value={inputUrl}
                        onChange={(e) => setInputUrl(e.target.value)}
                        style={{
                          margin: "5px 0",
                          border: "1px solid lightgray",
                          padding: '10px',
                          outline:  "2px solid #000",
                        }}
                        placeholder= "Optional: Include a link that gives context"/>

                        {inputUrl !== "" && (<img
                        style={{
                          height: "40vh",
                          objectFit: "contain"
                        }}
                          src={inputUrl} alt='displayimage'/>)}
                    </div>
                  </div>
                  <div className='modal__buttons'>
                    <button className='cancel' onClick={() => setIsModalOpen(false)}>
                      Cancel
                    </button>
                    <button onClick = {handleSubmit} type="submit" className='add' >
                      Add Question
                    </button>
                  </div>
                </Modal>
            </div>
        </div>
    </div>
  )
}

export default QuoraHeader