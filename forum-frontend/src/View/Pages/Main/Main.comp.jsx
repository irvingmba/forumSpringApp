import PropTypes from "prop-types";
import TopicBar from "../../Components/TopicBar/TopicBar.comp";
import MainFeaturedPost from "../../Components/MainFeaturedPost";
import { Route, Switch } from "react-router-dom";
import { mainPost } from "../../Content";

export default function Main({ topics = [] }) {
  return (
    <>
      <TopicBar topics={topics} />
      <Switch>
        {topics.length &&
          topics.map(({ uri, component }, index) => (
            <Route key={uri + index} path={uri}>
              {component || null}
            </Route>
          ))}
        <Route>
          <MainFeaturedPost post={mainPost} />
        </Route>
      </Switch>
    </>
  );
}

Main.propTypes = {
  topics: PropTypes.array,
};
