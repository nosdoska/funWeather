import { Fragment, Component } from "react";
import debounce from "lodash/debounce";
import FetchWeather from "../containers/FetchWeather";
import Weather from './Weather';

export default class extends Component {
  constructor(props) {
    super(props);

    this.get = this.get.bind(this);
    this.get = debounce(this.get, 500);
  }

  state = {
    city: ""
  };

  onChange = fetcher => event => {
    const { value } = event.target;

    this.setState({ city: value }, () => {
      this.get(fetcher);
    });
  };

  get(fetcher) {
    fetcher(this.state.city);
  }

  render() {
    const { city } = this.state;
    return (
      <Fragment>
        <FetchWeather>
          {({ getWeather, loading, response }) => (
            <Fragment>
              <form method="post">
                <div>
                  <input
                    type="text"
                    value={city}
                    placeholder="London"
                    onChange={this.onChange(getWeather)}
                    className={`input ${loading ? "is-loading" : null}`}
                  />
                </div>
              </form>

              {response ? <Weather info={response} /> : null}
            </Fragment>
          )}
        </FetchWeather>

        <style jsx>{`
          ::-webkit-input-placeholder {
            /* Chrome/Opera/Safari */
            color: rgba(0, 0, 0, 0.3);
          }
          ::-moz-placeholder {
            /* Firefox 19+ */
            color: rgba(0, 0, 0, 0.3);
          }
          :-ms-input-placeholder {
            /* IE 10+ */
            color: rgba(0, 0, 0, 0.3);
          }
          :-moz-placeholder {
            /* Firefox 18- */
            color: rgba(0, 0, 0, 0.3);
          }

          form {
            text-align: center;
          }

          .input {
            border-radius: 3px;
            border: 2px solid rgba(91, 94, 109, 0.4);
            box-sizing: border-box;
            color: rgba(91, 94, 109, 0.8);
            display: block;
            font-size: 1rem;
            margin: 4rem auto;
            width: 300px;
            padding: 1rem;
          }

          .input:focus {
            outline: none;
          }

          .input.is-loading {
            background-color: #ffffff;
            background-image: url("http://loadinggif.com/images/image-selection/8.gif");
            background-size: 25px 25px;
            background-position: 95% center;
            background-repeat: no-repeat;
          }
        `}</style>
      </Fragment>
    );
  }
}
