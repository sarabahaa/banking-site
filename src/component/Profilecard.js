import styles from "./Profilecard.module.css";
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { margin, Stack } from "@mui/system";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaidIcon from '@mui/icons-material/Paid';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';



const ProfileCard =({profileCardInfo})=>{
    return(
        <Paper className={styles['profile-card-container']}elevation={3} >
            <div>
                     
             <Avatar sx={{ bgcolor: deepPurple[500]  , marginBottom:1      }} >n</Avatar>

            </div>
            <div style={{  marginBottom:10      }}>
                {profileCardInfo[0].email}

            </div>
            <div>
            <Stack direction="column" spacing={2}>

            <Stack direction="row" spacing={1}>
                    <CreditCardIcon / >
                        <div>
                        {profileCardInfo[0].cardType}

                        </div>


                </Stack>
            <Stack direction="row" spacing={1}>
                    <PaidIcon />
                    <div>
                    {profileCardInfo[0]``.balance}

                    </div>


                </Stack>
                <Stack direction="row" spacing={1}>
                    <Grid3x3Icon />
                    <div>
                            25679523
                    </div>

            </Stack>
                </Stack>


            </div>
        </Paper>
    )
}
export default ProfileCard;