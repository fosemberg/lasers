import React from 'react';
import {FaPen} from "react-icons/fa";
import {IParam} from "../../../../../../store/params";

interface IProps {
  relation: string;
  params: IParam[];
}

const getParamByName = (name: string, params: IParam[]): IParam | null => {
  for (const param of params) {
    if (param.name === name) {
      return param
    }
  }
  return null
}

const Relation = ({relation, params}: IProps) => {
  const param = getParamByName(relation, params)
  return param
    ? <tr>
      <td/>
      <td>{param.name}</td>
      <td>{param.measureUnit}</td>
      <td>{param.value}</td>
      <td><FaPen/></td>
    </tr>
    : null
}

export default Relation;