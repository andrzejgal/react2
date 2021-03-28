import React from 'react';
import Header from '../../components/Header';

const Homepage=({title}) => {

// const myList=["Piotr","Asia","Paweł","Kamila"];

// const createdList=myList.map(()=>{
//     return <li></li>
// })
//zamiast <li></li> możemy przekazać komponent Header
// const createdList=myList.map(()=>{
//     return <Header name="Piotr"/> //będzie wyświetlany tylko Piotr
// })
//lepsza wersja
//const createdList=myList.map((el)=>{
    //return <Header name={el}/> //teraz imiona będą wyświetlane prawidłowo, ale program zwraca błąd, że brakuj kry
//})
//można tak zrobić listę, aby kluczem było id
// const myList=[
//     {id:1,text:"Piotr"},
//     {id:2,text:"Asia"},
//     {id:3,text:"Paweł"},
//     {id:4,text:"Kamila"}
// ];
// const createdList=myList.map((el)=>{
//     return <Header key={el.id} name={el.text}/>
// });

//używanie indeksu tablicy jako klucza
 const myList=["Piotr","Asia","Paweł","Kamila"];
 const createdList=myList.map((el,index)=>{
     return <Header key={index} name={el}/>
 });

 /* 
 JAKO IDENTYFIKATOR MOŻNA UŻYĆ nanoId  https://www.npmjs.com/package/nanoid
 */




    return (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <div>
            {
                myList.map((el,index)=> {
                   return <Header key={index} name={el}/>
                }

                )
            }
{/* używanie wewnątrz returna */}
            {/*createdList*/}
{/*musialem skasować - patrz lekcja poprzednia   */  }
        <p>To jest mój pierwszy test</p>
        <p>Test</p>
        </div>
    );
}

export default Homepage;