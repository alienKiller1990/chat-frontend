import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { Input, Button } from 'antd';
import { SmileOutlined, CameraOutlined, AudioOutlined, SendOutlined } from '@ant-design/icons';

import './ChatInput.scss';


const ChatInput = props => {
    const [value, setValue] = React.useState('')
    return (
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                <Button type="text" icon={<SmileOutlined />} />
            </div>
            <Input
                size="large"
                onChange={e => setValue(e.target.value)}
                placeholder="Введите текст сообщения..." />

            <div className="chat-input__actions">
                <Button type="text" icon={<CameraOutlined />} />

                {value
                    ? <Button type="text" icon={<SendOutlined />} />
                    : <Button type="text" icon={<AudioOutlined />} />}


            </div>
        </div>
    )
}


ChatInput.propTypes = {
    className: PropTypes.string
}

export default ChatInput;
