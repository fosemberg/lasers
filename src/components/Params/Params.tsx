import React from 'react';
import {IParam} from "../../store/params";
import Param from "./components/Param/container";
import './Params.css';

interface IParams {
  params: IParam[];
  synchronize: () => void;
}

class Params extends React.PureComponent<IParams, {}> {
  private synchronizeInterval: any
  constructor(props: IParams) {
    super(props);
  }

  public componentDidMount(): void {
    this.synchronizeInterval = setInterval(this.props.synchronize, 1000)
  }

  public componentWillUnmount(): void {
    clearInterval(this.synchronizeInterval)
  }

  public render() {
    const {
      props: {params}
    } = this

    return <table className='params'>
    <thead className='params__header'>
    <th className='params__header_main'>ПАРАМЕТР</th>
    <th className='params__header_value'>ЗНАЧЕНИЕ</th>
    <th className='params__header_minutes'>15 МИН.</th>
    <th className='params__header_hours'>24 Ч.</th>
    <th/>
    <th/>
    </thead>
    <tbody>
    {
      params
        .filter(({groupId}) => groupId && groupId.includes(1))
        .map((param, key) => <Param {...{key}} {...param}/>)
    }
    </tbody>
  </table>
  }
}

export default Params;