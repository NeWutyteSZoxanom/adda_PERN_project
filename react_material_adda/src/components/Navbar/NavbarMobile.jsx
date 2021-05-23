import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import ChatBubbleOutlineTwoToneIcon from '@material-ui/icons/ChatBubbleOutlineTwoTone';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import Badge from '@material-ui/core/Badge';
import { NavLink } from 'react-router-dom';

const NavbarMobile = () => {
  return (
    <div className="navbar_conta">
      <div>
        <img src="./assets/logo.png" />
      </div>

      <NavLink to="/">
        <Badge badgeContent={4} color="error">
          <HomeOutlinedIcon fontSize="small" color="action" />
        </Badge>
      </NavLink>

      <NavLink to="/profile" className="nav_link">
        <NotificationsActiveOutlinedIcon fontSize="small" color="action" />
      </NavLink>

      <NavLink to="/notification" className="nav_link">
        <Badge badgeContent={5} color="error">
          <ChatBubbleOutlineTwoToneIcon fontSize="small" color="action" />
        </Badge>
      </NavLink>

      {/* <div>
        <IconButton>
          <PeopleAltOutlinedIcon />
        </IconButton>
      </div>
      <div>
        <IconButton>
          <NotificationsActiveOutlinedIcon />
        </IconButton>
      </div>
      <div>
        <IconButton>
          <ChatBubbleOutlineTwoToneIcon />
        </IconButton>
      </div>
      <div>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </div> */}
      <div>
        <Avatar />
      </div>
    </div>
  );
};

export default NavbarMobile;
