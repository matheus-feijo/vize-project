import { makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom"
import { TableUsers } from "../components/TableUsers";
import { api } from "../services/api";

const useStyles = makeStyles(()=>({
    title:{
        lineHeight:"64px",
        font:"400 32px Roboto",
        letterSpacing:"-0.25px"

    },
    content:{
        width: "60%",
    },
    container:{
        display: "grid",
        justifyItems:"center",
    }
}))

export function Home(){

    /**VARIAVEIS */
    const [userList,setUserList] = useState([]);
    const classes = useStyles();
    const {id} = useParams();

    /**FUNCTIONS */
    const searchUser = async()=>{
        try {
            api.defaults.headers.authorization = `Bearer ${id}`;
            await api.get("https://devfront.vize.solutions/api/users?page=1").then((res)=>{
                console.log(res.data.data);
                setUserList(res.data.data);
            }).catch(err =>{
                console.log(err);
            })
        } catch (error) {
            console.log("erro!!",error);
        }
    }

    /**USE EFFECTS */
    useEffect(()=>{
        searchUser();
    },[]);

    return(
        <div className={classes.container}>
            <Typography className={classes.title}>Usuarios:</Typography>
                <div className={classes.content
                }>
                    <TableUsers
                        users={userList}
                    />
                </div>
                
        </div>
    )
}