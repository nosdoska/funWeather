import { Fragment } from 'react';
import Link from 'next/link'
import Form from '../components/Form';

export default () => (
  <Fragment>
    <div>
      <h1 className="text title">Bienvenido a funWeather</h1>
      <h4 className="text subtitle">
        Escribe el nombre de una ciudad y presiona <i>Enter</i> para obtener información del tiempo
      </h4>

      <Form />
    </div>

    <style jsx>{`
      .text {
        color: #323648;
        text-align: center;
      }

      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        letter-spacing: -0.2rem;
        font-size: 4.8rem;
      }

      .subtitle {
        color: #5b5e6d;
        font-size: 1.2rem;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-weight: 400;
      }
    `}</style>
  </Fragment>
)
