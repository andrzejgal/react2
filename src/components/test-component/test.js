import React from 'react';

// const Test = (props) => {
//     return (
//         <ul>
//         {props.myList.map(item => {
//           return <li key={item}>{item}</li>;
//         })}
//       </ul>

//     );
// }

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.myList = props.myList;
    }
    render() {
        return (
            <ul>
                {this.myList.map(item => {
                    return <li key={item}>{item}</li>;
                })}
            </ul>
        )
    }
}

export default Test

