import React from 'react';
import {FaAngleDown, FaAngleUp, FaPen} from "react-icons/fa";
import {IParam} from "../../../../store/params";
import Relation from "./components/Relation/container";
import './Param.css'

interface IState {
  isOpen: boolean;
  isEdit: boolean;
  value: string;
}

interface IProps extends IParam {
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

  public componentWillReceiveProps(nextProps: Readonly<IProps>, nextContext: any): void {
    if (this.props.value !== nextProps.value) {
      this.setState({
        value: nextProps.value
      })
    }
  }

  public render() {
    const {
      state: {isOpen, isEdit, value},
      props: {name, measureUnit, description, relations}
    } = this
    return (
      <React.Fragment>
        <tr className='param'>
          <td className='param_main'>
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
                : <div>{value}</div>
            }
          </td>
          <td/>
          <td/>
          <td
            className={`button_icon ${isEdit ? ' button_icon_active' : ''}`}
            onClick={this.onClickEditButton}
          >
            <FaPen/>
          </td>
          {
            relations
              ? <td
                className={`button_icon ${isOpen ? ' button_icon_active' : ''}`}
                onClick={this.toggleOpen}
              >
                {isOpen ? <FaAngleUp/> : <FaAngleDown/>}
              </td>
              : <td/>
          }
        </tr>
        {
          relations && isOpen &&
          <div className='relations'>
            {
              relations.map((relation, key) => <Relation {...{key, relation}}/>)
            }
          </div>
        }
      </React.Fragment>
    );
  }

  private handleChange = (event: any) => {
    this.setState({
      value: event.target.value
    });
  }

  private onClickEditButton = () => {
    this.state.isEdit ? this.saveParam() : this.setEditOn()
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