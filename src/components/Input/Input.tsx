import Badge from "react-bootstrap/Badge";
import './Input.css';
import { useInputAction } from '../../hooks/useInputAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Input: React.FC = () => {
    const { input } = useTypedSelector(state => state.input);
    const { setMarkdown } = useInputAction()

    return (

        <div className="col-md-6">
            {" "}
            <div className="col text-center">
                <h4>
                    <Badge className="text-align-center">
                        Markdown Input
                    </Badge>
                </h4>

                <textarea id="editor"
                    value={input}
                    onChange={(e) => setMarkdown(e.target.value)}
                >
                </textarea>
            </div>
        </div>

    )
}

export default Input
