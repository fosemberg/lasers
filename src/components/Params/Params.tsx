import React from 'react';
import {IParam} from "../../store/params";
import Param from "./components/Param/container";
import './Params.css';

interface IParams {
  params: IParam[];
}

const Params = ({params}: IParams) =>
  <table className='params'>
    <thead>
    <th>ПАРАМЕТР</th>
    <th>ЗНАЧЕНИЕ</th>
    <th>15 МИН.</th>
    <th>24 Ч.</th>
    </thead>
    <tbody>
    {
      params
        .filter(({groupId}) => groupId && groupId.includes(1))
        .map((param, key) => <Param {...{key}} {...param}/>)
    }
    </tbody>
  </table>

export default Params;