import React from 'react';
import Input from './components/Input/Input';
import Preview from './components/Preview/Preview';
import Title from './components/Title';


function App() {


  return (
    <div className='container'>
          <Title />
          <div className="row mt-4">
          <Input />
          <Preview />
          </div>
    </div>
  );
}

export default App;
