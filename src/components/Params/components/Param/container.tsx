import {connect} from "react-redux";
import {saveParam} from "../../../../store/params/actions";
import ui from './Param';

export default connect(
  null,
  dispatch =>
    ({
      saveParam(name: string, value: string) {
        dispatch(saveParam(name, value))
      }
    })
)(ui)