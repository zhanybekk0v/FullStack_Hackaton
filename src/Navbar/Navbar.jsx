import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InventoryIcon from '@mui/icons-material/Inventory';
import MoreIcon from "@mui/icons-material/MoreVert";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const { user, checkAuth , handleLogOut} = useAuth()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (localStorage.getItem('tokens')) {
      checkAuth()
    }
  }, [])

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEm, setAnchorEm] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMenuOpen2 = Boolean(anchorEm);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProfileMenuOpen2 = (event) => {
    setAnchorEm(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setAnchorEm(null)
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to='/login'>
        <MenuItem onClick={handleMenuClose} sx={{ textDecoration: 'none' }}>Login</MenuItem>
      </Link>
      <Link to='/register'>
        <MenuItem onClick={handleMenuClose}>Register</MenuItem>
      </Link>
      <MenuItem onClick={() => {handleMenuClose(); handleLogOut()}}>LogOut</MenuItem>
    </Menu>




  );
  const renderProduct = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen2}
      onClose={handleMenuClose}
    >
      <Link to='/products'>
        <MenuItem onClick={handleMenuClose} sx={{ textDecoration: 'none' }}>Products</MenuItem>
      </Link>
      <Link to='/admin'>
        <MenuItem onClick={handleMenuClose}>AddProduct</MenuItem>
      </Link>
    </Menu>
  );

  <div
    class="item carousel-img active "
    style="background-image:linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(/img/home/slider/slider_0.jpg)"
  ></div>;
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to='/cart' onClick={handleMenuClose}>
        <MenuItem >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <LocalGroceryStoreIcon />
          </IconButton>
          <p>Cart</p>
        </MenuItem>
      </Link>
      <MenuItem onClick={handleProfileMenuOpen2}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <InventoryIcon />
        </IconButton>
        <p>Products</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <Box
              sx={{
                marginRight: "20px",
              }}
            >
              <img
                style={{
                  width: "40px",
                  height: "40px",
                }}
                src="https://rentik.kg/img/logo/rentik_logo_60.png"
              />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              RENTIK
            </Typography>

            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: 'white' }} />
              </SearchIconWrapper>
              <StyledInputBase
                sx={{ backgroundColor: '#d2d2d2', color: 'black', borderRadius: '30px', boxShadow: '2px 1px 7px grey', paddingRight: '50px' }}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 3 }} />
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: 'center' }}>
              <Typography >   {user ? user : 'No auth user'}</Typography>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge color="error">
                  <Link to='/cart'>
                    <LocalGroceryStoreIcon />
                  </Link>
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                aria-haspopup="true"
                onClick={handleProfileMenuOpen2}
                color="inherit"
              >
                <InventoryIcon />
              </IconButton>

              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        {renderProduct}
      </Box>
    </>
  );
}
