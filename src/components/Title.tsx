import React from 'react';
import Badge from "react-bootstrap/Badge";

const Title: React.FC = () => {
    return (
        <div className="row mt-4">
        <div className="col text-center">
          <h1>
            {" "}
            <Badge className="text-align-center" >
              Markdown Previewer
            </Badge>
          </h1>
        </div>
      </div>

    )
}

export default Title
