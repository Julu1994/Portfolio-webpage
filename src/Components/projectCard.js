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
                borderTopRightRadius: "2rem",
                borderBottomLeftRadius: "2rem",
                backgroundColor: "#F8F8FF",
                maxWidth: {
                    xs: 170,
                    md: 180,
                    lg: 225,
                },
            }}>
            <CardMedia
                component="img"
                image={url}
                alt="green iguana"
                sx={{
                    height: {
                        xs: 80,
                        md: 100,
                        lg: 120,
                        xl: 140,
                    },
                }}
            />
            <CardContent sx={{ mt: "0", pt: "0", pb: "0", mb: "0" }}>
                <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                        mt: "0",
                        mb: "0",
                        pt: "0",
                        pb: "0",
                        textAlign: "center",
                        fontSize: { xs: ".9rem", md: "1.2rem", lg: "1.1rem" },
                    }}>
                    {name}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        mt: "0",
                        pt: "0",
                        textAlign: "center",
                        fontSize: { xs: ".7rem", md: ".8rem", lg: "1rem" },
                        width: {
                            xs: 140,
                            md: 150,
                            lg: 210,
                        },
                        height: {
                            xs: 20,
                            md: 25,
                            lg: 45,
                        },
                    }}>
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
