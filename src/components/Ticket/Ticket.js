import React from "react";
import "./Ticket.css";

export default class Ticket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countriesData: {
        Iran: ["Tabriz", "Tehran", "Shiraz", "Esfahan", "Mashhad"],
        Turkey: ["Istanbul", "Ezmir", "Ankara", "Antaliya"],
        US: ["Los Angles", "San Diego", "Chicago"],
      },
      mainCountryCities: [],
    };
  }
  countryHandler(event) {
    this.setState({
      mainCountryCities: this.state.countriesData[event.target.value],
    });
  }
  render() {
    return (
      <div className="container">
        <div className="col-md-6 box">
          <input className="fnameInput" placeholder="First Name" />
        </div>

        <div className="col-md-6 box">
          <input className="lnameInput" placeholder="Last Name" />
        </div>
        <div className="col-md-6 box">
          <input className="phoneInput" placeholder="Phone Number" />
        </div>
        <div className="col-md-6 box">
          <input className="emailInput" placeholder="Email" />
        </div>
        <div className="col-md-6 box">
          <select
            onChange={this.countryHandler.bind(this)}
            className="countrySelect"
          >
            <option value="-1">Please Select ...</option>
            <option className="option" value="Iran">
              Iran
            </option>
            <option className="option" value="Turkey">
              Turkey
            </option>
            <option className="option" value="US">
              United State
            </option>
          </select>
        </div>
        <div className="col-md-6 box">
          <select className="citySelect">
            {/* <option value="-1">Please Select City</option> */}
            {this.state.mainCountryCities.map((city) => (
              <option value="-1">{city}</option>
            ))}
          </select>
        </div>
        <div className="col-md-12 box">
          <button className="btn">Book a ticket</button>
        </div>
      </div>
    );
  }
}
