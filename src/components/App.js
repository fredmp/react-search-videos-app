import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from "./VideoDetail";
import YouTube from '../api/YouTube';

export default class App extends React.Component {
  state = { videos: [], selected: null };

  componentDidMount() {
    this.onTermSubmit('trending');
  }

  onTermSubmit = async (term) => {
    const response = await YouTube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selected: response.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selected: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selected} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
