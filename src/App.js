import React from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <div style={{width: 400, border: '1px solid black'}}>
          <h1>Layout works</h1>
        </div>
      </Layout>
    </div>
  );
}

export default App;