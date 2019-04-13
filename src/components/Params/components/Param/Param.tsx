import React from 'react';
import {FaAngleDown, FaPen} from "react-icons/fa";
import {IParam} from "../../../../store/params";
import Relation from "./components/Relation/container";

const Param = ({name, value, measureUnit, description, relations}: IParam) =>
  <React.Fragment>
    <tr>
      <td>{name}</td>
      <td>{measureUnit}</td>
      <td>{description}</td>
      <td>{value}</td>
      <td><FaPen/></td>
      <td>
        {
          relations && <FaAngleDown/>
        }
      </td>
    </tr>
    {
      relations &&
      relations.map((relation, key) => <Relation {...{key, relation}}/>)
    }
  </React.Fragment>

export default Param;