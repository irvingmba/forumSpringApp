import PropTypes from "prop-types";
import TopicBar from "../../Components/TopicBar/TopicBar.comp";
import MainFeaturedPost from "../../Components/MainFeaturedPost";
import { mainPost } from "../../Content";
import TopicsSwitch from "../../Components/TopicsHandler";
import AddPost from "../../Components/AddPost/AddPost";

export default function Main({ topics = [] }) {
  return (
    <>
      <TopicBar topics={topics} />
      <TopicsSwitch
        topics={topics}
        defaultTopic={<MainFeaturedPost post={mainPost} />}
      />
      <AddPost />
    </>
  );
}

Main.propTypes = {
  topics: PropTypes.array,
};
