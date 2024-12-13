import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router";
import { PC, XBOX, PLAYSTATION, PRODUCT_PAGE } from "@/routing/links";
import clsx from "clsx";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const handleSelect = (selectedValue: string) => {
    handleClose();
    console.log("Product category", selectedValue, "was selected");
    if (selectedValue) {
      navigate(clsx(PRODUCT_PAGE, "/", selectedValue));
    }
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        sx={{ color: "#dee5ed" }}
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Products
      </Button>
      <Menu
        id="product-category-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem sx={{ color: "#dee5ed", backgroundColor: "#121212" }} onClick={() => handleSelect(PC)}>
          PC
        </MenuItem>
        <MenuItem sx={{ color: "#dee5ed", backgroundColor: "#121212" }} onClick={() => handleSelect(PLAYSTATION)}>
          Playstaion 5
        </MenuItem>
        <MenuItem sx={{ color: "#dee5ed", backgroundColor: "#121212" }} onClick={() => handleSelect(XBOX)}>
          Xbox
        </MenuItem>
      </Menu>
    </>
  );
}
