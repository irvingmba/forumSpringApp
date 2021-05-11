import PropTypes from "prop-types";
import TopicBar from "../../Components/TopicBar/TopicBar.comp";
import MainFeaturedPost from "../../Components/MainFeaturedPost";
import { mainPost } from "../../Content";
import TopicsSwitch from "../../Components/TopicsHandler";
import { useSelector } from "react-redux";

export default function Main({ topics = [] }) {

  const topicState = useSelector(state=>{
    return state.data.topics;
  });

  return (
    <>
      <TopicBar topics={topicState} />
      <TopicsSwitch
        topics={topicState}
        defaultTopic={<MainFeaturedPost post={mainPost} />}
      />
    </>
  );
}

Main.propTypes = {
  topics: PropTypes.array,
};
