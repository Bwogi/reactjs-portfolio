import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import ProfileCard from '../ProfileCard'
import ProfileImage from '../../assets/images/ProfilePic.jpg'
import Timeline from '../BasicTimeline'

import React from 'react'

const Profile = () => {
  return (
    <div className="profile container-shadow">
      <div className="profile-name">
        <Typography className="name">Andrew Bwogi</Typography>
        <Typography className="title">Fullstack Web Developer</Typography>
      </div>

      <figure className="profile-image">
          <img src={ProfileImage}/>
      </figure>

      <div className="profile-information">
        Insert timeline here
        <br />
        <button>the button</button>
      </div>
      
    </div>
  )
}

export default Profile
