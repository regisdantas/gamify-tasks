import React from 'react';
import { UserBarContainer, Spacer } from './styles';
import { FiLogOut } from 'react-icons/fi';
import userImg from '../../assets/user.png';
import { UserAuth } from '../../contexts/AuthContext';
import fheart from '../../assets/full-heart.png';
import eheart from '../../assets/empty-heart.png';
import coin from '../../assets/coin.png';

const UserBar: React.FC = () => {
  const {user, logOut} = UserAuth();

  const handleLogout = async () => {
    try{
      await logOut();
    } catch (error)  {
      console.log(error);
      // setInputStatus({type: "error", fields: "email", message: (error instanceof Error)?error.message:"Unknown error"});
    }
  }
  return (
    <UserBarContainer>

      <div className='score-space'>
      <span>EXP</span>
      <span>235/500</span>
      </div>
      <Spacer></Spacer>
      <div className='score-space'>
        <img className="icons" src={coin} />
        <span>1.245,52</span>
      </div>
      <Spacer></Spacer>
      <div className='score-space'>
        <div>
          <img className="icons" src={eheart} />
          {" "}
          <img className="icons" src={fheart} />
        </div>
        <span>Never fail twice</span>
      </div>
      <img className="userpic" src={user.photoURL?user.photoURL:userImg} onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src=userImg;
      }} alt="User photograph"/>
    <FiLogOut size={30} onClick={() => handleLogout()} />
    </UserBarContainer>
  );
};

export default UserBar;
