import Login from "../components/login-form";
import PlayerDashboard from "../components/PlayerDashboard";
import PlayerState from "../components/playerState";
import Register from "../components/sign-up-form";

const PathAuth = {
  Login: "/login",
  Register: "/register",
};

const PathDashboard = {
  PlayerTable:"/playerlist",
  PlayerState:"/playerstats/:id",
};

const Path = {
  // No layout
  Root: "/", // This redirect to Login

  // Auth layout
  ...PathAuth,

  ...PathDashboard,

  NotFound: "/not-found",
};

const ProtectedRoutes = [
  {
    element: <PlayerDashboard />,
    path: Path.PlayerTable,
    name: "Player dashhboard",
    subRoute: [],
    showInSidebar: true,
  },
  {
    element: <PlayerState />,
    path: Path.PlayerState,
    name: "Player State",
    subRoute: [],
    showInSidebar: true,
  },
];

const PublicRoutes = [
  {
    element: <Login />,
    path: Path.Login,
    name: "Login",
    subRoute: [],
  },
  {
    element: <Register />,
    path: Path.Register,
    name: "Register",
    subRoute: [],
  },
];

export { ProtectedRoutes, PublicRoutes };

export default Path;
