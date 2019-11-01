import React from 'react';
import {connect} from 'react-redux';
import {nameFilter} from '../action/action'




const SearchFilter =({ nameFilter})=> {
        return ( 
            <div className="search"> 

                <div className="header">
                    
                    <input 
                       type="text"   
                       onChange={(event)=>nameFilter(event.target.value)}
                       id="header-text" 
                       />
                    <button type="button" id="header-search" value="search">Search</button>
                        

                </div>
            </div>
                
                
        
         )
    }

    
export default connect(null,{nameFilter})(SearchFilter);