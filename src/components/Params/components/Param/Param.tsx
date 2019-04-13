import React from 'react';
import {FaAngleDown, FaAngleUp, FaPen} from "react-icons/fa";
import {IParam} from "../../../../store/params";
import Relation from "./components/Relation/container";

interface IState {
  isOpen: boolean;
}

class Param extends React.PureComponent<IParam, IState> {
  constructor(props: IParam) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  public render() {
    const {
      state: {isOpen},
      props: {name, value, measureUnit, description, relations}
    } = this
    return (
      <React.Fragment>
        <tr>
          <td className='param'>
            <div className='param_name'>
            {name},{measureUnit}
            </div>
            <div className='param_description'>
              {description}
            </div>
          </td>
          <td className='param_value'>{value}</td>
          <td/>
          <td/>
          <td><FaPen/></td>
          <td>
            {
              relations &&
              <span onClick={this.toggleOpen}>
                {
                  isOpen
                    ? <FaAngleUp/>
                    : <FaAngleDown/>
                }
              </span>
            }
          </td>
        </tr>
        {
          relations && isOpen &&
          relations.map((relation, key) => <Relation {...{key, relation}}/>)
        }
      </React.Fragment>
    );
  }

  private toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
}

export default Param;