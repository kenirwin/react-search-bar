import React from 'react';
import './SearchResultsList.css';
import { SearchResult } from './SearchResult';

export const SearchResultsList = (results) => {
  return (
    <div className='results-list'>
      {results.results.map((result, index) => {
        return <SearchResult result={result} key={index}></SearchResult>
      })}
    </div>
  )
}
