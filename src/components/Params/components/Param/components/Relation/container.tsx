import {connect} from "react-redux";
import {IStoreState} from "../../../../../../store";
import {saveParam} from "../../../../../../store/params";
import ui from './Relation';

export default connect(
  (state: IStoreState) =>
    ({
      params: [...state.params]
    }),
  {saveParam}
)(ui)