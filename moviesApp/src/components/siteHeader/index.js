import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import "./menu.scss"
import { useAuth } from "../../contexts/authContext";

const Offset = styled('div')(({ theme, clickHandler}) => theme.mixins.toolbar);

const SiteHeader = ({ history }) => {
  const navigate = useNavigate();

  const { currentUser } = useAuth()

  const menuOptions = (currentUser) ? [
    { label: "Home", paths: [{label:"Home", path:"/"}] },
    { label: "Discover", paths: [{label: "Movies", path:"/movies"}, {label:"Shows", path:"/shows"}] },
    { label: "Favourites", paths: [{label: "Movies", path:"/movies/favourites"}, {label:"Shows", path:"/shows"}] },
    { label: "Upcoming", paths: [{label: "Movies", path:"/movies/upcoming/1"}, {label:"Shows", path:"/shows"}] },
    { label: "Account", paths: [{label:"Details", path:"/account"}, {label: "Log out", path:"/logout"}] },
  ] : [];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL, { replace: true });
  };

  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            Movie Catalogue
          </Typography>
          <SiteMenu menuOptions={menuOptions} clickHandler={handleMenuSelect}></SiteMenu>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

const SiteMenu = ({menuOptions, clickHandler}) => {
  return (
    <nav className="nav">
      <ul className="nav__menu">
        {menuOptions.map((menuOption) => {
          if (menuOption.paths.length === 0) {
            return null;
          } else if (menuOption.paths.length === 1) {
            return (
              <li className="nav__menu-item" key={menuOption.label}>
                <button onClick={() => clickHandler(menuOption.paths[0].path)}>{menuOption.label}</button>
              </li>
            );
          } else {
            return (
              <li className="nav__menu-item" key={menuOption.label}>
                <button>{menuOption.label}</button>
                <ul className="nav__submenu">
                  {menuOption.paths.map((path) => {
                    return (
                      <li className="nav__submenu-item" key={path.label}>
                        <button onClick={() => clickHandler(path.path)}>{path.label}</button>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default SiteHeader;