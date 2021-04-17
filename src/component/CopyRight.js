import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom'

function CopyRight() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright ©  "}
            <Link color="inherit" href="https://material-ui.com/">
                M Shopping World
        </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export default CopyRight