import React, {Component} from 'react'
import Form from "react-jsonschema-form";
//import RaisedButton from 'material-ui/RaisedButton';
 
const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false}
  }
};

const formData = {
  title: "First task",
  done: true
};

const log = (type) => console.log.bind(console, type);



class NewSyllabus extends Component
{
  // constructors (props)
  // {
  //   super(props);
  // }

  render() {
    return (
        <div>
        <h3>sample json schema</h3>
        <Form schema={schema}
                formData={formData}
                onChange={log("changed")}
                onSubmit={log("submitted")}
            onError={log("errors")} />
        </div>
    )
  }
}

export default NewSyllabus





