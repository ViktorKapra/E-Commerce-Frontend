import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router";
import { PC, XBOX, PLAYSTATION, PRODUCT_PAGE } from "@/routing/links";
import ARROW from "@/assets/images/icons/arrowDrop.svg";
import * as styles from "./productDropDownMenu.m.scss";

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
      navigate(`${PRODUCT_PAGE}/${selectedValue}`);
    }
  };

  return (
    <>
      <button className={styles.generalButton} type="button" onClick={handleClick}>
        Products
        <img className={styles.arrow} src={ARROW} alt="arrow-down" />
      </button>
      <Menu
        id="product-category-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#121212",
          },
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem sx={{ color: "#dee5ed" }} onClick={() => handleSelect(PC)}>
          PC
        </MenuItem>
        <MenuItem sx={{ color: "#dee5ed" }} onClick={() => handleSelect(PLAYSTATION)}>
          Playstaion 5
        </MenuItem>
        <MenuItem sx={{ color: "#dee5ed" }} onClick={() => handleSelect(XBOX)}>
          Xbox
        </MenuItem>
      </Menu>
    </>
  );
}
