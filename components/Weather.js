import React, { Fragment } from "react";

const getHour = timestamp => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  return hours + ":" + minutes.substr(-2);
};

export default ({ lookingFor, info: { city, cod, list } }) => {
  if (lookingFor === '') return null;

  return (
    <Fragment>
      {cod !== "200" ? (
        <p className="error">
          La ciudad ingresada no existe. Intenta con otra, please.
        </p>
      ) : (
        <div className="container">
          <h2>
            {city.name}, {city.country}
          </h2>

          <ul>
            {list.slice(0, 6).map(({ main, dt, weather }) => (
              <li key={dt}>
                <p>{getHour(dt)}</p>
                <p>
                  <i className={`owf owf-2x owf-${weather[0].id}`} />
                </p>
                <p>{Math.round(main.temp)}&deg;</p>
                <p>{Math.round(main.humidity)}% <br /> humedad</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style jsx>{`
        ul {
          max-width: 500px;
          margin: auto;
          padding: 0;
          list-style: none;
        }
        li {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        li p {
          text-align: center;
          align-self: center;
        }
        .container {
          text-align: center;
        }
        .error {
          color: red;
          text-align: center;
          margin: 0;
        }
      `}</style>
    </Fragment>
  );
}
