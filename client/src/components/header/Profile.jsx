import { useState } from 'react';
import { Typography,Menu,MenuItem,makeStyles} from '@material-ui/core';
import PowerSettingNewIcon from '@material-ui/icons/PowerSettingsNew';
import {Link} from 'react-router-dom';


const useStyle=makeStyles({
    component:{
        marginTop:40,
    },
    logout:{
        marginLeft:20,
        fontSize:14,
    }
})

const Profile = ({ account, setAccount }) => {
    const [open,setOpen]=useState(false);
    const classes=useStyle();

    const handleClose = () => {
        setOpen(false);
    }

    const handleClick=(event)=>{
        setOpen(event.currentTarget);
    }

    const logout=()=>{
        setAccount('');
    }

    return (
        <>
            <Link><Typography onClick={handleClick} style={{ marginTop: '4px' }}>{account}</Typography></Link>
            <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                className={classes.component}
            >
                <MenuItem onClick={()=>{handleClose(); logout();}}>
                    <PowerSettingNewIcon fontSize="small" color="primary"/>
                <Typography className={classes.logout}>Logout</Typography>
                </MenuItem>
            </Menu>
        </>
    )
}

export default Profile;