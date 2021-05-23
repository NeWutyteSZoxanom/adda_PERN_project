import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FirstColumnMobile from './FirstColumnMobile';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';

const FirstColumn = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div>
      <Paper elevation={3} square>
        <a className="profill_banner_small" href="/">
          <img src="./assets/banner-small.jpg" />
        </a>
        <div className="profill_banner_down">
          <h3>Dimbel Lebmid</h3>

          <p>
            Any one can join with but Social network us if you want Any one can join with us if you
            want
          </p>
        </div>
      </Paper>
      {isMatch ? (
        <FirstColumnMobile />
      ) : (
        <Paper elevation={3} square className="paper_send_news_third_sec">
          <div className="friend_maybe_h">
            <h3>Page You May Like</h3>
          </div>
          <div className="friend_maybe_like">
            <div>
              <Avatar src="/assets/profile-small-33.jpg"></Avatar>
            </div>
            <div className="friend_maybe_info">
              <h4>Travel The World </h4>
              <p className="friend_maybe_info_p">Adventure</p>
            </div>
            <div className="friend_maybe_info">
              <FavoriteBorderOutlinedIcon />
            </div>
          </div>
          <div className="friend_maybe">
            <div>
              <Avatar src="/assets/profile-small-30.jpg"></Avatar>
            </div>
            <div className="friend_maybe_info">
              <h4>Foodcort Nirala</h4>
              <p className="friend_maybe_info_p">Food</p>
            </div>
            <div className="friend_maybe_info">
              <FavoriteOutlinedIcon />
            </div>
          </div>
          <div className="friend_maybe">
            <div>
              <Avatar src="/assets/profile-small-5.jpg"></Avatar>
            </div>
            <div className="friend_maybe_info">
              <h4>Rolin Theitar</h4>
              <p className="friend_maybe_info_p">Drama</p>
            </div>
            <div className="friend_maybe_info">
              <FavoriteBorderOutlinedIcon />
            </div>
          </div>
        </Paper>
      )}
    </div>
  );
};

export default FirstColumn;
