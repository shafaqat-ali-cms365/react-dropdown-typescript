import React, { CSSProperties } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';

const App: React.FC = () => {
  const fruitList = [
    {
      id: 0,
      title: 'select some option',
      selected: true,
    },
    {
      id: 1,
      title: 'Australia',
      selected: false,
    },
    {
      id: 2,
      title: 'India',
      selected: false,
    },
    {
      id: 3,
      title: 'United Kningdom',
      selected: false,
    },
    {
      id: 4,
      title: 'France',
      selected: false,
    },
  ];
  const app: CSSProperties = {
    backgroundColor: 'gray',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
  };
  const wrapperStyle: CSSProperties = {
    display: 'flex',
    width: '460px',
  };
  return (
    <div style={app}>
      <div>Dropdown menu examples</div>
      <br></br>
      <div style={wrapperStyle}>
        <Dropdown title="Select fruit" list={fruitList} />
      </div>
    </div>
  );
};

export default App;
