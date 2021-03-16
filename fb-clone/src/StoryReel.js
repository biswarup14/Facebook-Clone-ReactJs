import React from 'react'
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://mk0adespressoj4m2p68.kinstacdn.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-04-at-1.14.36-AM-578x1024.png"
                profileSrc="https://avatars.githubusercontent.com/u/60690698?s=60&v=4"
                title="Me"
            />
            <Story
image="https://mk0adespressoj4m2p68.kinstacdn.com/wp-content/uploads/2018/07/free-trial-planet-2-med.jpg"
profileSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
title="Satwik"
/>
<Story
image="https://mk0adespressoj4m2p68.kinstacdn.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-04-at-1.13.49-AM-563x1024.png"
profileSrc="https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg"
title="Aditya"
            />
<Story
image="https://mk0adespressoj4m2p68.kinstacdn.com/wp-content/uploads/2019/11/amazing-example-fb-ig-stories-that-convert-01-1024x536.png"
profileSrc="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
title="John"
/>

        </div>
    )
}

export default StoryReel
