(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{31:function(e,t,n){e.exports=n(59)},36:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(27),i=n.n(r),c=(n(36),n(8)),l=n(9),u=n(11),s=n(10),d=n(13),v=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).player=a.a.createRef(),o.state={video_url:o.props.src},o}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("video",{className:"video-js vjs-big-play-centered","data-setup":"{}",ref:this.player})}},{key:"componentDidUpdate",value:function(e,t){this.props.src!==e.src&&(this.setState({video_url:this.props.src}),console.log(this.video.sources))}},{key:"componentDidMount",value:function(){var e=this,t=this.player.current;this.video=window.videojs(t,{sources:[{src:this.state.video_url}],controls:!0,fluid:!0}),console.log(this.props);var n=this.props.eventON;n&&Object.keys(n).forEach((function(t){e.video.on(t,(function(){n[t]()}))}))}},{key:"componentWillUnmount",value:function(){this.video&&this.video.dispose()}}]),n}(o.Component),h=n(28),m=n.n(h),f=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).videoPlay=function(){o.ITManPlayer.video.play(),o.audioplayer.play()},o.videoPause=function(){o.ITManPlayer.video.pause(),o.audioplayer.pause()},o.videoSeek=function(){o.audioplayer.currentTime=o.ITManPlayer.video.currentTime()},o.volumechange=function(){o.audioplayer.volume=o.ITManPlayer.video.volume(),o.audioplayer.muted=o.ITManPlayer.video.muted()},o.state={video_url:"",audio_url:"",loaded:!1,fetchcount:0},o.fetchVideo=o.fetchVideo.bind(Object(d.a)(o)),o}return Object(l.a)(n,[{key:"fetchVideo",value:function(){var e=this;if(1!=this.state.loaded){var t=this.props.location.search.substr(3),n="http://204.44.88.11/mitm/download/".concat(t,"/");m.a.get(n).then((function(t){var o=document.createElement("div");o.innerHTML=t.data;for(var a=o.querySelectorAll("a"),r=0;r<a.length;r++){var i=a[r].innerHTML;i.includes("audio")?e.setState({audio_url:n+i}):e.setState({video_url:n+a[r].innerHTML,loaded:!0})}clearInterval(e.state.interrvalId),clearTimeout(e.state.timeoutId)})).catch((function(e){console.log(e)}))}}},{key:"componentDidMount",value:function(){var e=setInterval(this.fetchVideo,2e3);this.setState({interrvalId:e});var t=setTimeout((function(){alert("Source not found")}),3e4);this.setState({timeoutId:t})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.interrvalId)}},{key:"render",value:function(){var e=this;return""!==this.state.video_url&&""!==this.state.audio_url?a.a.createElement("div",{className:"wrap"},a.a.createElement(v,{ref:function(t){return e.ITManPlayer=t},src:this.state.video_url,eventON:{pause:function(){console.log("Pause"),e.videoPause()},play:function(){console.log("Play"),e.videoPlay()},seeked:function(){e.videoSeek(),console.log("Seeked")},volumechange:function(){e.volumechange(),console.log("volumechange")}}}),a.a.createElement("audio",{ref:function(t){return e.audioplayer=t},src:this.state.audio_url,type:"audo/mp4"})):a.a.createElement("div",null,a.a.createElement("h1",null,"Loading"))}}]),n}(o.Component),p=n(29),y=n(1),g=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return console.log("/mitm-frontend"),a.a.createElement(p.a,{basename:"/mitm-frontend"},a.a.createElement(y.c,null,a.a.createElement(y.a,{path:"/",component:f})))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.f24fd9d2.chunk.js.map