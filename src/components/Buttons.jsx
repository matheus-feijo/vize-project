import { Button, makeStyles } from "@material-ui/core";
import { styled } from "@material-ui/styles";


export const StyledButton = styled(Button)({
        borderRadius:"100px",
        height: "40px",
        padding: "10px 24px",
        background: "#00639C",
        color:"#FFFFFF",
        textTransform:"none",
        fontWeight:"500",
        "&:hover":{
            background: "#00639C",

        }
});

