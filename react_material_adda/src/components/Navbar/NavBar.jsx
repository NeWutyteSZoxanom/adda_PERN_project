import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import NavbarMobile from './NavbarMobile';
import { NavLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'secondary',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className="navbar ">
      <Container fixed>
        <div>
          {isMatch ? (
            <NavbarMobile />
          ) : (
            <div className="navbar_conta">
              <div className="span_nav">
                <a>
                  <span className="span_menyu">
                    <Badge badgeContent={4} color="error">
                      <NavLink to="/" className="nav_link">
                        Home
                      </NavLink>
                    </Badge>
                  </span>
                </a>

                <a>
                  <span className="span_menyu">
                    <NavLink to="/profile" className="nav_link">
                      Profile
                    </NavLink>
                  </span>
                </a>
                <a>
                  <span className="span_menyu">
                    <Badge badgeContent={100} color="error">
                      <NavLink to="/notification" className="nav_link">
                        Notification
                      </NavLink>{' '}
                    </Badge>
                  </span>
                </a>
              </div>

              <div>
                <img src="./assets/logo.png" />
              </div>
              <div className="serch_icon_ava">
                <div>
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      color="secondary"
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </div>
                </div>
                <div>
                  <Avatar />
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
