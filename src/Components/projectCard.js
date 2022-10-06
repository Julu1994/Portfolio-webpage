import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { AiFillGithub } from "react-icons/ai";
import { MdLiveTv } from "react-icons/md";

const ProjectCard = (props) => {
    const { name, details, url, demo, github } = props;
    return (
        <Card
            sx={{
                maxWidth: 225,
                borderTopRightRadius: "2rem",
                borderBottomLeftRadius: "2rem",
                backgroundColor: "#F8F8FF",
            }}>
            <CardMedia
                component="img"
                height="120"
                image={url}
                alt="green iguana"
            />
            <CardContent sx={{ mt: "0", pt: "0", pb: "0", mb: "0" }}>
                <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ mt: "0", mb: "0", pt: "0", pb: "0" }}>
                    {name}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: "0", pt: "0" }}>
                    {details}
                </Typography>
            </CardContent>
            <CardActions
                sx={{ display: "flex", justifyContent: "space-around" }}>
                <IconButton size="small">
                    <a href={github}>
                        <AiFillGithub size={25} color="#FFA500" />
                    </a>
                </IconButton>

                <IconButton size="small">
                    <a href={demo}>
                        <MdLiveTv size={25} color="#FFA500" />
                    </a>
                </IconButton>
            </CardActions>
        </Card>
    );
};
export default ProjectCard;
