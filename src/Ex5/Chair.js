import React, { Component } from 'react';
import './Chair.css';
import clsx from 'clsx';
import { connect } from 'react-redux';

export class Chair extends Component {
  render() {
    console.log(this.props)
    const {item, chairSelectedList, handleChair} = this.props;
    return (
      <button className={clsx('chair', 
      {
        booked: item.daDat,
        // find: nếu có thì trả về item thỏa mãn điều kiện, ngược lại trả về undefined
        // falsy gồm: null, undefined, '', 0, false, NaN
        booking: chairSelectedList.find((ele) => ele.soGhe === item.soGhe),
      })} 

      disabled={item.daDat}

      onClick={() => {
        handleChair(item)
      }}
      >{item.soGhe}</button>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    chairSelectedList: state.chair.chairSelectedList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleChair: (chair) => {
      dispatch({
        type: 'CHANGE_CHAIR',
        payload: chair,
      })      
    },
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (Chair);