import {connect} from "react-redux";
import {IStoreState} from "../../store";
import {synchronize} from "../../store/params";
import ui from './Params';

export default connect(
  (state: IStoreState) =>
    ({
      params: [...state.params]
    }),
  { synchronize }
)(ui)