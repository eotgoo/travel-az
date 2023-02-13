import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { NavLink } from "react-router-dom";
import Modal from "@mui/material/Modal";
import "@fontsource/roboto/500.css";
import AuthPage from "../../Pages/Auth";
import { UserContext } from "../../Context";
import { useContext } from "react";
const pages = [
  { name: "Home", href: "/" },
  { name: "Stays", href: "/stays" },
  { name: "Flights", href: "/flights" },
  { name: "Packages", href: "/packages" },
  { name: "Add Category", href: "/addCategory" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { logout, openModal, handleClose, handleOpen, login, user } =
    useContext(UserContext);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{
        background: "transparent",
        position: "absolute",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TravelExploreIcon
            sx={{ display: { xs: "none", md: "flex", color: "#fff" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Trxvl.
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <NavLink
                    to={`${page.href}`}
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <TravelExploreIcon
            variant="h5"
            sx={{ display: { xs: "flex", md: "none", color: "#fff" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Trxvl.
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, i) => (
              <Button
                key={i}
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: "#fff", display: "block" }}
              >
                <NavLink to={`${page.href}`} style={{ textDecoration: "none" }}>
                  <Typography color="#fff">{page.name}</Typography>
                </NavLink>
              </Button>
            ))}
          </Box>
          <Box>
            <Box>
              {user ? (
                <Button
                  onClick={() => {
                    logout();
                  }}
                  sx={{
                    padding: "0",
                    fontWeight: "700",
                    fontSize: "16px",
                    color: "#fff",
                    textTransform: "none",
                    marginLeft: "2vw",
                    opacity: "0.8",
                  }}
                >
                  Sign Out
                </Button>
              ) : (
                <Button
                  onClick={handleOpen}
                  sx={{
                    padding: "0",
                    fontWeight: "700",
                    fontSize: "16px",
                    color: "#fff",
                    textTransform: "none",
                    marginLeft: "2vw",
                    opacity: "0.8",
                  }}
                >
                  Sign In
                </Button>
              )}
              <Modal open={openModal} onClose={handleClose}>
                <AuthPage handleClose={handleClose} login={login} />
              </Modal>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
