import React, { Component } from 'react';
import Newsitems from './Newsitems';
import Spinning from './Spinning';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        category: 'general',
        country: 'in',
        pageSize: 6,
    };
    PropTypes = {
        category: PropTypes.string,
        country: PropTypes.string,
        pageSize: PropTypes.number,
    };
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`
    }
    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews()
    }
    updateNews = async () => {
        this.props.setprogress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setprogress(30);
        let parsedData = await data.json()
        this.props.setprogress(70);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        });
        this.props.setprogress(100);
    }
    async componentDidMount() {
        this.updateNews();
    };
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=be962abb5ca8445694c8a2fa1954b31a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        });
    };
    render() {
        return (
            <>
                <h1 className='text-center my-3'>NewsMonke <b>{this.capitalizeFirstLetter(this.props.category)}</b> Top  HeadLines</h1>
                {this.state.loading && <Spinning />};
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinning />}>
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <Newsitems title={element.title} description={element.description} imageurl={element.urlToImage} newsId={element.url}
                                        author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                                </div>
                            })};
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        );
    }
}

export default News;
