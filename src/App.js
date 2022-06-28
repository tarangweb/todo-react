import React, {createContext} from 'react';
import Todoform from './components/Todoform';

const TodoTitle = createContext();
const NotificationTitle = createContext();

function App() {
  return (
    <>
    <TodoTitle.Provider value={'WORKS TO BE DONE Tarang'}>
      <NotificationTitle.Provider value={'TO BE DONE:'}>
      <Todoform/>
      </NotificationTitle.Provider>
    </TodoTitle.Provider>
    </>
  );
}

export default App;
export {TodoTitle,NotificationTitle};