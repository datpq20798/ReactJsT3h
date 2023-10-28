import React from 'react';
import { Avatar, Typography } from 'antd';
import styled from 'styled-components';
import { formatRelative } from 'date-fns/esm';

const WrapperStyled = styled.div`
  margin-bottom: 10px;

  .author {
    margin-left: 5px;
    font-weight: bold;
  }

  .date {
    margin-left: 10px;
    font-size: 11px;
    color: #a7a7a7;
  }

  .content {
    background-color: #0084FF; /* Màu nền của phần text */
    padding: 4px 10px; /* Khoảng cách giữa nội dung và mép phần text */
    border-radius: 20px; /* Bo góc của phần text */
    display: inline-block; /* Hiển thị phần text theo chiều ngang */
    max-width: 70%; /* Giới hạn chiều rộng của phần text */
    word-wrap: break-word; /* Chia từ khi vượt quá chiều rộng tối đa */
    margin-left: 30px
  }
  .content.sent {
    background-color: #0084ff; /* Màu nền của phần text khi được gửi đi */
    color: #fff; /* Màu chữ của phần text khi được gửi đi */
    align-self: flex-end; /* Hiển thị phần text ở bên phải */
  }
`;

function formatDate(seconds) {
  let formattedDate = '';

  if (seconds) {
    formattedDate = formatRelative(new Date(seconds * 1000), new Date());

    formattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }

  return formattedDate;
}

export default function Message({ text, displayName, createdAt, photoURL }) {
  return (
    <WrapperStyled>
      <div>
        <Avatar size='small' src={photoURL}>
          {photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography.Text className='author'>{displayName}</Typography.Text>
        <Typography.Text className='date'>
          {formatDate(createdAt?.seconds)}
        </Typography.Text>
      </div>
      <div>
        <Typography.Text className='content sent'>{text}</Typography.Text>
      </div>
    </WrapperStyled>
  );
}
