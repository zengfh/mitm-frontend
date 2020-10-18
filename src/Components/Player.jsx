import ITManPlayer from './ITManPlayer';
import React, { Component } from 'react';
import axios from 'axios';
class Player extends Component {
    constructor(props){
        super(props);
        this.state = {
            video_url: '',
            audio_url: '',
            loaded: false,
            fetchcount: 0,
            }
        this.fetchVideo = this.fetchVideo.bind(this);
    }

    fetchVideo(){
        if (this.state.loaded == true){
            return;
        }
        let query = this.props.match.location.search;
        let vid = query.substr(3);
        let video_path = `http://204.44.88.11/mitm/download/${vid}/`
        // console.log(video_path);
        axios.get(video_path)
        .then( res => {
            let div = document.createElement("div")
            div.innerHTML = res.data
            let links = div.querySelectorAll('a');
            for(let i = 0; i < links.length; i++){
                let link = links[i]
                let innerURL = link.innerHTML;
                if (innerURL.includes('audio')) {
                    this.setState({
                        audio_url: video_path + innerURL
                    });
                }
                else {
                    this.setState({
                        video_url: video_path + links[i].innerHTML,
                        loaded: true,
                    }); 
                }
            }
            clearInterval(this.state.interrvalId);
            clearTimeout(this.state.timeoutId);
        }
            

        ).catch(err => {
            console.log(err);
        })

    }

    videoPlay = () =>{
        this.ITManPlayer.video.play();
        this.audioplayer.play();
        
      }
    videoPause= () =>{
        this.ITManPlayer.video.pause();
        this.audioplayer.pause();
    }
    videoSeek = () =>{
        this.audioplayer.currentTime = this.ITManPlayer.video.currentTime();
    }
    volumechange = () => {
        this.audioplayer.volume = this.ITManPlayer.video.volume();
        this.audioplayer.muted = this.ITManPlayer.video.muted();
    }

    componentDidMount(){
        // this.fetchVideo()
        let videoFetchInterval = setInterval(this.fetchVideo, 2000);
        this.setState({interrvalId: videoFetchInterval});
        let videoFetchTimeout = setTimeout(()=>{alert("Source not found");}, 30000);
        this.setState({timeoutId: videoFetchTimeout});
    }

    componentWillUnmount(){
        clearInterval(this.state.interrvalId);

    }

    render(){
        if (this.state.video_url !== "" && this.state.audio_url !== "")
        return (
            <div className="wrap">
              <ITManPlayer 
              ref={player => (this.ITManPlayer = player)}
              src = {this.state.video_url}
              eventON={{
                pause: () => {
                  console.log("Pause");
                  {this.videoPause()}
                },
                play: () => {
                  console.log("Play");
                  {this.videoPlay()}
                },
                seeked: () => {
                    {this.videoSeek()}
                    console.log("Seeked");
                  },
                volumechange: () => {
                    {this.volumechange()}
                    console.log("volumechange");
                }
                
              }}
              />

              {/* <button onClick={this.videoPlay}>Play</button>
              <button onClick={this.videoPause}>Pause</button> */}
              <audio ref={aud =>(this.audioplayer = aud)} src={this.state.audio_url} type="audo/mp4"></audio>
            </div>
          );

          else{
              return <div>
                  <h1>Loading</h1>
              </div>
          }
    }

}


export default Player