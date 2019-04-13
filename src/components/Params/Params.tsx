import React from 'react';
import {IParam} from "../../store/params";
import Param from "./components/Param/Param";

interface IParams {
  params: IParam[];
}

const Params = ({params}: IParams) =>
  <table>
    <thead>
    <th>name</th>
    <th>value</th>
    <th>measureUnit</th>
    <th>description</th>
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