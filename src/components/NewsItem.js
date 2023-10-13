import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,discription,imageUrl,newsUrl}=this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://media.cnn.com/api/v1/images/stellar/prod/230912113412-02-kevin-mccarthy-091223.jpg?c=16x9&q=w_800,c_fill":imageUrl} className="card-img-top" style={{height: "189px"}} alt="image are not available"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{discription}...</p>
                            <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
