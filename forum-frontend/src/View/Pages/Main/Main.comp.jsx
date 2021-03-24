import PropTypes from "prop-types";
import TopicBar from "../../Components/TopicBar/TopicBar.comp";
import MainFeaturedPost from "../../Components/MainFeaturedPost";
import { mainPost } from "../../Content";
import TopicsSwitch from "../../Components/TopicsHandler";

export default function Main({ topics = [] }) {
  return (
    <>
      <TopicBar topics={topics} />
      <TopicsSwitch
        topics={topics}
        defaultTopic={<MainFeaturedPost post={mainPost} />}
      />
    </>
  );
}

Main.propTypes = {
  topics: PropTypes.array,
};
