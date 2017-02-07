import axios from 'axios'
import { SubmissionError } from 'redux-form'
import qs from 'qs'

const fetch = (url) => {
        // Make a request for a user with a given ID
        axios.get(url)
          .then(function (response) {
            return response;
          })
          .catch(function (error) {
            console.log(error);
            return error;
          });
    }

const defaultParams = {
    _sand_ajax :1,
    _sand_web_app_id: '123',
    _sand_app_name: 'vlms'
}

const parse_error = (json) => {
    let e = {};
    let err = json.err;
    console.log(err);

    for (let i in err)
    {
        e[i] = 'Error: ';
        for (let j in err[i])
        {
            console.log(j, err[i][j]);

            e[i] = e[i] + ' ' + err[i][j]
        }
    }
    console.log(e);
    e._error = json.message;
    // console.log('------------------error-------------------', e);
    // alert("Error");
    return e;
}

const submit = (values) => {
        let url = "http://vlms.dev//dev/playground/sleep";
        let data = Object.assign({}, values, defaultParams);
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

        return axios.post(url, qs.stringify(data))
          .then(function (response) {
//            throw new SubmissionError({ username: 'User does not exist', _error: 'Login failed!' })
            //return response;
            if (response.data && !response.data.success)
            {
                let e = parse_error(response.data);
                console.log(e);
                throw new SubmissionError(e)
            }
          })
    }


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const submit_ok = (values) => {
  return sleep(1000) // simulate server latency
    .then(() => {
        throw new SubmissionError({ username: 'User does not exist', _error: 'Login failed!' })
    })
}


export {fetch, submit, submit_ok}
