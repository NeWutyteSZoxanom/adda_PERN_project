import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Badge from '@material-ui/core/Badge';
import MoreIcon from '@material-ui/icons/MoreVert';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const useStyles = makeStyles((them) => ({
  root: {
    padding: '2px px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: them.spacing(1),
    flex: 1,
  },

  divider: {
    height: 28,
    margin: 4,
  },
}));
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

function ModalChat() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Paper elevation={3} square className="paper_friends_paper" onClick={handleClickOpen}>
        <div className="paper_friends_paperpaper">
          <div>
            <Badge
              color="primary"
              variant="dot"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}>
              <Avatar src="/assets/profile-small-9.jpg"></Avatar>
            </Badge>
          </div>
          <div className="paper_friends_paper_pp">
            <h4>William Henry</h4>
            <span className="paper_friends_paper_p">Last massage</span>
          </div>
          <div></div>
        </div>
      </Paper>

      {isMatch ? (
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <div>
            <Paper elevation={3} square className="paper_friends_chat">
              <div className="paper_friends_chat_header">
                <div className="paper_friends_chat_header_info">
                  <div>
                    <Avatar src="/assets/profile-small-9.jpg"></Avatar>
                  </div>
                  <div className="paper_friends_paper_pp">
                    <h4>William Henry</h4>
                    <span className="paper_friends_paper_p">Online</span>
                  </div>
                </div>

                {/* tyt oshibka */}
                <div>
                  <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                </div>
              </div>

              <div>
                <ul id="chat_mobile">
                  <li className="you">
                    <div className="entete">
                      <span className="status green"></span>
                      <h2>Vincent</h2>
                      <h3>10:12AM, Today</h3>
                    </div>
                    <div className="message">Lorem ipsum dolor sit amet.</div>
                  </li>
                  <li className="me">
                    <div className="entete">
                      <h3>10:12AM, Today</h3>
                      <h2>Vincent</h2>
                      <span className="status blue"></span>
                    </div>
                    <div className="message">Lorem, ipsum dolor.</div>
                  </li>
                </ul>
              </div>
              <div>
                <Paper component="form" className={classes.root}>
                  <InputBase
                    className={classes.input}
                    placeholder="Send massage"
                    inputProps={{ 'aria-label': 'search google maps' }}
                  />
                  <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <AttachFileOutlinedIcon />
                  </IconButton>
                  <Divider className={classes.divider} orientation="vertical" />

                  <IconButton type="submit" className={classes.iconButton}>
                    <SendOutlinedIcon />
                  </IconButton>
                </Paper>
              </div>
            </Paper>
          </div>
        </Dialog>
      ) : (
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <Paper elevation={3} square className="paper_friends_chat">
            <div className="paper_friends_chat_header">
              <div className="paper_friends_chat_header_info">
                <div>
                  <Avatar src="/assets/profile-small-9.jpg"></Avatar>
                </div>
                <div className="paper_friends_paper_pp">
                  <h4>William Henry</h4>
                  <span className="paper_friends_paper_p">Online</span>
                </div>
              </div>

              {/* tyt oshibka */}
              <div>
                <IconButton>
                  <DeleteOutlinedIcon />
                </IconButton>
                <IconButton>
                  <MoreIcon />
                </IconButton>
                <IconButton
                  aria-label="close"
                  className={classes.closeButton}
                  onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </div>
            </div>

            <div>
              <ul id="chat">
                <li className="you">
                  <div className="entete">
                    <span className="status green"></span>
                    <h2>Vincent</h2>
                    <h3>10:12AM, Today</h3>
                  </div>
                  <div className="message">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                    eget dolor.
                  </div>
                </li>
                <li className="me">
                  <div className="entete">
                    <h3>10:12AM, Today</h3>
                    <h2>Vincent</h2>
                    <span className="status blue"></span>
                  </div>
                  <div className="message">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquid
                    quo, aliquam dolorum nesciunt qui placeat perspiciatis optio ut corrupti
                    architecto exercitationem fugit, incidunt sed laborum voluptatum porro eligendi,
                    illo eaque quos mollitia omnis delectus commodi sit. Corrupti, nam rem culpa est
                    in commodi ex molestias qui a, aut numquam.
                  </div>
                </li>
                <li className="you">
                  <div className="entete">
                    <span className="status green"></span>
                    <h2>Vincent</h2>
                    <h3>10:12AM, Today</h3>
                  </div>
                  <div className="message">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                    eget dolor.
                  </div>
                </li>
                <li className="me">
                  <div className="entete">
                    <h3>10:12AM, Today</h3>
                    <h2>Vincent</h2>
                    <span className="status blue"></span>
                  </div>
                  <div className="message">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquid
                    quo, aliquam dolorum nesciunt qui placeat perspiciatis optio ut corrupti
                    architecto exercitationem fugit, incidunt sed laborum voluptatum porro eligendi,
                    illo eaque quos mollitia omnis delectus commodi sit. Corrupti, nam rem culpa est
                    in commodi ex molestias qui a, aut numquam.
                  </div>
                </li>
                <li className="you">
                  <div className="entete">
                    <span className="status green"></span>
                    <h2>Vincent</h2>
                    <h3>10:12AM, Today</h3>
                  </div>
                  <div className="message">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                    eget dolor.
                  </div>
                </li>
                <li className="me">
                  <div className="entete">
                    <h3>10:12AM, Today</h3>
                    <h2>Vincent</h2>
                    <span className="status blue"></span>
                  </div>
                  <div className="message">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquid
                    quo, aliquam dolorum nesciunt qui placeat perspiciatis optio ut corrupti
                    architecto exercitationem fugit, incidunt sed laborum voluptatum porro eligendi,
                    illo eaque quos mollitia omnis delectus commodi sit. Corrupti, nam rem culpa est
                    in commodi ex molestias qui a, aut numquam.
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <Paper component="form" className={classes.root}>
                <InputBase
                  className={classes.input}
                  placeholder="Send massage"
                  inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                  <AttachFileOutlinedIcon />
                </IconButton>
                <Divider className={classes.divider} orientation="vertical" />

                <IconButton type="submit" className={classes.iconButton}>
                  <SendOutlinedIcon />
                </IconButton>
              </Paper>
            </div>
          </Paper>
        </Dialog>
      )}
    </div>
  );
}
export default ModalChat;
