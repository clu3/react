import React, {Component} from 'react'
import Form from "react-jsonschema-form"

const schema = {
  type: "object",
  required: ["lat", "lon"],
  properties: {
    lat: {type: "number"},
    lon: {type: "number"}
  }
};

// Define a custom component for handling the root position object
class GeoPosition extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, props.formData);
  }

  onChange(name) {
    return (event) => {
      this.setState({
        [name]: parseFloat(event.target.value)
      }, () => this.props.onChange(this.state));
    };
  }

  render() {
    const {lat, lon} = this.state;
    var style = {border : "1px solid black"};

    return (
      <div style={style}>
        <input placeholder="lat" type="number" value={lat} onChange={this.onChange("lat")} />
        <input placeholder="long" type="number" value={lon} onChange={this.onChange("lon")} />
      </div>
    );
  }
}

// Define the custom field component to use for the root object
const uiSchema = {"ui:field": "geo"};

// Define the custom field components to register; here our "geo"
// custom field component
const fields = {geo: GeoPosition};
const log = (type) => console.log.bind(console, type);

class MyForm extends Component
{
    render() {
        return (
            <div>
            <h3>react-jsonschema-form</h3>
          <Form
            schema={schema}
                
            uiSchema={uiSchema}
            fields={fields}
            onChange={log("changed")}
        />
            </div>
    )
    }
}
export default MyForm;