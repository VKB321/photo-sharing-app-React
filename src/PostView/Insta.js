import './insta.css';
import heart from "../images/heart_fev.png"
import send from "../images/share.png"

function Insta(props) {
    return (
        <div className='content1'>
        <div className='content'>
            <div id='grid1name'>
                <p className='NameGrid'>
                    <b>{props.data.name}</b>
                    <p id='colour'>{props.data.location}</p>
                </p>
                <b id='dotFont'>...</b>
            </div>
            <img id='post' src={props.data.PostImage} alt='Loading image' />
            <div id='grid1name'>
                <p>
                    <img id='imglike' src={heart} alt='loading heart image'/>
                    <span><img id='imgsend' src={send} alt='loading heart image'/></span>
                    </p>
                <p id='dotFont1'>{props.data.date}</p>
            </div>
            <p id='colour1'>{props.data.likes} likes</p>
            <b id='description'>{props.data.description}</b>
        </div>
        </div>
    );
}

export default Insta;
