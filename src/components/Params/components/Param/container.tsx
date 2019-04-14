import {connect} from "react-redux";
import {saveParam} from "../../../../store/params/actions";
import ui from './Param';

export default connect(
  null,
  {saveParam}
)(ui)