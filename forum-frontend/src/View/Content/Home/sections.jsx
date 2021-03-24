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
  },
  {
    title: "Games",
    uri: ROUTE_GAMES,
  },
  {
    title: "Books",
    uri: ROUTE_BOOKS,
  },
  {
    title: "Music",
    uri: ROUTE_MUSIC,
  },
  {
    title: "Movies",
    uri: ROUTE_MOVIES,
  },
];

export default sections;
