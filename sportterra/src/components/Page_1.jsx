import React, { useState,Component } from "react";

import DropdownButton, { Item,Variants } from 'terra-dropdown-button';


const GhostDropdownButton = () => {
    
  const [message, setMessage] = useState('Select an option');

    
 
  return (
    
      <DropdownButton
        label={message}
        variant={Variants.EMPHASIS}  
      >
        <Item label="1st Option" onSelect={() => setMessage('1st option')} />
        <Item label="2nd Option" onSelect={() => setMessage('2st option')}/>
        <Item label="3rd Option" onSelect={() => setMessage('3t option')}/>
        <Item label="4th Option" onSelect={() => setMessage('4st option')} />
      </DropdownButton>
      
  );
 
};
export default GhostDropdownButton;



// class Home extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             topic:'react'
//         }
//     }

//     handleTopicChange=event=>{
//         this.setState({
//             topic:event.target.label
//         })
//     }
//   render() {
//     return (
//       <div>
//         <label > Competition </label>
//         {/* <DropdownButton
//         label={this.state.topic}
//         variant="ghost" onSelect={this.handleTopicChange}
//       >
//         <Item label="1st Option"  />
//         <Item label="2nd Option" />
//         <Item label="3rd Option" />
//         <Item label="4th Option" />
//       </DropdownButton> */}
//         <select value={this.state.topic} onChange={this.handleTopicChange}>
//            <option value="Day_1">Day 1</option>
//            <option value="Day_2">Day 2</option>
//            <option value="Day_3">Day 3</option>
//            <option value="Day_4">Day 4</option>
//            <option value="Day_5">Day 5</option>
//            <option value="Day_6">Day 6</option>
//            <option value="Day_7">Day 7</option>
//            <option value="Day_8">Day 8</option>
//            <option value="Day_9">Day 9</option>
//            <option value="Day_10">Day 10</option>
//            <option value="Day_11">Day 11</option>
//            <option value="Day_12">Day 12</option>
//         </select>
//       </div>
//     );
//   }
// }

