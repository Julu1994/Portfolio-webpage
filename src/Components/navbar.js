import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { FaHamburger } from "react-icons/fa";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { SiPolywork } from "react-icons/si";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import {
    AiFillHome,
    AiFillCodeSandboxCircle,
    AiFillContacts,
    AiFillProfile,
} from "react-icons/ai";
import { IconButton } from "@mui/material";

const Navbar = () => {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{
                width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AiFillHome size={25} color="#1de9b6" />
                        </ListItemIcon>
                        <ListItemText primary={"Home"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ mt: "1rem" }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <SiPolywork size={25} color="#ff4081" />
                        </ListItemIcon>
                        <ListItemText primary={"Projects"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ mt: "1rem" }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <AiFillCodeSandboxCircle
                                size={25}
                                color="#ef6c00"
                            />
                        </ListItemIcon>
                        <ListItemText primary={"Tech-Stacks"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ mt: "1rem" }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <BsFillEmojiSmileFill size={25} color="#1e88e5 " />
                        </ListItemIcon>
                        <ListItemText primary={"Feedback"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ mt: "1rem" }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <AiFillContacts size={25} color="#d500f9" />
                        </ListItemIcon>
                        <ListItemText primary={"Contact"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ mt: "1rem" }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <AiFillProfile size={25} color="#00c853 " />
                        </ListItemIcon>
                        <ListItemText primary={"Resume"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div style={{ position: "absolute", top: "3%", right: "3%" }}>
            <IconButton
                sx={{ backgroundColor: "#00c853" }}
                onClick={toggleDrawer("left", true)}>
                <FaHamburger size={30} color="#ede7f6 " />
            </IconButton>
            <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}>
                {list("left")}
            </Drawer>
        </div>
    );
};
export default Navbar;
