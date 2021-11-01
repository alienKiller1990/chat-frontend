import React from 'react';
import { Message } from 'components';

import './Home.scss'

const Home = () => (
    <section className="home">
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
            avatar="https://yt3.ggpht.com/ytc/AKedOLQlCDlun57Qr6u6DY-yGM3H7vfXsAo6jgXC7Hvt=s176-c-k-c0x00ffffff-no-rj-mo"
            text="Здорово! Круто мужик! Красава!"
            date={new Date()}
            isMe={true}
            isReaded={true}

        />
    </section>
)


export default Home
