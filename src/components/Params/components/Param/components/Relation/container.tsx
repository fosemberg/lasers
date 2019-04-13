import {connect} from "react-redux";
import {IState} from "../../../../../../store";
import {saveParam} from "../../../../../../store/params/actions";
import ui from './Relation';

export default connect(
  (state: IState) =>
    ({
      params: [...state.params]
    }),
  dispatch =>
    ({
      saveParam(name: string, value: string) {
        dispatch(saveParam(name, value))
      }
    })
)(ui)