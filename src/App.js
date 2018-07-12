import React, { Component } from "react";
import { Input, Row } from "react-materialize";
import { connect } from "react-redux";
import "./style.css";

class App extends Component {
  onChangeHotel = e => {
    e.preventDefault();
    this.setState({
      hotelIDs: Number.parseInt(e.target.value)
    });
  };
  onChangeCheckIn = e => {
    e.preventDefault();
    this.setState({
      dayIn: e.target.value
    });
  };
  onChangeCheckOut = e => {
    e.preventDefault();
    this.setState({
      dayOut: e.target.value
    });
  };
  onChangeGuests = e => {
    e.preventDefault();
    this.setState({
      guests: Number.parseInt(e.target.value)
    });
  };
  onChangeCurrency = e => {
    e.preventDefault();
    this.setState({
      currency: e.target.value
    });
  };

  render() {
    const { data } = this.props;
    return (
      <div className="container">
        <h3 className="center">Get Price Ctrip</h3>

        <Row>
          <Input
            s={12}
            m={6}
            type="select"
            label="Choose Your Hotel"
            defaultValue="1"
            onChange={this.onChangeHotel}
          >
            <option value={996317}>Regent, Singapore</option>
            <option value={6347584}>Remm Roppongi, Tokyo</option>
            <option value={396352}>Gateway Hotel Marco Polo, HongKong</option>
            <option value={993099}>
              Sheraton Saigon Hotel, Ho Chi Minh City
            </option>
            <option value={687796}>The Westin, Singapore</option>
          </Input>
        </Row>
        <div className="row">
          <div className="col s12 m6">
            <label htmlFor="">Check-in Date</label>
            <input onChange={this.onChangeCheckIn} type="date" />
          </div>
          <div className="col s12 m6">
            <label htmlFor="">Check-in Out</label>
            <input onChange={this.onChangeCheckOut} type="date" />
          </div>
        </div>
        <Row>
          <Input
            s={12}
            m={6}
            type="select"
            label="Number of Guests"
            defaultValue="1"
            onChange={this.onChangeGuests}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </Input>
          <Input
            onChange={this.onChangeCurrency}
            s={12}
            m={6}
            type="select"
            label="Currency"
            defaultValue="1"
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="JPY">Yen</option>
          </Input>
          <button onClick={this.onRequestApi} className="btn">
            Get Price
          </button>
        </Row>

        <div id="output" />
        <h4>{data}</h4>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestApi: e => {
      e.preventDefault();
      dispatch({ type: "API_CALL_REQUEST" });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
