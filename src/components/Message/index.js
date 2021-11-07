import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { convertCurrentTime } from 'utils/helpers'
import { Time, IconReaded } from '../';
import waveSvg from 'assets/img/wave.svg'
import playSvg from 'assets/img/play-icon.svg'
import pauseSvg from 'assets/img/pause-icon.svg'


import './Message.scss'

const MessageAudio = ({ audio }) => {

    const audioElem = useRef(null);
    const [isPlaying, setIsPlaing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const togglePLay = () => {
        if (!isPlaying) {
            audioElem.current.play();
        } else {
            audioElem.current.pause();
        }
    }

    useEffect(() => {
        audioElem.current.addEventListener('playing', () => {
            setIsPlaing(true);
        }, false);
        audioElem.current.addEventListener('ended', () => {
            setIsPlaing(false);
            setProgress(0);
        }, false);
        audioElem.current.addEventListener('pause', () => {
            setIsPlaing(false);
            setCurrentTime(0);
        }, false);
        audioElem.current.addEventListener('timeupdate', () => {
            const duration = (audioElem.current && audioElem.current.duration) || 0;
            setCurrentTime(audioElem.current.currentTime)
            setProgress((audioElem.current.currentTime / duration) * 100)
        });
    }, []);

    return (
        <div className="message__audio">
            <audio ref={audioElem} src={audio} preload="auto"></audio>
            <div className="message__audio-progress" style={{ width: progress + '%', height: '100%' }}></div>
            <div className="message__audio-info">
                <div className="message__audio-btn">
                    <button onClick={togglePLay}>
                        {isPlaying ? <img src={pauseSvg} alt="" /> : <img src={playSvg} alt="" />}
                    </button>
                </div>
                <div className="message__audio-wave">
                    <img src={waveSvg} alt="wave svg" />
                </div>
                <span className="message__audio-duration">{convertCurrentTime(currentTime)}</span>
            </div>
        </div>
    )
}


const Message = ({ avatar, user, text, date, audio, isMe, isReaded, attachments, isTyping }) => {

    return (
        <div className={classNames('message', {
            'message--isme': isMe,
            'message--is-typing': isTyping,
            'message--image': attachments && attachments.length === 1,
            'message--is-audio': audio,
        })}>

            {isMe && <IconReaded isMe={isMe} isReaded={isReaded} />}

            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user.fullname}`} />
            </div>

            <div className="message__content">
                <div>
                    {
                        (audio || text || isTyping) && (
                            <div className="message__bubble">
                                {text && <p className="message__text">{text}</p>}
                                {
                                    isTyping && <div class="message__typing"><span></span><span></span><span></span></div>
                                }
                                {audio && <MessageAudio audio={audio}/>}
                            </div>)
                    }


                    {attachments && (<div className="message__attachments">
                        {
                            attachments.map(item => (
                                <div className="message__attachments-item">
                                    <img src={item.url} alt={item.filename} />
                                </div>
                            ))
                        }
                    </div>)}
                    {date && <span className="message__date"><Time date={date} /></span>}
                </div>

            </div>
        </div>
    )
}

Message.defaultProps = {
    user: {},
}


Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.number,
    user: PropTypes.object,
    attachments: PropTypes.array,
    isTyping: PropTypes.bool,
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
    audio: PropTypes.string,
}

export default Message;
