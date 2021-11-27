import React from 'react';
import { Messages, Status, ChatInput } from 'components';
import { Dialogs } from 'containers';
import { Button } from 'antd';
import { TeamOutlined, FormOutlined, EllipsisOutlined } from '@ant-design/icons';

import dialogsJson from 'dialogs.json';

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
                        <Dialogs userId={0} items={dialogsJson} />
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
                        <Messages />


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




