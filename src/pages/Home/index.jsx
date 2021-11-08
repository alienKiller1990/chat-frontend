import React from 'react';
import { Dialogs, Message } from 'components';
import { Input } from 'antd';
import { TeamOutlined, FormOutlined, EllipsisOutlined } from '@ant-design/icons';

import './Home.scss';


const Home = () => {
    const { Search } = Input;
    return (
        <section className="home">
            <div className="chat">
                <div className="chat__sidebar">

                    <div className="chat__sidebar-header">
                        <div>
                            <i>
                                <TeamOutlined />
                            </i>
                            <span>Список дилогов</span>
                        </div>
                        <FormOutlined />
                    </div>

                    <div className="chat__sidebar-search">
                        <Search placeholder="Поиск среди контактов" />
                    </div>

                    <div className="chat__sidebar-dilalogs">
                        <Dialogs items={[
                            {
                                _id: Math.random(),
                                text: 'Мы все свидетельствуем.eee!',
                                isReaded: false,
                                created_at: new Date(),
                                user: {
                                    _id: '49f68a5c8493ec2c0bf489821c21fc3b',
                                    fullname: 'Федор Достоевский',
                                    avatar: "https://yt3.ggpht.com/I_0bAV91DK1KNoCyYUooOFlaRTyGdnKGWYs9hEfbayFsoKhbGl9WUrg9MGsGdDw6i2qCoCB0pQ=s88-c-k-c0x00ffffff-no-rj-mo"
                                },
                            },
                            {
                                _id: '49f68a5c8493ec2c0bf489821c21fc3b',
                                text: 'Здорова!как дела?aaaaaaaaaaaaaaaaaa',
                                isReaded: true,
                                created_at: new Date() - 100000000,
                                user: {
                                    _id: 'ag068a5c8493ec2c0bf489821c21fc3b',
                                    fullname: 'Fred Derst',
                                    avatar: null
                                },
                            },
                        ]} />
                    </div>

                </div>
                <div className="chat__dialog">
                    <div className="chat__dialog-header">

                        <div className="chat__dialog-header-center">
                            <b className="chat__dialog-header-username">Fred Derst</b>
                            <div className="chat__dialog-header-status">
                                <div className="status status--online">онлайн</div>
                            </div>
                        </div>

                        <EllipsisOutlined />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home
        /*
<Message
avatar="https://yt3.ggpht.com/ytc/AKedOLQlCDlun57Qr6u6DY-yGM3H7vfXsAo6jgXC7Hvt=s176-c-k-c0x00ffffff-no-rj-mo"
date={new Date().getTime()}
audio="https://notificationsounds.com/storage/sounds/file-sounds-1150-pristine.mp3"

/>
<Message
avatar="https://yt3.ggpht.com/I_0bAV91DK1KNoCyYUooOFlaRTyGdnKGWYs9hEfbayFsoKhbGl9WUrg9MGsGdDw6i2qCoCB0pQ=s88-c-k-c0x00ffffff-no-rj-mo"
isTyping
/> */
/* <Message
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
            attachments={[
                {
                    filename: 'image.jpg',
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJqRCCS07pUNCflqYryDyfsk8pQYEn5lk0rrZnIz7E3vnByLys_QEpIFuXAeY5gkwiYk&usqp=CAU'
                },
            ]}
        />
        */



