import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './Pagination.scss'

const Pagination = ({ pages, getNewPage }) => {
  const [activePage, setActivePage] = useState(1)
  const dispatch = useDispatch()

  const movePage = (page) => {
    setActivePage(page)
    dispatch(getNewPage(page))
  }

  return (
    <div className="pagination">
    {pages.map(page => <button
      className="pagination__button"
      style={{ background: `${activePage === page ? 'rgb(248, 215, 215)' : ''}` }}
      onClick={() => movePage(page)}
      key={page}>{page}
    </button>)}
    </div>
  )
};

export default Pagination;