import React from "react";
import BookItem from "./booksitem";
import "../App.css";
import { connect } from "react-redux";

const BookList = (props) => {
  const {mangas, nameFilter} = props
  console.log(nameFilter)
  return (
    <div className="mangas">
      {mangas.filter(el=>el.Title.toLowerCase().includes(nameFilter.toLowerCase())).map((manga, index) => (
        <BookItem manga={manga} key={index} />
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
     mangas: state.mangaReducers,
     nameFilter: state.titleFilterReducer.nameFilter
    }
}

export default connect(mapStateToProps)(BookList);
