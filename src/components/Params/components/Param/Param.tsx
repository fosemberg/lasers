import React from 'react';
import {IParam} from "../../../../store/params";
import Relation from "./components/Relation/container";

const Param = ({name, value, measureUnit, description, relations}: IParam) =>
  <React.Fragment>
    <tr>
      <td>{name}</td>
      <td>{value}</td>
      <td>{measureUnit}</td>
      <td>{description}</td>
      <td>
        {
          relations && '\/'
        }
      </td>
    </tr>
    {
      relations &&
      relations.map((relation, key) => <Relation {...{key, relation}}/>)
    }
  </React.Fragment>

export default Param;