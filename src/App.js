import React, { Component } from "react";
import { Input, Row } from "react-materialize";
import { connect } from "react-redux";
import "./style.css";

const bodyData = JSON.stringify({
  CheckInTime: "2018-07-13",
  CheckOuttime: "2018-07-14",
  HotelIDs: "[345001]",
  Language: "en_US",
  Currency: "USD",
  QueryType: "SP",
  Adults: 2,
  Device: "Desktop",
  AllianceID: 310725,
  SID: 789742,
  QueryKey: ""
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: [],
      dayIn: "",
      dayOut: "",
      guests: "",
      hotelID: "",
      currency: "USD",
      hoteldata: [],
    };
  }

  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  componentWillReceiveProps(nextProps) {
    const hoteldata = nextProps.hotelData.DataResponse ? nextProps.hotelData.DataResponse.Hotel : [];
    this.setState({
      hoteldata
    });
  }

  render() {
    return (
      <div className="container">
        <h3 className="center">Get Price Ctrip</h3>
        <Row>
          <Input
            s={12}
            m={6}
            name="hotelID"
            type="select"
            label="Choose Your Hotel"
            defaultValue="1"
            onChange={this.onChange}
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
            <input name="dayIn" onChange={this.onChange} type="date" />
          </div>
          <div className="col s12 m6">
            <label htmlFor="">Check-in Out</label>
            <input name="dayOut" onChange={this.onChange} type="date" />
          </div>
        </div>
        <Row>
          <Input
            s={12}
            m={6}
            type="select"
            name="guests"
            label="Number of Guests"
            defaultValue="1"
            onChange={this.onChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </Input>
          <Input
            onChange={this.onChange}
            s={12}
            m={6}
            name="currency"
            type="select"
            label="Currency"
            defaultValue="1"
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="JPY">Yen</option>
          </Input>
          <button onClick={() => this.props.onRequestApi(bodyData)} className="btn">
            Get Price
          </button>
        </Row>
        <div id="output" />
        <h4>
        {this.state.hoteldata && this.state.hoteldata.map((hotel) => (
          <div key={hotel.HotelID}>
            HotelID: {hotel.HotelID}
          </div>
        ))}
        </h4>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hotelData: state.hotelData
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestApi: (bodyData) => {
      dispatch({ type: "API_CALL_REQUEST", data: bodyData });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
