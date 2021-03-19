import {
  ROUTE_GRAL,
  ROUTE_GAMES,
  ROUTE_BOOKS,
  ROUTE_MUSIC,
  ROUTE_MOVIES,
} from "../../../Integration/Router/Routes/Routes";
import General from "../../Pages/General";

const sections = [
  {
    title: "General",
    uri: ROUTE_GRAL,
    component: <General role="feed" />,
  },
  {
    title: "Games",
    uri: ROUTE_GAMES,
    component: <></>,
  },
  {
    title: "Books",
    uri: ROUTE_BOOKS,
    component: <></>,
  },
  {
    title: "Music",
    uri: ROUTE_MUSIC,
    component: <></>,
  },
  {
    title: "Movies",
    uri: ROUTE_MOVIES,
    component: <></>,
  },
];

export default sections;
