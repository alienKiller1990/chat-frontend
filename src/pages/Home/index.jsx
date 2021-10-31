import React from 'react';
import { Message } from 'components';

import './Home.scss'

const Home = () => (
    <section className="home">
        <Message
            avatar="https://yt3.ggpht.com/I_0bAV91DK1KNoCyYUooOFlaRTyGdnKGWYs9hEfbayFsoKhbGl9WUrg9MGsGdDw6i2qCoCB0pQ=s88-c-k-c0x00ffffff-no-rj-mo"
            text="Здорово друг!"
            date={new Date()}
        />
    </section>
)


export default Home
