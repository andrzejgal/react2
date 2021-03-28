import React from "react";

// const Header = (props) => {
//     return (
//         <div>
//             <h1>To jest kurs react-funkcja,witam Cię {props.name}</h1>
//         </div>
//     )
// }

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>To jest kurs react-klasa,witam Cię {this.props.name}</h1>
            </div>
        )    
    }
}

export default Header;