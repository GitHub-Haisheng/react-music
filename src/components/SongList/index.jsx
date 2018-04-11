/*
 * @Author: 余小蛮-1029686739@qq.com 
 * @Date: 2018-04-11 22:48:13 
 * @Last Modified by: 余小蛮-1029686739@qq.com
 * @Last Modified time: 2018-04-12 00:29:03
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { autobind } from 'core-decorators'
import './style.less'

class SongList extends Component {
  static defaultProps = {
    songs: []
  }
  static propTypes = {
    songs: PropTypes.array.isRequired
  }
  render() {
    return (
      <div className="song-list">
        <ul>
          {this.props.songs.map(song => (
            <li key={song.id} className="item">
              <div className="content">
                <h2 className="name">{song.name}</h2>
                <p className="desc">
                  {song.singer}-{song.album}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default SongList