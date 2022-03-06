import React,{useState} from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import {AssignmentTurnedInOutlined, PeopleAltOutlined, NotificationsOutlined, Search, ExpandMore,} from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close'
import { Avatar, Button, Input } from '@material-ui/core';
import "./css/QuoraHeader.css"
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css'

function QuoraHeader() {

  const [isModalOpen,setIsModalOpen]= useState(false);
  const [inputUrl, setInputUrl] = useState("")
  const Close = <CloseIcon/>

  return (
    <div className='qHeader'>
       <div className='qHeader-content'>
          <div className='qHeader__logo'>
            <img src='https://cdn.vox-cdn.com/thumbor/DyzKJpwYo6X0AlnalkJemtDvVTs=/0x0:2182x1455/1400x933/filters:focal(917x554:1265x902):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62619674/quora.0.jpg' alt="logo" />
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
                   <Avatar/>
            
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
                    <Avatar className='avatar' />
                    <div className='modal__scope'>
                      <PeopleAltOutlined/>
                      <p>Public</p>
                      <ExpandMore/>
                    </div>
                  </div>
                  <div className='modal__Field'>
                    <Input type="text" placeholder= "Start your question with What,How, why etc"/>
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
                        placeholder= "Optional: include a link that gives context"/>

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
                    <button type="submit" className='add' >
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