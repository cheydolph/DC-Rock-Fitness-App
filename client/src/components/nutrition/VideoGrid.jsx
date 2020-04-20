import React, {useEffect, useState} from 'react';

const VideoGrid = (props) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        setVideos(props.videos);
    }, []);

    return (
        <div className='grid video-container'>
            {
                videos.filter(vid => {
                    if (props.filter.trim() !== '') {
                        const regexp = new RegExp(escapeRegExp(props.filter.trim().toLowerCase()));
                        if (vid) {
                            const result = vid.name.trim().toLowerCase().match(regexp);
                            return result && result.length > 0;
                        }
                        return false;
                    }
                    return true;
                }).map((vid) => {
                    return <Video id={vid.id} name={vid.name} src={videos[videos.indexOf(vid)].url}/>
                })
            }
        </div>
    );
};

const Video = (props) => {
    return (
        <div style={{padding: '20px'}}>
            <h5 style={{'background-color':'black', color:'#dc143c', 'border-radius':'6px'}}>{props.name}</h5>
            <img
                onClick={()=>{window.open("https://youtu.be/"+props.id,"_blank")}}
                className='video-card'
                src={props.src}
                style={{
                    cursor: 'pointer',
                    width: '320px',
                    height: '180px'
                }} alt={`Link failed from ${props.src}`}/>
        </div>
    )
};

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

export default VideoGrid;