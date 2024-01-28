'use client';
import { useState, useRef } from 'react';
import styles from './DirectBox.module.scss';

import Image from 'next/image';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faImage } from '@fortawesome/free-regular-svg-icons';

import defaultImg from '@/assets/images/mouse.png';

export default function DirectBox({ chatBox }) {
  return (
    <div className={styles.directBox}>
      {chatBox ? <DirectBoxContent chatBox={chatBox} /> : <DefaultDirectBox />}
    </div>
  );
}

function DefaultDirectBox() {
  return (
    <div className={styles.defaultDirectBox}>
      <div>
        <FontAwesomeIcon
          icon={faFacebookMessenger}
          style={{ fontSize: '80px' }}
        />
        <p>Start messaging your friends</p>
      </div>
    </div>
  );
}

function DirectBoxContent({ chatBox }) {
  const messages = [
    {
      username: 'Ngoc Giau',
      avatar: defaultImg,
      message: 'Hello, How are you?',
      type: 'text',
      createdAt: '2024-01-28T13:55:23.366+00:00',
      isOwner: false,
    },
    {
      username: 'Toan Dinh',
      avatar: defaultImg,
      message: 'I am fine, thank you',
      type: 'text',
      createdAt: '2024-01-28T13:57:23.366+00:00',
      isOwner: true,
    },
    {
      username: 'Ngoc Giau',
      avatar: defaultImg,
      message: 'OK',
      type: 'text',
      createdAt: '2024-01-28T13:58:23.366+00:00',
      isOwner: false,
    },
    {
      username: 'Toan Dinh',
      avatar: defaultImg,
      message: 'Hello, How are you?',
      type: 'text',
      createdAt: '2024-01-28T13:59:23.366+00:00',
      isOwner: true,
    },
    {
      username: 'Ngoc Giau',
      avatar: defaultImg,
      message: 'Hello, How are you?',
      type: 'text',
      createdAt: '2024-01-28T13:55:23.366+00:00',
      isOwner: false,
    },
    {
      username: 'Toan Dinh',
      avatar: defaultImg,
      message: 'I am fine, thank you',
      type: 'text',
      createdAt: '2024-01-28T13:57:23.366+00:00',
      isOwner: true,
    },
    {
      username: 'Ngoc Giau',
      avatar: defaultImg,
      message: 'OK',
      type: 'text',
      createdAt: '2024-01-28T13:58:23.366+00:00',
      isOwner: false,
    },
    {
      username: 'Toan Dinh',
      avatar: defaultImg,
      message: 'Hello, How are you?',
      type: 'text',
      createdAt: '2024-01-28T13:59:23.366+00:00',
      isOwner: true,
    },
    {
      username: 'Ngoc Giau',
      avatar: defaultImg,
      message: 'Hello, How are you?',
      type: 'text',
      createdAt: '2024-01-28T13:55:23.366+00:00',
      isOwner: false,
    },
    {
      username: 'Toan Dinh',
      avatar: defaultImg,
      message: 'I am fine, thank you',
      type: 'text',
      createdAt: '2024-01-28T13:57:23.366+00:00',
      isOwner: true,
    },
    {
      username: 'Ngoc Giau',
      avatar: defaultImg,
      message: 'OK',
      type: 'text',
      createdAt: '2024-01-28T13:58:23.366+00:00',
      isOwner: false,
    },
    {
      username: 'Toan Dinh',
      avatar: defaultImg,
      message: 'Hello, How are you?',
      type: 'text',
      createdAt: '2024-01-28T13:59:23.366+00:00',
      isOwner: true,
    },
    {
      username: 'Ngoc Giau',
      avatar: defaultImg,
      message: 'Hello, How are you?',
      type: 'text',
      createdAt: '2024-01-28T13:55:23.366+00:00',
      isOwner: false,
    },
    {
      username: 'Toan Dinh',
      avatar: defaultImg,
      message: 'I am fine, thank you',
      type: 'text',
      createdAt: '2024-01-28T13:57:23.366+00:00',
      isOwner: true,
    },
    {
      username: 'Ngoc Giau',
      avatar: defaultImg,
      message: 'OK',
      type: 'text',
      createdAt: '2024-01-28T13:58:23.366+00:00',
      isOwner: false,
    },
    {
      username: 'Toan Dinh',
      avatar: defaultImg,
      message: 'Hello, How are you?',
      type: 'text',
      createdAt: '2024-01-28T13:59:23.366+00:00',
      isOwner: true,
    },
    {
      username: 'Ngoc Giau',
      avatar: defaultImg,
      message: 'Hello, How are you?',
      type: 'text',
      createdAt: '2024-01-28T13:55:23.366+00:00',
      isOwner: false,
    },
    {
      username: 'Toan Dinh',
      avatar: defaultImg,
      message: 'I am fine, thank you',
      type: 'text',
      createdAt: '2024-01-28T13:57:23.366+00:00',
      isOwner: true,
    },
    {
      username: 'Ngoc Giau',
      avatar: defaultImg,
      message: 'OK',
      type: 'text',
      createdAt: '2024-01-28T13:58:23.366+00:00',
      isOwner: false,
    },
    {
      username: 'Toan Dinh',
      avatar: defaultImg,
      message: 'Hello, How are you?',
      type: 'text',
      createdAt: '2024-01-28T13:59:23.366+00:00',
      isOwner: true,
    },
    {
      username: 'Ngoc Giau',
      avatar: defaultImg,
      message: 'Hello, How are you?',
      type: 'text',
      createdAt: '2024-01-28T13:55:23.366+00:00',
      isOwner: false,
    },
    {
      username: 'Toan Dinh',
      avatar: defaultImg,
      message: 'I am fine, thank you',
      type: 'text',
      createdAt: '2024-01-28T13:57:23.366+00:00',
      isOwner: true,
    },
    {
      username: 'Ngoc Giau',
      avatar: defaultImg,
      message: 'OK',
      type: 'text',
      createdAt: '2024-01-28T13:58:23.366+00:00',
      isOwner: false,
    },
    {
      username: 'Toan Dinh',
      avatar: defaultImg,
      message: 'Hello, How are you?',
      type: 'text',
      createdAt: '2024-01-28T13:59:23.366+00:00',
      isOwner: true,
    },
    {
      username: 'Ngoc Giau',
      avatar: defaultImg,
      message: 'Hello, How are you?',
      type: 'text',
      createdAt: '2024-01-28T13:55:23.366+00:00',
      isOwner: false,
    },
    {
      username: 'Toan Dinh',
      avatar: defaultImg,
      message: 'I am fine, thank you',
      type: 'text',
      createdAt: '2024-01-28T13:57:23.366+00:00',
      isOwner: true,
    },
    {
      username: 'Ngoc Giau',
      avatar: defaultImg,
      message: 'OK',
      type: 'text',
      createdAt: '2024-01-28T13:58:23.366+00:00',
      isOwner: false,
    },
    {
      username: 'Toan Dinh',
      avatar: defaultImg,
      message: 'Hello, How are you?',
      type: 'text',
      createdAt: '2024-01-28T13:59:23.366+00:00',
      isOwner: true,
    },
    {
      username: 'Ngoc Giau',
      avatar: defaultImg,
      message: 'Hello, How are you?',
      type: 'text',
      createdAt: '2024-01-28T13:55:23.366+00:00',
      isOwner: false,
    },
    {
      username: 'Toan Dinh',
      avatar: defaultImg,
      message: 'I am fine, thank you',
      type: 'text',
      createdAt: '2024-01-28T13:57:23.366+00:00',
      isOwner: true,
    },
    {
      username: 'Ngoc Giau',
      avatar: defaultImg,
      message: 'OK',
      type: 'text',
      createdAt: '2024-01-28T13:58:23.366+00:00',
      isOwner: false,
    },
    {
      username: 'Toan Dinh',
      avatar: defaultImg,
      message: 'Hello, How are you?',
      type: 'text',
      createdAt: '2024-01-28T13:59:23.366+00:00',
      isOwner: true,
    },
    {
      username: 'Ngoc Giau',
      avatar: defaultImg,
      message: 'Hello, How are you?',
      type: 'text',
      createdAt: '2024-01-28T13:55:23.366+00:00',
      isOwner: false,
    },
    {
      username: 'Toan Dinh',
      avatar: defaultImg,
      message: 'I am fine, thank you',
      type: 'text',
      createdAt: '2024-01-28T13:57:23.366+00:00',
      isOwner: true,
    },
    {
      username: 'Ngoc Giau',
      avatar: defaultImg,
      message: 'OK',
      type: 'text',
      createdAt: '2024-01-28T13:58:23.366+00:00',
      isOwner: false,
    },
    {
      username: 'Toan Dinh',
      avatar: defaultImg,
      message: 'Hello, How are you?',
      type: 'text',
      createdAt: '2024-01-28T13:59:23.366+00:00',
      isOwner: true,
    },
    {
      username: 'Ngoc Giau',
      avatar: defaultImg,
      message: 'Hello, How are you?',
      type: 'text',
      createdAt: '2024-01-28T13:55:23.366+00:00',
      isOwner: false,
    },
    {
      username: 'Toan Dinh',
      avatar: defaultImg,
      message: 'I am fine, thank you',
      type: 'text',
      createdAt: '2024-01-28T13:57:23.366+00:00',
      isOwner: true,
    },
    {
      username: 'Ngoc Giau',
      avatar: defaultImg,
      message: 'OK',
      type: 'text',
      createdAt: '2024-01-28T13:58:23.366+00:00',
      isOwner: false,
    },
    {
      username: 'Toan Dinh',
      avatar: defaultImg,
      message: 'Hello, How are you?',
      type: 'text',
      createdAt: '2024-01-28T13:59:23.366+00:00',
      isOwner: true,
    },
    {
      username: 'Ngoc Giau',
      avatar: defaultImg,
      message: 'Hello, How are you?',
      type: 'text',
      createdAt: '2024-01-28T13:55:23.366+00:00',
      isOwner: false,
    },
    {
      username: 'Toan Dinh',
      avatar: defaultImg,
      message: 'I am fine, thank you',
      type: 'text',
      createdAt: '2024-01-28T13:57:23.366+00:00',
      isOwner: true,
    },
    {
      username: 'Ngoc Giau',
      avatar: defaultImg,
      message: 'OK',
      type: 'text',
      createdAt: '2024-01-28T13:58:23.366+00:00',
      isOwner: false,
    },
    {
      username: 'Toan Dinh',
      avatar: defaultImg,
      message: 'Hello, How are you?',
      type: 'text',
      createdAt: '2024-01-28T13:59:23.366+00:00',
      isOwner: true,
    },
  ];

  function renderMessage(item) {
    switch (item.type) {
      case 'text':
        return <p>{item.message}</p>;
      case 'image':
        return (
          <Image src={item.message} alt="image" width={100} height={100} />
        );
      default:
        return <p>Not supported yet!</p>;
    }
  }
  return (
    <div className={styles.directBox}>
      <div className={styles.directBoxHeader}>
        <div>
          <Image src={defaultImg} alt="user avatar" />
          <h4>{chatBox.username || 'username'}</h4>
        </div>
        <FontAwesomeIcon
          icon={faInfo}
          style={{
            fontSize: '15px',
            width: '14px',
            height: '14px',
            padding: '5px',
            borderRadius: '50%',
            border: '2px solid black',
          }}
        />
      </div>
      <div className={styles.directBoxBody}>
        {messages.map((item, i) => {
          return (
            <div
              className={
                styles.directItem +
                ' ' +
                (item.isOwner ? styles.directItemOwner : '')
              }
              key={i}
            >
              {!item.isOwner && (
                <Image
                  className={styles.avatar}
                  src={item.avatar || defaultImg}
                  alt="user avatar"
                />
              )}
              {renderMessage(item)}
            </div>
          );
        })}
      </div>
      <DirectInputBox />
    </div>
  );
}

