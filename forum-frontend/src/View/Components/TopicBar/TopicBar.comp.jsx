import { Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./materialStyles";

export default function TopicBar({ topics }) {
  const classes = styles();

  return (
    <>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {topics &&
          topics.map((topic, index) => (
            <Link
              key={topic.title + index}
              to={topic.uri}
              className={classes.toolbarLink}
            >
              <Typography
                color="inherit"
                noWrap
                variant="body2"
              >
                {topic.title}
              </Typography>
            </Link>
          ))}
      </Toolbar>
    </>
  );
}
