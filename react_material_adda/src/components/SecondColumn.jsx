import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import SecondColumnNews from './SecondColumnNews';
import AddCommentOutlinedIcon from '@material-ui/icons/AddCommentOutlined';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import grey from '@material-ui/core/colors/grey';
import IconButton from '@material-ui/core/IconButton';

const deepOra = grey[400]; // #f44336

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
const SecondColumn = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper elevation={3} square className="paper_send_news">
        <div>
          <Avatar src="/assets/profile-small-37.jpg" className={classes.large}></Avatar>
        </div>
        <TextField
          id="standard-full-width"
          label="What's news"
          style={{ margin: 8 }}
          placeholder="Say Something"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <div>
          <IconButton>
            <AddCommentOutlinedIcon style={{ color: deepOra, fontSize: 30 }} />
          </IconButton>
        </div>
      </Paper>

      <SecondColumnNews />
    </div>
  );
};

export default SecondColumn;
