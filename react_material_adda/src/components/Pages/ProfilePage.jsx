import React from 'react';
import Grid from '@material-ui/core/Grid';
import FirstColumn from '../FirstColumn';
import SecondColumn from '../SecondColumn';
import ThirdColumn from '../ThirdColumn';

const ProfilePage = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} lg={3}>
          <FirstColumn />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <SecondColumn />
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <ThirdColumn />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfilePage;
