import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";


const useStyles = makeStyles(()=>({
    header:{
        background: "#CCE5FF",
    },
    textHeader:{
        color: "#00639C",
        fill: "solid",
        font: "bold 12px Open sans",
        lineHeight:"16px",
    },

    textBody:{
        font: "400 12px Open sans",
        borderLeft:"1px solid #CCE5FF",
        borderRight:"1px solid #CCE5FF",
        borderBottom:"0px",
    }
}))


export function TableUsers(props){
    const users = props.users;
    const classes = useStyles();

    return(
            <TableContainer component={Paper}>
                <Table>
                    {/**CABECALHO */}
                    <TableHead className={classes.header}>
                        <TableRow>
                            <TableCell className={classes.textHeader} align="center">ID</TableCell>
                            <TableCell 
                                className={classes.textHeader} 
                                align="left" 
                                style={{borderLeft:"1px solid #ffff"}}
                            >
                                Nome
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    {/**BODY */}
                    <TableBody>
                        {users.map((user,i)=>(
                            <TableRow key={i}>
                                <TableCell className={classes.textBody} align="center">{user.id}</TableCell>
                                <TableCell className={classes.textBody} align="left">{user.name}</TableCell>                        
                            </TableRow>

                        ))}
                
                    </TableBody>
                </Table>
            </TableContainer>
    )
}