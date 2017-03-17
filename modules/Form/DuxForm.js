import React, {Component} from 'react'
import { reduxForm, Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import { RadioButton } from 'material-ui/RadioButton'
import { submit } from '../../Api'

// const submit = Api.submit;
// console.log(Api);
console.log(submit);

import {
  Checkbox,
  RadioButtonGroup,
  SelectField,
  TextField,
  Toggle
} from 'redux-form-material-ui'

/*
const MyField = ({hinttext, name, component, meta: { touched, error, warning } }) => (
    <div>
      <Field name={name} component={component} hintText={hintText}/>
        <div>
          {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)
*/


class DuxForm extends Component {
    constructor (props)
    {
        super(props);
        this.props = props
    }

   render() {
    const { error, handleSubmit, pristine, reset, submitting } = this.props
//    console.log(handleSubmit);

    return (
        <form onSubmit={handleSubmit(submit)}>
        <h1>Edit syllabus #{this.props.params.syllabusId} #DuxForm </h1>
        <div>
        <Field name="username" component={TextField} hintText="Street"/>
        </div>

        <div>
            <Field name="plan" component={SelectField} hintText="Select a plan">
              <MenuItem value="monthly" primaryText="Monthly"/>
              <MenuItem value="yearly" primaryText="Yearly"/>
              <MenuItem value="lifetime" primaryText="Lifetime"/>
            </Field>
        </div>

        <Field name="agreeToTerms" component={Checkbox} label="Agree to terms?"/>

        <div className='smallDiv'>
        <Field name="receiveEmails" component={Toggle} label="Please spam me!"/>
        </div>

        <label>Choose the best bestFramework</label>
        <Field name="bestFramework" component={RadioButtonGroup}>
              <RadioButton value="react" label="React"/>
              <RadioButton value="angular" label="Angular"/>
              <RadioButton value="ember" label="Ember"/>
        </Field>

        <button type="submit" disabled={submitting}>Log In</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>

      </form>
    )
  }
}

// Decorate with redux-form
DuxForm = reduxForm({
  form: 'DuxForm'
})(DuxForm)

export default DuxForm