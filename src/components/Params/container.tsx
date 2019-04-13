import {connect} from "react-redux";
import {IState} from "../../store";
import ui from './Params';

export default connect(
  (state: IState) =>
    ({
      params: [...state.params]
    }),
  null
)(ui)