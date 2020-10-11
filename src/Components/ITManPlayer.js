// ITManPlayer.js
import React, { Component } from "react";

class ITManPlayer extends Component {
  constructor(props) {
    super(props);
    this.player = React.createRef();
    this.state = {
        video_url: this.props.src
    }
  }
  
  render() {
    return (
      <video
        className="video-js vjs-big-play-centered"
        data-setup="{}"
        ref={this.player}
      />
    );
  }
  
    componentDidUpdate(prevProps, prevState) {
        if (this.props.src !== prevProps.src){
            this.setState({video_url: this.props.src});
            console.log(this.video.sources);
        }
    }

  componentDidMount() {
    const videoNode = this.player.current;
    this.video = window.videojs(videoNode,{
        sources: [{
            src: this.state.video_url,
        }],
        controls: true,
        fluid:true
    });
    console.log(this.props);
    let { eventON } = this.props;
    if(eventON){
        Object.keys(eventON).forEach(item => {
          this.video.on(item, () => {
          eventON[item]()
          });
        });
      }
  }
  
  componentWillUnmount() {
      if (this.video) {
          this.video.dispose();
      }
  }
}

export default ITManPlayer;