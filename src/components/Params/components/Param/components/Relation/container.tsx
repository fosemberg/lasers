import {connect} from "react-redux";
import {IState} from "../../../../../../store";
import ui from './Relation';

export default connect(
  (state: IState) =>
    ({
      params: [...state.params]
    }),
  null
)(ui)