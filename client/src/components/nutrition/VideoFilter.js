import React, {useState} from 'react';
import './styles/VideoFilter.scss';

const VideoFilter = (props) => {
    return (
        <div className="form__group field" style={{marginTop: '1vw'}}>
            <input type="input" className="form__field" name="name" id='name' required
                   placeholder='Filter by flower'
                   aria-label='Video'
                   aria-describedby='search'
                   value={props.input}
                   onChange={(e) => {
                       props.setInput(e.target.value)
                   }}/>
            <label htmlFor="name" className="form__label">Enter a nutrition category.</label>
        </div>
    )
};

export default VideoFilter;