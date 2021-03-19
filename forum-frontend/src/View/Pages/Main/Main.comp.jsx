import { Container, Link, makeStyles, Toolbar } from "@material-ui/core";
import TopicBar from "../../Components/TopicBar/TopicBar.comp";
import { topicRoutes } from "../../../Integration/Router/Routes";

export default function Main() {
  return (
    <>
      <TopicBar topics={topicRoutes} />
    </>
  );
}
