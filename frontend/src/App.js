import UserBar from "./user/UserBar";
import React, { useState, useReducer, useEffect } from 'react'
import TodoList from "./todo/TodoList";
import CreateTodo from "./todo/CreateTodo";
import {v4 as uuidv4} from 'uuid';

import appReducer from "./reducers";
import ClearFinishedTodo from "./todo/ClearFinishedTodo";

import { useResource } from "react-request-hook";
import {StateContext} from './contexts'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage"; 
import Layout from "./pages/Layout";

function App() {


  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    todos: [],
  });

  return (
    <div>
        <StateContext.Provider value={{state, dispatch}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
              </Route>
              <Route path="/todo" element={<Layout />}>
                <Route path="/todo/create" element={<CreateTodo />} />
                <Route path="/todo/:id" element={<TodoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </StateContext.Provider>
    </div>
  );
}

export default App;

/*
          <div style={{marginTop: 50}}>
            <ClearFinishedTodo />
          </div>
          */

          // <UserBar  />
          // <HomePage  />
          // {state.user && <CreateTodo/>}