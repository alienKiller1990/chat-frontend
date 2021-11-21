import React from 'react';
import { Message, Status, ChatInput } from 'components';
import { Dialogs } from 'containers';
import { Button } from 'antd';
import { TeamOutlined, FormOutlined, EllipsisOutlined } from '@ant-design/icons';

import './Home.scss';


const Home = () => {

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
                        <Button type="text" icon={<FormOutlined />} />
                    </div>


                    <div className="chat__sidebar-dialogs">
                        <Dialogs items={[

                            {
                                "_id": "61D97542B4E0E41A1EAAD42823F0B48B",
                                "text": "Fugiat veniam anim amet sint laborum eiusmod sint labore tempor. Enim officia quis labore excepteur veniam dolor sint incididunt ad. Est Lorem incididunt ut adipisicing. Sint consequat non deserunt eiusmod eu reprehenderit ut tempor. Laboris anim elit consequat nostrud ut ea ex tempor magna aute duis.",
                                "created_at": "Fri Jul 12 1996 16:16:14 GMT+0400 (Москва, летнее время)",
                                "unreaded": 10,
                                "isOnline": true,
                                "user": {
                                    "_id": "61D97542B4E0E41A1EAAD42823F0B48B",
                                    "fullname": "Vargas Blanchard",
                                    "avatar": "https://yt3.ggpht.com/I_0bAV91DK1KNoCyYUooOFlaRTyGdnKGWYs9hEfbayFsoKhbGl9WUrg9MGsGdDw6i2qCoCB0pQ=s88-c-k-c0x00ffffff-no-rj-mo"
                                }
                            },
                            {
                                "_id": "287CBAA3D2391DF674C55B8594AB8D00",
                                "text": "Fugiat Lorem aliqua et esse irure amet Lorem fugiat commodo quis velit voluptate ex aute. Est tempor Lorem deserunt nulla consectetur id consectetur amet nulla proident. Ad cillum deserunt sunt do enim esse aute. Sunt Lorem amet est in nulla aute incididunt adipisicing quis dolor non consequat cillum. Reprehenderit dolore commodo labore qui adipisicing ut consectetur minim minim ea excepteur quis aute culpa.",
                                "created_at": "Sat Jan 30 2021 21:16:30 GMT+0300 (Москва, стандартное время)",
                                "unreaded": 10,
                                "user": {
                                    "_id": "287CBAA3D2391DF674C55B8594AB8D00",
                                    "fullname": "Vang Hayes",
                                    "avatar": "https://yt3.ggpht.com/I_0bAV91DK1KNoCyYUooOFlaRTyGdnKGWYs9hEfbayFsoKhbGl9WUrg9MGsGdDw6i2qCoCB0pQ=s88-c-k-c0x00ffffff-no-rj-mo"
                                }
                            },
                            {
                                "_id": "4C15E6F54403D1A142C92BE657F4980E",
                                "text": "Amet et officia do occaecat. Cillum do esse eiusmod ipsum sunt. Aliquip in aliqua fugiat occaecat dolor adipisicing veniam magna. Sunt magna minim tempor excepteur. Consectetur occaecat irure incididunt in magna veniam in mollit aliquip commodo occaecat enim sit veniam.",
                                "created_at": "Tue Mar 05 1991 12:53:09 GMT+0300 (Москва, стандартное время)",
                                "user": {
                                    "_id": "4C15E6F54403D1A142C92BE657F4980E",
                                    "fullname": "Katy Spencer",
                                    "avatar": "https://yt3.ggpht.com/I_0bAV91DK1KNoCyYUooOFlaRTyGdnKGWYs9hEfbayFsoKhbGl9WUrg9MGsGdDw6i2qCoCB0pQ=s88-c-k-c0x00ffffff-no-rj-mo"
                                }
                            },
                            {
                                "_id": "E2F0390E883CF004E8E7FC00581F45C0",
                                "text": "Irure aute labore Lorem excepteur deserunt in qui cupidatat exercitation amet. Laboris sint mollit non occaecat id exercitation minim in labore. Est est Lorem ut nostrud ut velit do sit sit. Ullamco ipsum minim Lorem enim proident excepteur incididunt. Magna laboris ad mollit deserunt aliquip deserunt tempor mollit velit reprehenderit duis laboris nostrud.",
                                "created_at": "Thu Feb 27 2003 12:07:07 GMT+0300 (Москва, стандартное время)",
                                "user": {
                                    "_id": "E2F0390E883CF004E8E7FC00581F45C0",
                                    "fullname": "Branch Ortiz",
                                    "avatar": "https://yt3.ggpht.com/I_0bAV91DK1KNoCyYUooOFlaRTyGdnKGWYs9hEfbayFsoKhbGl9WUrg9MGsGdDw6i2qCoCB0pQ=s88-c-k-c0x00ffffff-no-rj-mo"
                                }
                            },



                            {
                                "_id": "3EB3F0DC8B90552606855CF61F511141",
                                "text": "Voluptate et eu et occaecat Lorem dolore laborum adipisicing adipisicing aliquip non labore incididunt. Consequat minim pariatur incididunt commodo pariatur dolor reprehenderit. Nulla proident elit mollit magna deserunt non labore est Lorem. Do fugiat aliquip commodo ex tempor qui nostrud. Reprehenderit duis ad occaecat ad cillum irure laborum exercitation id minim.",
                                "created_at": "Tue Aug 27 1974 12:07:14 GMT+0300 (Москва, стандартное время)",
                                "user": {
                                    "_id": "3EB3F0DC8B90552606855CF61F511141",
                                    "fullname": "Rogers Owens",
                                    "avatar": "https://yt3.ggpht.com/I_0bAV91DK1KNoCyYUooOFlaRTyGdnKGWYs9hEfbayFsoKhbGl9WUrg9MGsGdDw6i2qCoCB0pQ=s88-c-k-c0x00ffffff-no-rj-mo"
                                }
                            },

                            {
                                "_id": "6189573b5adf6cf2337ca374",
                                "text": "In laborum ad sunt incididunt cillum sit aute labore ullamco incididunt fugiat anim consectetur. Sunt minim culpa sunt ea. Magna mollit consectetur id voluptate amet duis esse dolore incididunt. Consectetur elit consequat est esse ea irure irure esse culpa ullamco veniam consequat ea eiusmod. Aute eu nulla ex cupidatat exercitation ullamco non.",
                                "created_at": "Sun Jan 25 1970 21:58:36 GMT+0300 (Москва, стандартное время)",
                                "user": {
                                    "_id": "6189573ba2a24b9aee2d8941",
                                    "fullname": "Ursula Jefferson",
                                    "avatar": "https://yt3.ggpht.com/I_0bAV91DK1KNoCyYUooOFlaRTyGdnKGWYs9hEfbayFsoKhbGl9WUrg9MGsGdDw6i2qCoCB0pQ=s88-c-k-c0x00ffffff-no-rj-mo"
                                }
                            },
                            {
                                "_id": "6189573b851b56b15721217e",
                                "text": "Ipsum sit ex amet duis aute magna. Aliquip occaecat et laborum velit in minim laborum anim amet sint id aliqua. Sunt fugiat dolore elit mollit enim occaecat nulla aliquip nostrud ex. Proident id est Lorem eu sint culpa nostrud quis eu anim dolor sint in. Non quis duis eiusmod Lorem.",
                                "created_at": "Mon Jul 22 1991 10:01:09 GMT+0300 (Москва, летнее время)",
                                "user": {
                                    "_id": "6189573b611ca436d95a6963",
                                    "fullname": "Mcintyre Bush",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "6189573b4f2747351bab44e9",
                                "text": "Aliqua sunt nostrud nisi reprehenderit cupidatat commodo. Laboris pariatur cupidatat ea pariatur labore enim ullamco minim et magna. Ut commodo do dolor adipisicing consequat qui do excepteur. Exercitation amet et veniam non culpa consectetur excepteur officia nostrud elit minim nostrud. Ad eiusmod amet nostrud enim eiusmod amet incididunt cupidatat commodo exercitation et.",
                                "created_at": "Thu Sep 10 1998 20:33:53 GMT+0400 (Москва, летнее время)",
                                "user": {
                                    "_id": "6189573b86f659e4cd4b5df3",
                                    "fullname": "Anna Cotton",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "6189573b4f2747351bab44e9",
                                "text": "Aliqua sunt nostrud nisi reprehenderit cupidatat commodo. Laboris pariatur cupidatat ea pariatur labore enim ullamco minim et magna. Ut commodo do dolor adipisicing consequat qui do excepteur. Exercitation amet et veniam non culpa consectetur excepteur officia nostrud elit minim nostrud. Ad eiusmod amet nostrud enim eiusmod amet incididunt cupidatat commodo exercitation et.",
                                "created_at": "Thu Sep 10 1998 20:33:53 GMT+0400 (Москва, летнее время)",
                                "user": {
                                    "_id": "6189573b86f659e4cd4b5df3",
                                    "fullname": "Pol Cotton",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "6189573b4f2747351bab44e9",
                                "text": "Aliqua sunt nostrud nisi reprehenderit cupidatat commodo. Laboris pariatur cupidatat ea pariatur labore enim ullamco minim et magna. Ut commodo do dolor adipisicing consequat qui do excepteur. Exercitation amet et veniam non culpa consectetur excepteur officia nostrud elit minim nostrud. Ad eiusmod amet nostrud enim eiusmod amet incididunt cupidatat commodo exercitation et.",
                                "created_at": "Thu Sep 10 1998 20:33:53 GMT+0400 (Москва, летнее время)",
                                "user": {
                                    "_id": "6189573b86f659e4cd4b5df3",
                                    "fullname": "John Cotton",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "6189573b4f2747351bab44e9",
                                "text": "Aliqua sunt nostrud nisi reprehenderit cupidatat commodo. Laboris pariatur cupidatat ea pariatur labore enim ullamco minim et magna. Ut commodo do dolor adipisicing consequat qui do excepteur. Exercitation amet et veniam non culpa consectetur excepteur officia nostrud elit minim nostrud. Ad eiusmod amet nostrud enim eiusmod amet incididunt cupidatat commodo exercitation et.",
                                "created_at": "Thu Sep 10 1998 20:33:53 GMT+0400 (Москва, летнее время)",
                                "user": {
                                    "_id": "6189573b86f659e4cd4b5df3",
                                    "fullname": "Tom Cotton",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "6189573b4f2747351bab44e9",
                                "text": "Aliqua sunt nostrud nisi reprehenderit cupidatat commodo. Laboris pariatur cupidatat ea pariatur labore enim ullamco minim et magna. Ut commodo do dolor adipisicing consequat qui do excepteur. Exercitation amet et veniam non culpa consectetur excepteur officia nostrud elit minim nostrud. Ad eiusmod amet nostrud enim eiusmod amet incididunt cupidatat commodo exercitation et.",
                                "created_at": "Thu Sep 10 1998 20:33:53 GMT+0400 (Москва, летнее время)",
                                "user": {
                                    "_id": "6189573b86f659e4cd4b5df3",
                                    "fullname": "Riahna Cotton",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "6189573b4f2747351bab44e9",
                                "text": "Aliqua sunt nostrud nisi reprehenderit cupidatat commodo. Laboris pariatur cupidatat ea pariatur labore enim ullamco minim et magna. Ut commodo do dolor adipisicing consequat qui do excepteur. Exercitation amet et veniam non culpa consectetur excepteur officia nostrud elit minim nostrud. Ad eiusmod amet nostrud enim eiusmod amet incididunt cupidatat commodo exercitation et.",
                                "created_at": "Thu Sep 10 1998 20:33:53 GMT+0400 (Москва, летнее время)",
                                "user": {
                                    "_id": "6189573b86f659e4cd4b5df3",
                                    "fullname": "Bob Cotton",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "6189573b4f2747351bab44e9",
                                "text": "Aliqua sunt nostrud nisi reprehenderit cupidatat commodo. Laboris pariatur cupidatat ea pariatur labore enim ullamco minim et magna. Ut commodo do dolor adipisicing consequat qui do excepteur. Exercitation amet et veniam non culpa consectetur excepteur officia nostrud elit minim nostrud. Ad eiusmod amet nostrud enim eiusmod amet incididunt cupidatat commodo exercitation et.",
                                "created_at": "Thu Sep 10 1998 20:33:53 GMT+0400 (Москва, летнее время)",
                                "user": {
                                    "_id": "6189573b86f659e4cd4b5df3",
                                    "fullname": "xxx Cotton",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "6189573b4f2747351bab44e9",
                                "text": "Aliqua sunt nostrud nisi reprehenderit cupidatat commodo. Laboris pariatur cupidatat ea pariatur labore enim ullamco minim et magna. Ut commodo do dolor adipisicing consequat qui do excepteur. Exercitation amet et veniam non culpa consectetur excepteur officia nostrud elit minim nostrud. Ad eiusmod amet nostrud enim eiusmod amet incididunt cupidatat commodo exercitation et.",
                                "created_at": "Thu Sep 10 1998 20:33:53 GMT+0400 (Москва, летнее время)",
                                "user": {
                                    "_id": "6189573b86f659e4cd4b5df3",
                                    "fullname": "Byers Cotton",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "6189573b4f2747351bab44e9",
                                "text": "Aliqua sunt nostrud nisi reprehenderit cupidatat commodo. Laboris pariatur cupidatat ea pariatur labore enim ullamco minim et magna. Ut commodo do dolor adipisicing consequat qui do excepteur. Exercitation amet et veniam non culpa consectetur excepteur officia nostrud elit minim nostrud. Ad eiusmod amet nostrud enim eiusmod amet incididunt cupidatat commodo exercitation et.",
                                "created_at": "Thu Sep 10 1998 20:33:53 GMT+0400 (Москва, летнее время)",
                                "user": {
                                    "_id": "6189573b86f659e4cd4b5df3",
                                    "fullname": "Byers Cotton",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "6189573bf0f6c1ce82dbe925",
                                "text": "Do sunt officia enim qui. Minim labore incididunt ad et reprehenderit nulla pariatur laborum duis fugiat non enim deserunt ea. Commodo ex sit consequat ipsum minim aliquip minim Lorem cillum cillum velit. Proident consequat ad qui do. Fugiat aliqua commodo deserunt exercitation voluptate laboris eiusmod ex dolor est nostrud do excepteur.",
                                "created_at": "Thu Jul 30 2009 10:54:20 GMT+0400 (Москва, летнее время)",
                                "user": {
                                    "_id": "6189573b4d7a5f3afa21ca0a",
                                    "fullname": "Haynes Schroeder",
                                    "avatar": null
                                }
                            },
                            {
                                "_id": "6189573b4e961819cb9c9541",
                                "text": "Non qui irure pariatur officia velit nostrud voluptate est incididunt culpa. Pariatur reprehenderit magna ex nostrud anim quis et amet. Ad sint dolor dolore culpa non. Ad veniam aliquip enim aliqua veniam sit exercitation ullamco ex in proident. Excepteur dolore officia irure commodo aliqua incididunt non nostrud Lorem duis amet.",
                                "created_at": "Mon Jun 08 1987 08:19:37 GMT+0400 (Москва, летнее время)",
                                "user": {
                                    "_id": "6189573b2c4e046f39e43a6c",
                                    "fullname": "Glenna Carrillo",
                                    "avatar": null
                                }
                            },


                        ]} />
                    </div>

                </div>
                <div className="chat__dialog">
                    <div className="chat__dialog-header">

                        <div className="chat__dialog-header-center">
                            <b className="chat__dialog-header-username">Fred Derst</b>
                            <div className="chat__dialog-header-status">
                                <Status online />
                            </div>
                        </div>
                        <Button type="text" icon={<EllipsisOutlined />} />
                    </div>
                    <div className="chat__dialog-messages">
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


                    </div>
                    <div className="chat__dialog-input">
                        <ChatInput />
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Home




