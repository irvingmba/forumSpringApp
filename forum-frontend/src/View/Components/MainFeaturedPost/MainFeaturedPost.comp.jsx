import { Grid, Link, Paper, Typography } from "@material-ui/core";
import styles from "./materialStyles";

export default function MainFeaturedPost({ post }) {
  const classes = styles();

  return (
    post && (
      <Paper role="article" className={classes.mainFeaturedPost}>
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                {post.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {post.description}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
    )
  );
}
