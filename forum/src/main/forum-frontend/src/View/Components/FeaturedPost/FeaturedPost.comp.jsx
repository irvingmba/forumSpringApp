import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getCommentsAction } from "../../../Integration/Sagas/GetComments";

import { isObject } from "../../../Utils/Validators/functions";
import styles from "./materialStyles";

export default function FeaturedPost({ post = {} }) {
  const classes = styles();

  if (!isObject(post)) throw new TypeError("Post should be a proper object");

  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (post.link) {
      history.push(location.pathname + "/" + post.link);
      dispatch(getCommentsAction(post));
    }
  };

  return (
    <Grid role="article" item xs={12}>
      <CardActionArea onClick={handleClick}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.author}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {post.p_date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              {post.link && (
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              )}
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
    link: PropTypes.string,
  }),
};
