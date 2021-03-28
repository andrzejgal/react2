import React from 'react';
import Header from '../../components/Header';

const Homepage=({title}) => {

const myList=['Zrobić kawy','Wyprowadzić psa','Poczytać książkę ','Podrzemać','Zjeść kolację'];
const listUnordered=myList.map((el,index)=> {
    return <li key={index}>{el}</li>
}
)


    return (
        <div>
            <Header/>
            {listUnordered }
        </div>
    );
}

export default Homepage;