import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Input } from 'antd';
import { SmileOutlined, CameraOutlined, AudioOutlined, SendOutlined } from '@ant-design/icons';

import './ChatInput.scss';


const ChatInput = props => (
    <div className="chat-input">
        <div className="chat-input__smile-btn">
            <SmileOutlined />
        </div>

        <Input size="large" onSearch={value => console.log(value)} placeholder="Введите текст сообщения" />

        <div className="chat-input__actions">
            <CameraOutlined />
            <AudioOutlined />
            <SendOutlined />
        </div>
    </div>
)


ChatInput.propTypes = {
    className: PropTypes.string
}

export default ChatInput;
