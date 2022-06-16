import React from "react";
import { useDispatch } from "react-redux";

const Pagination = ({pages, getNewPage}) => {
  const dispatch = useDispatch()
  return (
    pages.map(page => <button onClick={() => dispatch(getNewPage(page))} key={page}>{page}</button>)
  )
};

export default Pagination;