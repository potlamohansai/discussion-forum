import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import {AssignmentTurnedInOutlined, PeopleAltOutlined, NotificationsOutlined, Search} from '@material-ui/icons';
import { Avatar, Button } from '@material-ui/core';
import "./css/QuoraHeader.css"

function QuoraHeader() {
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
                </div>
                <Button>Add Question</Button>
        </div>
    </div>
  )
}

export default QuoraHeader