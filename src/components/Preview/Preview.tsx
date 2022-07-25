import { marked } from 'marked';
import React from 'react'
import Badge from "react-bootstrap/Badge";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './Preview.css';

const Preview: React.FC = () => {
  const { input } = useTypedSelector(state => state.input);
 
  marked.setOptions({
    breaks: true
  });
  const renderer = new marked.Renderer();

  return (
    <div className="col-md-6">
      <div className="col text-center">
        <h4>
          <Badge className="text-align-center">
            Preview
          </Badge>
        </h4>
        </div>
          <div id='preview'
          dangerouslySetInnerHTML={{ 
            __html: marked(input, {renderer: renderer}) }}
        >
        </div>
        
        
      
    </div>
  )
}


export default Preview
