import React from 'react';
import TaskListContextProvider from './context/TaskListContext';
import TaskList from './TaskList';
import Header from './Header';
import '../components/App.css';
import TaskInput from './TaskInput';

const App = () => {
    return (
        <TaskListContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <Header />
                    <div className="main">
                        <TaskInput />
                        <TaskList />
                    </div>
                </div>
            </div>
        </TaskListContextProvider>
    );
}
export default App;