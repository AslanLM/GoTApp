import React, { useState } from 'react';
import './Components.css'

const Pagination = ({ totalItems, itemsPages, currentPage, setCurrentPage }) => {

    useState(1);

  const totalPages = Math.ceil(totalItems / itemsPages);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div id='pagination'>
      <button className='btn-prev' onClick={handlePrevPage} disabled={currentPage === 1}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.5em" viewBox="0 0 24 24"><path fill="#fff" d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875q-.375.375-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12q0-.375.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388q.375.375.375.875t-.375.875z"/></svg>
      </button>

      {pageNumbers.map((number) => (
        <button className={`btn-num ${currentPage === number ? 'active' : ''}`} key={number} onClick={() => setCurrentPage(number)}>
          {number}
        </button>
      ))}

      <button className='btn-next' onClick={handleNextPage} disabled={currentPage === totalPages}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.5em" viewBox="0 0 24 24"><path fill="#fff" d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10z"/></svg>
      </button>
    </div>
  );
};

export default Pagination;