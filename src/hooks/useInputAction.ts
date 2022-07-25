import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as setMarkdown from "../store/action-creators/input";



export const useInputAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators({...setMarkdown}, dispatch)
}