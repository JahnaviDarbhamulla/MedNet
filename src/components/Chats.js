import React, { useRef, useState, useEffect }from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from './firebase.js';
import { CustomerServiceFilled } from '@ant-design/icons' ;
import { PushToTalkButton, PushToTalkButtonContainer,  ErrorPanel } from '@speechly/react-ui';
import { useSpeechContext } from '@speechly/react-client';
import '../index.css';



import { useAuth } from '../contexts/AuthContext'
import axios from 'axios';
import { ApiFilled } from '@ant-design/icons';

const Chats = () => {

  const history = useHistory();
  const { user } = useAuth();
  const [loading, setLoading ] = useState(true);
  const { segment } = useSpeechContext();
  const { speechState} = useSpeechContext()

  console.log(user);

  const handleLogout = async () => {
    await auth.signOut();

    history.push("/");
  }

  const getFile = async (url) => {
      const response = await fetch(url);
      const data = await response.blob();

      return new File([data],"userPhoto.jpeg",{ type : 'image/jpeg' })

  }


  useEffect(()=> {
      if(!user){
        history.push('/');
        return;
      }

      axios.get('https://api.chatengine.io/users/me',{
          headers:{
            "project-id" : "d58f74d7-18d6-4a78-9976-bc868fd479ac",
            "user-name" : user.email,
            "user-secret" : user.uid,
          }

      })

      .then(() => {
          setLoading(false);
      })

      .catch(() => {
          let formdata = new FormData();
          formdata.append('email', user.email);
          formdata.append('username', user.email);
          formdata.append('secret', user.uid);

          getFile(user.photoURL)
            .then((avatar) => {
                formdata.append('avatar', avatar, avatar.name);

                axios.post('https://api.chatengine.io/users/',
                formdata,
                { headers: { "private-key" :" 965081d9-9211-4b81-b447-41d888f4b38c" }}
                )
                .then(() => setLoading(false))
                .catch((error) => console.log(error))

              })
      })
  }, [user, history]);

  if(!user || loading) return 'Loading...' ;


  return (
    <div className="chats-page">
        <div className="nav-bar">
            <div className="logo-tab">
                MedNet.

            </div>
            <div
            onClick ={handleLogout}
            className="logout-tab">
                Logout

            </div>
          </div>

        <ChatEngine
            hideUI ={true}
            height="calc(100vh - 66px)"
            projectID ="d58f74d7-18d6-4a78-9976-bc868fd479ac"
            userName={user.email}
            userSecret={user.uid}
            />

    <div>
          <PushToTalkButtonContainer>
          <PushToTalkButton
            appid={process.env.REACT_SPEECHLY_APP_ID}
            placement="top"
            hide="false"
            capturekey=" "
            intro="Push to talk"
            size="45px"
           >
                <ErrorPanel />
                </PushToTalkButton>
          </PushToTalkButtonContainer>

    </div>
    <div class="wrapper">
          <div class="pop-text" >
          <br />
          <br />
          <div class="state">

          {speechState}

          <br />
          <br />

          ...




            {segment ? (
              <>
              {segment.words.map((w) => w.value).join(" ")}

              </>
            ) :null}


</div>
            </div>
            </div>
            </div>


  );
}

export default Chats;
