import { FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel, makeStyles } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles(()=>({
    content:{
        backgroundColor:" #DEE3EB",
        borderRadius:"4px 4px 0px 0px",
    },
    container:{
        display: "grid",
        gap:"20px"
        
    },
    text:{
        padding: "4px 0px 4px 20px",
    },
    helperText:{
        background: "#ffff",
    },
    ButtonIcon:{
        marginBottom:"8px",
    },

    icon:{
        fill:"black",
    }
}))

export function StyledInput(props){
    const formErrors = props.formErrors;
    const formValues = props.formValues;
    const handleChange = props.handleChange;
    const name = props.name;

    const classes = useStyles();
    
    return(
        <FormControl className={classes.content} fullWidth>
            <InputLabel htmlFor="filled-adornment" className={classes.text} error={Boolean(formErrors.email)}>{
                name === "email" ? "Usuário":"Nome"
            }</InputLabel>
            <Input 
                className={classes.text}
                name={name}
                value={formValues.user}
                onChange={handleChange}
                error={Boolean(formErrors.email)}
            />
            { formErrors.email && <FormHelperText 
                className={classes.helperText}
                error={Boolean(formErrors.email)} 
                //required={formErrors.user}
            >
                {formErrors.email}
            </FormHelperText>}
        </FormControl>
    )
};

export function StyledPassword(props){
    const formErrors = props.formErrors;
    const formValues = props.formValues;
    const handleChange = props.handleChange;

    const [showPassword,setShowPassword] = useState(false);

    const classes = useStyles();

    const handleClickShowPassword = (e)=>{
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    return(
        <FormControl className={classes.content} fullWidth>
            <InputLabel htmlFor="filled-adornment-password" className={classes.text} error={Boolean(formErrors.password)}>Senha</InputLabel>
            <Input
                className={classes.text}
                name="password"
                type={showPassword ? "text":"password"}
                value={formValues.password}
                onChange={handleChange}
                error={Boolean(formErrors.password)}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword} className={classes.ButtonIcon}>
                            {showPassword ? 
                                <Visibility 
                                    className={classes.icon}
                                /> : 
                                <VisibilityOff 
                                    className={classes.icon}
                                />
                            }
                        </IconButton>
                    </InputAdornment>
                }
            />
            {formErrors.password && <FormHelperText 
                error={Boolean(formErrors.password)} 
                //required={formErrors.password}
                className={classes.helperText}
                margin="dense"
            >
            {formErrors.password}
            </FormHelperText>}
        </FormControl>
    )
}