import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Result.css"

export class Result extends Component {
  render() {
    const {chairSelectedList, handlePay} = this.props
    return (      
    <div className='result ms-5'>
      <h3>Kết quả đặt vé</h3>
      <div>
        <table className='table table-dark text-light'>
          <thead>
            <tr>
              <th>
                Số ghế
              </th>
              <th>
                Giá tiền
              </th>
            </tr>
          </thead>
          <tbody>
            {chairSelectedList.map(item => {
                return ( <tr key={item.soGhe}>
                  <td>{item.soGhe}</td>
                  <td>{item.gia.toLocaleString()}</td>
                </tr>
                )})
            }
          </tbody>
        </table>
        <div className='mt-5 text-light fs-4 text fw-bolder'>
          Tổng tiền: {''} {
            chairSelectedList.reduce((total, item) => {
              return (total += item.gia)
              // số 0 có nghĩa total = 0
            }, 0).toLocaleString()}{''} VND
        </div>
        <div>
          <button className='mt-5 btn btn-success'onClick={handlePay}>Thanh toán</button>
        </div>
      </div>
    </div>
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
    handlePay: () => {
      dispatch({
        type: 'PAY'
      })
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)