function DirectInputBox() {
  const [message, setMessage] = useState('');
  const inputRef = useRef(null);

  const handleClick = () => {
    // 👇️ open file input box on click of another element
    inputRef.current.click();
  };

  const imageRef = useRef(null);

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    // if (fileObj) {
    //   async function upload() {
    //     const res = await uploadImage(fileObj);
    //     return res.data.url;
    //   }
    //   upload()
    //     .then(async (res) => {
    //       setImage(`${IMG_URL}/${res}`);
    //       setUserInfo({
    //         ...userInfo,
    //         avartar: IMG_URL + "/" + res
    //       });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }

    event.target.value = null;
  };
  return (
    <div className={styles.directInputBox}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
      />
      {message ? (
        <button>Send</button>
      ) : (
        <>
          <FontAwesomeIcon
            icon={faMicrophone}
            style={{ marginRight: '5px', fontSize: '20px' }}
          />
          <FontAwesomeIcon
            onClick={handleClick}
            icon={faImage}
            style={{ marginRight: '5px', fontSize: '20px' }}
          />
          <FontAwesomeIcon
            icon={faHeart}
            style={{ marginRight: '5px', fontSize: '20px' }}
          />
        </>
      )}
      <input
        style={{ display: 'none' }}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />
    </div>
  );
}
