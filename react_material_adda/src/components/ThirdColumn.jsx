import React from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

const ThirdColumn = () => {
  return (
    <>
      <Paper elevation={3} square className="paper_send_news_third">
        <div className="friend_maybe_h">
          <h3>Recent Notifications</h3>
        </div>
        <div className="friend_maybe">
          <div>
            <Avatar src="/assets/profile-small-9.jpg"></Avatar>
          </div>
          <div className="friend_maybe_info">
            <h4>Any one can join with us if you want</h4>
            <p className="friend_maybe_info_p">5 Min Ago</p>
          </div>
        </div>
        <div className="friend_maybe">
          <div>
            <Avatar src="/assets/profile-small-35.jpg"></Avatar>
          </div>
          <div className="friend_maybe_info">
            <h4>Any one can join with us if you want</h4>
            <p className="friend_maybe_info_p">5 Min Ago</p>
          </div>
        </div>
        <div className="friend_maybe">
          <div>
            <Avatar src="/assets/profile-small-15.jpg"></Avatar>
          </div>
          <div className="friend_maybe_info">
            <h4>Any one can join with us if you want</h4>
            <p className="friend_maybe_info_p">5 Min Ago</p>
          </div>
        </div>
      </Paper>
      <Paper elevation={3} square className="paper_send_news_third_sec">
        <div className="friend_maybe_h_padding">
          <h3>Advertizement</h3>
          <img src="/assets/advertise.jpg" alt="" />
        </div>
      </Paper>
    </>
  );
};

export default ThirdColumn;
