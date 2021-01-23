import {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import YearTable from './components/YearTable';
import MonthTable from './components/MonthTable';
import SortTable from './components/SortTable';
import './App.css';

export default function App() {
  const [list, setList] = useState([]);

  const getFetch = async() => {
    const response = await fetch(process.env.REACT_APP_FETCH);
    const answer = await response.json();
    const list = answer.list;
    const listWithId = list.map(i => ({...i, id: nanoid()}))
    setList(listWithId)

  }

  useEffect(() => {
     getFetch();
  },[])
  
  return (
      <div id="app">
          <MonthTable list={list} />
          <YearTable list={list} />
          <SortTable list={list} />
      </div>
  );
}
