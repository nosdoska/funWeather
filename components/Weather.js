import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default ({ info: { city, cod, list } }) => (
  <CSSTransition timeout={1000} classNames="fade">
    {state => (
      <Fragment>
        {console.log(state)}
        {cod !== "200" ? (
          <p className="error">
            La ciudad ingresada no existe. Intenta con otra, please.
          </p>
        ) : (
          <div>
            <h2>
              {city.name}, {city.country}
            </h2>
            
            <p>El pronóstico para los próximo días es: </p>
            <ul>
              {list.slice(0, 6).map(({ main }) => (
                <li>
                  <p>
                    Mínima: {main.temp_min}
                  </p>
                  <p>
                    Máxima: {main.temp_max}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <style jsx>{`
          .error {
            color: red;
            text-align: center;
            margin: 0;
          }
        `}</style>
      </Fragment>
    )}
  </CSSTransition>
);
