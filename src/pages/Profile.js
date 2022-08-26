import back from '../assets/back.jpeg';
import ProfileCard from '../component/Profilecard';
import TransferCard from '../component/TransferCard';
import TransHistory from '../component/TransHistory';
import {getTransHistoryInfo} from '../APIS/User';
import React from 'react';
import {getProfileCardInfo} from'../APIS/User';

const Profile=()=>{
    const Dummy = [{to:'5152',amount:'1545',date:'2020-12-02'}]
    const [transHistoryData , settransHistoryData] = React.useState(Dummy); 
    getTransHistoryInfo().then((response)=>
    settransHistoryData(response.data)).catch((err)=>console.log('error',err));

    const Dum = [{email:'sarabhaa6@gmail.com',cardType:'credit',balance:'2500$'}]
    const [profileCardInfo , setprofileCardInfo] = React.useState(Dum); 
    getProfileCardInfo().then((response)=>
    setprofileCardInfo(response.data)).catch((err)=>console.log('error',err));

    
    

    return ( 
        <div>
            <ProfileCard  profileCardInfo={profileCardInfo}/>
            <TransferCard/>
            <TransHistory  transHistoryData={transHistoryData}/>

        </div>
    )
}
export default Profile;