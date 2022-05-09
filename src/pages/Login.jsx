import React,{ useState,useEffect } from "react";
import {useNavigate} from "react-router-dom"
import {api} from "../services/api";

import {  makeStyles } from "@material-ui/core";
import { StyledInput, StyledPassword } from "../components/Inputs";
import { StyledButton } from "../components/Buttons";


export const useStyles = makeStyles(()=>({
    divContainerAllContent:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },

    form:{
        width: '389px',
        minWidth: '300px',
        display: 'grid',
        gap: '20px',
    },

    formDivInputs:{
        display: "grid",
        gap:"20px"
    },

    formDivButtons:{
        width: "100%",
        display: "grid",
        justifyContent:"center",
        gap: "39px",
    },

    login:{
        width: "315px",
    },

    register:{
        width: "259px",
    }
}))


export function Login(){

    /**VARIAVES */
    const navigate = useNavigate();
    const classes = useStyles();

    const [isSubmitting,setIsSubmitting] = useState(false);
    const [formErrors,setFormErrors] = useState({});
    const [formValues,setFormValues] = useState({
        email:"",
        password:"",
    })

    /**FUNCTIONS */
    const submit = ()=>{
        console.log(formValues);
        searchUser(formValues);
    }
    
    const searchUser = async(formValues) =>{
        try {
            await api.post("https://devfront.vize.solutions/api/authaccount/login",formValues).then(res=>{
                if(res.data.data === null){
                    alert("Usuario nao encontrado");
                }else{
                    console.log(res.data)
                    navigate(`/home/${res.data.data.Token}`);
                }
            
            }).catch(erro=>{
                console.log(erro);
            })
        } catch (error) {
           console.error("erro!!",error) 
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsSubmitting(true);
        setFormErrors(validate(formValues))
    }

    const validate = (values) =>{
        const errors = {};

        if(!values.email){
            errors.email = "Campo obrigatorio";
        }
        if(!values.password){
            errors.password = "Campo Obrigatorio";
        }

        return errors;
    }

    const handleRegisterNewUser = (e) =>{
        //console.log("test")
        navigate("cadastro");
    }

    const handleChange = (e)=>{
        e.preventDefault();
        const {name,value} = e.target;
        setFormValues({...formValues,[name]:value});
    }

    /**USE EFFECTS */
    useEffect(()=>{
        if(Object.keys(formErrors).length === 0 && isSubmitting){
            submit();
            setIsSubmitting(false);
        }
    },[formErrors,isSubmitting]);

    return(
        <div className={classes.divContainerAllContent}>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.formDivInputs}>   

                    {/**USUARIO */}
                    <StyledInput 
                        formErrors={formErrors}
                        formValues={formValues}
                        handleChange={handleChange}
                        name="email"
                    />
                    
                    {/**PASSWORD */}
                    <StyledPassword
                        formErrors={formErrors}
                        formValues={formValues}
                        handleChange={handleChange}
                    />
                </div>
                
                <div className={classes.formDivButtons}>
                
                    {/**ACESSAR */}
                    <StyledButton
                        className={classes.login}
                        variant="contained"
                        type="submit"
                    >
                        Login
                    </StyledButton>

                    <div style={{display:"flex",justifyContent:"center"}}>

                        {/**REGISTRAR */}
                        <StyledButton
                            className={classes.register}
                            variant="contained"
                            type="button"
                            onClick={handleRegisterNewUser}
                        >
                            Registrar
                        </StyledButton>
                        
                    </div>
            
                </div>
            </form>

        </div>
    )
}