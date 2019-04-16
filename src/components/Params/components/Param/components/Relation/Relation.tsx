import React from 'react'
import {FaPen} from "react-icons/fa"
import {IParam} from "../../../../../../store/params"
import './Relation.css'

interface IProps {
  relation: string;
  params: IParam[];
  saveParam: (name: string, value: string) => void;
}

interface IState {
  isEdit: boolean;
  value: string;
}

class Relation extends React.PureComponent<IProps, IState> {
  private readonly param: IParam | null;

  constructor(props: IProps) {
    super(props);

    this.param = this.getParamByName(props.relation, props.params)

    this.state = {
      isEdit: false,
      value: this.param && this.param.value || '',
    };
  }

  public componentWillReceiveProps(nextProps: Readonly<IProps>, nextContext: any): void {
    const {props} = this
    const param = this.getParamByName(props.relation, props.params)
    const nextParam = this.getParamByName(nextProps.relation, nextProps.params)
    if ((param && param.value) !== (nextParam && nextParam.value)) {
      this.setState({
        value: nextParam ? nextParam.value : ''
      })
    }
  }

  public render() {
    const {
      state: {isEdit, value},
      param,
    } = this
    return param
      ? <tr className='relation'>
        <td/>
        <td className='relation_name'>{param.name}, {param.measureUnit}</td>
        <td/>
        <td className='relation_value'>
          {
            isEdit
              ? <input {...{value}} onChange={this.handleChange}/>
              : <div>{value}</div>
          }
        </td>
        <td
          className={`button_icon ${isEdit ? ' button_icon_active' : ''}`}
          onClick={this.onClickEditButton}
        >
          <FaPen/>
        </td>
        <td className='button_icon'/>
      </tr>
      : null
  }

  private getParamByName = (name: string, params: IParam[]): IParam | null => {
    for (const param of params) {
      if (param.name === name) {
        return param
      }
    }
    return null
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
      this.param && this.param.name || '',
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
}

export default Relation;