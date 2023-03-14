import React, { Component } from 'react';
import ChairList from './ChairList';
import Result from './Result';
import "./MovieBooking.css";
import clsx from 'clsx';

class MovieBooking extends Component {
  render() {
    return (
      <div className={clsx('container')}>
        <h2 className='text-center text-light fw-bold my-4 pt-4'>ĐẶT VÉ XEM PHIM</h2>
        <div className='row'>
          <div className='col-8'>
            <div className='screen text-white mb-4 text-center fs-4'>Màn hình</div>
            <ChairList />
          </div>
          <div className='col-4'>
            <Result />
          </div>
        </div>
      </div>
    )
  }
}

export default MovieBooking;