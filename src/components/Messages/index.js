import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';


import { Message } from '../';

const Messages = ({ items }) => {

    return (
        items ? <div>
            <Message
                avatar="https://yt3.ggpht.com/ytc/AKedOLQlCDlun57Qr6u6DY-yGM3H7vfXsAo6jgXC7Hvt=s176-c-k-c0x00ffffff-no-rj-mo"
                date={new Date()}
                audio="https://notificationsounds.com/storage/sounds/file-sounds-1150-pristine.mp3"

            />

            <Message
                avatar="https://yt3.ggpht.com/I_0bAV91DK1KNoCyYUooOFlaRTyGdnKGWYs9hEfbayFsoKhbGl9WUrg9MGsGdDw6i2qCoCB0pQ=s88-c-k-c0x00ffffff-no-rj-mo"
                text="Здорово друг! Я начал создавать чат.Это очень интересно и увлекательно."
                date={new Date()}
                attachments={[
                    {
                        filename: 'image.jpg',
                        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJqRCCS07pUNCflqYryDyfsk8pQYEn5lk0rrZnIz7E3vnByLys_QEpIFuXAeY5gkwiYk&usqp=CAU'
                    },
                    {
                        filename: 'image.jpg',
                        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJqRCCS07pUNCflqYryDyfsk8pQYEn5lk0rrZnIz7E3vnByLys_QEpIFuXAeY5gkwiYk&usqp=CAU'
                    }
                ]}
            />
            <Message
                avatar="https://yt3.ggpht.com/I_0bAV91DK1KNoCyYUooOFlaRTyGdnKGWYs9hEfbayFsoKhbGl9WUrg9MGsGdDw6i2qCoCB0pQ=s88-c-k-c0x00ffffff-no-rj-mo"
                isMe={true}
                isReaded={false}
                date={new Date()}
                attachments={[
                    {
                        filename: 'image.jpg',
                        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJqRCCS07pUNCflqYryDyfsk8pQYEn5lk0rrZnIz7E3vnByLys_QEpIFuXAeY5gkwiYk&usqp=CAU'
                    },
                ]}
            />
            <Message
                avatar="https://yt3.ggpht.com/I_0bAV91DK1KNoCyYUooOFlaRTyGdnKGWYs9hEfbayFsoKhbGl9WUrg9MGsGdDw6i2qCoCB0pQ=s88-c-k-c0x00ffffff-no-rj-mo"
                text="Здорово друг! Я начал создавать чат.Это очень интересно и увлекательно."
                date={new Date()}

            />
            <Message
                avatar="https://yt3.ggpht.com/I_0bAV91DK1KNoCyYUooOFlaRTyGdnKGWYs9hEfbayFsoKhbGl9WUrg9MGsGdDw6i2qCoCB0pQ=s88-c-k-c0x00ffffff-no-rj-mo"
                text="Здорово друг! Я начал создавать чат.Это очень интересно и увлекательно."
                date={new Date()}

            />
            <Message
                avatar="https://yt3.ggpht.com/I_0bAV91DK1KNoCyYUooOFlaRTyGdnKGWYs9hEfbayFsoKhbGl9WUrg9MGsGdDw6i2qCoCB0pQ=s88-c-k-c0x00ffffff-no-rj-mo"
                text="Здорово друг! Я начал создавать чат.Это очень интересно и увлекательно."
                date={new Date()}

            />
            <Message
                avatar="https://yt3.ggpht.com/I_0bAV91DK1KNoCyYUooOFlaRTyGdnKGWYs9hEfbayFsoKhbGl9WUrg9MGsGdDw6i2qCoCB0pQ=s88-c-k-c0x00ffffff-no-rj-mo"
                text="Здорово друг! Я начал создавать чат.Это очень интересно и увлекательно."
                date={new Date()}

            />
            <Message
                avatar="https://yt3.ggpht.com/I_0bAV91DK1KNoCyYUooOFlaRTyGdnKGWYs9hEfbayFsoKhbGl9WUrg9MGsGdDw6i2qCoCB0pQ=s88-c-k-c0x00ffffff-no-rj-mo"
                text="Здорово друг! Я начал создавать чат.Это очень интересно и увлекательно."
                date={new Date()}

            />
            <Message
                avatar="https://yt3.ggpht.com/I_0bAV91DK1KNoCyYUooOFlaRTyGdnKGWYs9hEfbayFsoKhbGl9WUrg9MGsGdDw6i2qCoCB0pQ=s88-c-k-c0x00ffffff-no-rj-mo"
                text="Здорово друг! Я начал создавать чат.Это очень интересно и увлекательно."
                date={new Date()}

            />
            <Message
                avatar="https://yt3.ggpht.com/I_0bAV91DK1KNoCyYUooOFlaRTyGdnKGWYs9hEfbayFsoKhbGl9WUrg9MGsGdDw6i2qCoCB0pQ=s88-c-k-c0x00ffffff-no-rj-mo"
                isTyping
            />
        </div> : <Empty description="нет сообщений" />
    )

}




Messages.propTypes = {
    items: PropTypes.array,

}

export default Messages;
