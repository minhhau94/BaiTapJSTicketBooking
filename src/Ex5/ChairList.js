import React, { Component } from "react";
import { connect } from "react-redux";
import Chair from "./Chair";
import "./ChairList.css";

export class ChairList extends Component {
  render() {
    console.log(this.props);

    const { chairList } = this.props;
    return (
      <div className="chairList d-flex flex-column gap-3 align-items-center">
        {chairList.map((item) => {
          return (
            <div key={item.hang} className="d-flex align-items-center">
              <div className="text-warning fw-semibold fs-5" style={{ width: "30px" }}>{item.hang}</div>
              <div className="d-flex gap-3">
                {item.danhSachGhe.map((chair) => {
                  return <Chair key={chair.soGhe} item={chair} />;
                })}
              </div>
            </div>
          );
        })}

        <div className="mt-4">
          <p className="d-inline text-light me-5">
            <span className="chairBooked"> </span>Ghế đã đặt
          </p>
          <p className="d-inline text-light me-5">
            <span className="chairBooking"></span>Ghế đang chọn
          </p>
          <p className="d-inline text-light me-5">
            <span className="chairBlank"></span>Ghế chưa đặt
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chairList: state.chair.chairList,
  };
};

export default connect(mapStateToProps)(ChairList);
