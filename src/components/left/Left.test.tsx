import React from 'react';
import ReactDOM from 'react-dom';
import Left from './Left';

it('renders without crashing', () => {
  const div = document.createElement('div');
  let user = { id: 'testuser', name: 'testuser' };
  let space = { id: 'testspace', name: 'testspace' };
  ReactDOM.render(<Left user={user} space={space} createChannel={() => {}} joinChannel={() => {}} selectChannel={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
