import React from 'react';
import {FaAngleDown, FaAngleUp, FaPen, FaSave} from "react-icons/fa";
import {IParam} from "../../../../store/params";
import Relation from "./components/Relation/container";

interface IState {
  isOpen: boolean;
  isEdit: boolean;
  value: string;
}

interface IProps extends IParam{
  saveParam: (name: string, value: string) => void;
}

class Param extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isOpen: false,
      isEdit: false,
      value: props.value,
    };
  }

  public render() {
    const {
      state: {isOpen, isEdit, value},
      props: {name, measureUnit, description, relations}
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
          <td className='param_value'>
            {
              isEdit
                ? <input {...{value}} onChange={this.handleChange}/>
                : value
            }

          </td>
          <td/>
          <td/>
          <td>
            {
              isEdit
                ? <span onClick={this.saveParam}>
                  <FaSave/>
                </span>
                : <span onClick={this.setEditOn}>
                  <FaPen/>
                </span>
            }
          </td>
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

  private handleChange = (event: any) => {
    this.setState({
      value: event.target.value
    });
  }

  private saveParam = () => {
    this.props.saveParam(
      this.props.name,
      this.state.value
    )
    this.setState({
      isEdit: false
    })
  }

  private setEditOn = () => {
    this.setState({
      isEdit: true
    })
  }

  private toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
}

export default Param;