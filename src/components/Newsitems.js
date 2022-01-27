import React, { Component } from 'react';

export class Newsitems extends Component {

    render() {
        let { title, description, imageurl, newsId, author, publishedAt, source } = this.props;
        return <div className='my-3' style={{ margin: "35px" }}>
            <div className="card" >
                <div style={{ display: 'flex', justifyContent: 'flex-end', right: '0', position: 'absolute' }}>
                    <span className=" badge rounded-pill bg-primary">
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
                <img src={imageurl !== null ? imageurl : "https://static.india.com/wp-content/uploads/2022/01/pjimage-2022-01-26T145631.429.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title ? title.slice(0, 40) : ""}..</h5>
                    <p className="card-text">{description ? description.slice(0, 88) : ""}..</p>
                    <p class="card-text"><small class="text-muted">By {author ? author : "Unknown"} on {publishedAt}</small></p>
                    <a href={newsId} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div >;
    }
}

export default Newsitems;
