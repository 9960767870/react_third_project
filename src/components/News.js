import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=18e41f852dae4b14b77ae6b8ef02a96b&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData)
        this.setState({ articles: parseData.articles, 
            totalResults: parseData.totalResults ,
        loading:false});
    }

    constructor() {

        super();

        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    handlePreviusClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=18e41f852dae4b14b77ae6b8ef02a96b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData)

        this.setState({

            page: this.state.page - 1,
            articles: parseData.articles,
            loading: false
        })
    }

    handleNextClick = async () => {
        console.log(this.state.totalResults)
        // if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
        //     console.log("ture")
        // } 
        // if (!this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=18e41f852dae4b14b77ae6b8ef02a96b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData)
        this.setState(
            {
                page: this.state.page + 1,
                articles: parseData.articles,
                loading: false
            }
        )
        // }
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className="text-center">NewsMonkey - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading &&  this.state.articles.map((element) => {

                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 40) : ""} discription={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>

                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviusClick}> &larr; Previus</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
