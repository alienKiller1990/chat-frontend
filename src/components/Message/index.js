import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import readedSvg from 'assets/img/readed.svg';
import noReadedSvg from 'assets/img/noreaded.svg';
import { Time } from '../';


import './Message.scss'

const Message = ({ avatar, user, text, date, isMe, isReaded, attachments, isTyping }) => (
    <div className={classNames('message', {
        'message--isme': isMe,
        'message--is-typing': isTyping,
        'message--image': attachments && attachments.length === 1,
    })}>
        {
            isMe && (
                isReaded
                    ? <img className="message__img" src={readedSvg} alt="readed" />
                    : <img className="message__img" src={noReadedSvg} alt="noreaded" />
            )
        }
        <div className="message__avatar">
            <img src={avatar} alt={`Avatar ${user.fullname}`} />
        </div>

        <div className="message__content">
            <div>
                {
                    (text || isTyping) && (
                        <div className="message__bubble">
                            {text && <p className="message__text">{text}</p>}
                            {isTyping && <div class="message__typing"><span></span><span></span><span></span></div>}
                        </div>)
                }


                <div className="message__attachments">
                    {
                        attachments && attachments.map(item => (
                            <div className="message__attachments-item">
                                <img src={item.url} alt={item.filename} />
                            </div>
                        ))
                    }
                </div>
                {date && <span className="message__date"><Time date={date} /></span>}
            </div>

        </div>
    </div>
)

Message.defaultProps = {
    user: {},
}


Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    attachments: PropTypes.array,
    isTyping: PropTypes.bool,
}

export default Message;
