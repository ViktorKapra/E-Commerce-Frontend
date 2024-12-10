import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router";
import { PC, XBOX, PLAYSTATION } from "@/routing/links";

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
      navigate(`/products/${selectedValue}`);
    }
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
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
        <MenuItem onClick={() => handleSelect(PC)}>PC</MenuItem>
        <MenuItem onClick={() => handleSelect(PLAYSTATION)}>Playstaion 5</MenuItem>
        <MenuItem onClick={() => handleSelect(XBOX)}>Xbox</MenuItem>
      </Menu>
    </>
  );
}
