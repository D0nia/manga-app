import { DELETE_MANGA ,ADD_MANGA,EDIT_MANGA } from "./type";

export const deletemanga = id => {
  return { 
      type: DELETE_MANGA,
       id 
    }
};
export const addmanga = newManga =>{
  return{
    type : ADD_MANGA,
    newManga
  }
};
export const editmanga = editedManga =>{
  return{
    type : EDIT_MANGA,
    editedManga
  }
}

export const nameFilter = (titleFilter)=>({
      type:'SET_TITLE_FILTER',
      titleFilter
  })
  