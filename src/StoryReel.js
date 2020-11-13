import React from "react";
import Story from "./Story";
import "./StoryReel.css";
function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://images.unsplash.com/photo-1585144720285-f456633efee9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        profileSrc="https://miro.medium.com/fit/c/64/64/1*c8JSwASz9KNaT3pWfgIWvg.jpeg"
        title="Shwetanshu"
      />
      <Story
        image="https://images.unsplash.com/photo-1605032977663-2feb73a13443?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        profileSrc="https://instagram.fgau1-1.fna.fbcdn.net/v/t51.2885-15/s150x150/106481951_327614411592714_7518816088365407137_n.jpg?_nc_ht=instagram.fgau1-1.fna.fbcdn.net&_nc_ohc=4AEAB91IRYwAX99gQZL&_nc_tp=25&oh=55917364b0f5fceff07074c2e0621758&oe=5FD718AF"
        title="Shekhar"
      />
      <Story
        image="https://images.unsplash.com/photo-1604950692723-2e3576162cfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        profileSrc="https://images.unsplash.com/profile-1534444770498-421ec361dce5?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
        title="Josh"
      />
      <Story
        image="https://images.unsplash.com/photo-1605078269106-1e6d5c8b21e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        profileSrc="https://lh3.googleusercontent.com/a-/AOh14Gh7IJiSa9glDhilpNy0bhQ2F1CmXTakwk0yxP2J=s88-c-k-c0x00ffffff-no-rj-mo"
        title="Youtube"
      />
        <Story
        image="https://images.unsplash.com/photo-1605020419755-ac3fd07926c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        profileSrc="https://images.unsplash.com/profile-1605149141459-e9e168733862image?ixlib=imgixjs-3.3.2&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=200&w=200"
        title="Groovy"
      />
    </div>
  );
}

export default StoryReel;
