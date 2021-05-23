import React, { useEffect, useRef, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ForwardIcon from '@material-ui/icons/Forward';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { getByDisplayValue } from '@testing-library/dom';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },

  paper: {
    marginRight: theme.spacing(2),
  },
}));

const SecondColumnNews = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <Paper elevation={3} square className="paper_send_news_secund">
      <div className="paper_send_news_menu">
        <div className="paper_send_news_menu">
          <div>
            <Avatar src="/assets/profile-small-37.jpg" className={classes.large}></Avatar>
          </div>
          <div>
            <h3 className="paper_send_news_menu_profile">Merry Watson</h3>
            <p className="paper_send_news_menu_profile">20 min ago</p>
          </div>
        </div>

        {/* <div className="paper_send_news_menu_list">
          <div>
            <Button
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}>
              <MenuIcon />
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                  }}>
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}>
                        <MenuItem onClick={handleClose}>Copy Link </MenuItem>
                        <MenuItem onClick={handleClose}>Edit Post</MenuItem>
                        <MenuItem onClick={handleClose}>LEmbed Adda</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </div> */}
      </div>
      <div>
        <p className="p_margin">
          Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
          model text, and a search for 'lorem ipsum' will uncover many web sites still in their
          infancy.
        </p>
      </div>
      <div className="news_banner_small">
        <img src="/assets/post-1.jpg" />
      </div>
      {isMatch ? (
        <div className="bottom_comment">
          <div className="bottom_comment_sploit">
            <FavoriteBorderOutlinedIcon />
          </div>
          <div>45</div>
          <div className="bottom_comment_sploit">
            <ForumOutlinedIcon />
          </div>
          <div>45</div>
          <div className="bottom_comment_sploit">
            <ShareOutlinedIcon />
          </div>
          <div>45</div>
        </div>
      ) : (
        <div className="bottom_comment">
          <div className="bottom_comment_sploit">
            <FavoriteBorderOutlinedIcon />
            <p className="bottom_comment_sploit">You and 206 people like this</p>
          </div>

          <div className="bottom_comment_sploit">
            <ForumOutlinedIcon />
            <p>45</p>
          </div>

          <div className="bottom_comment_sploit">
            <ShareOutlinedIcon />
            <p>45</p>
          </div>
        </div>
      )}
    </Paper>
  );
};

export default SecondColumnNews;
