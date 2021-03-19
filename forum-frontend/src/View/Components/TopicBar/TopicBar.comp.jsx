import { Link, Toolbar } from "@material-ui/core";
import styles from "./materialStyles";

export default function TopicBar({topics}) {
  const classes = styles();

  return (
    <>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {topics && topics.map((topic) => (
          <Link
            role="link"
            color="inherit"
            noWrap
            key={topic.topic}
            variant="body2"
            href={topic.url}
            className={classes.toolbarLink}
          >
            {topic.topic}
          </Link>
        ))}
      </Toolbar>
    </>
  );
}
