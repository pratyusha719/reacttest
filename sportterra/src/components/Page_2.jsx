import React, { useState } from "react";

import DropdownButton, { Item,Variants } from 'terra-dropdown-button';


const GhostDropdownButton = () => {
  const [message1, setMessage1] = useState('Select an option');
  const [message2, setMessage2] = useState('Select an option');
  const [message3, setMessage3] = useState('Select an option');
  return (
    <React.Fragment>
      <DropdownButton
        label={message1}
        variant={Variants.EMPHASIS}
        
      >
        <Item label="1st Option" onSelect={() => setMessage1('1st option')} />
        <Item label="2nd Option" onSelect={() => setMessage1('2nd option')} />
        <Item label="3rd Option" onSelect={() => setMessage1('3rd option')} />
        <Item label="4th Option" onSelect={() => setMessage1('4th option ')} />
      </DropdownButton>
      <br/>
      <br/>
      <DropdownButton
        label={message2}
        variant={Variants.EMPHASIS}
        
      >
        <Item label="1st Option" onSelect={() => setMessage2('1st option')} />
        <Item label="2nd Option" onSelect={() => setMessage2('2nd option')} />
        <Item label="3rd Option" onSelect={() => setMessage2('3rd option')} />
        <Item label="4th Option" onSelect={() => setMessage2('4th option ')} />
      </DropdownButton>
        <br/>
        <br/>
      <DropdownButton
        label={message3}
        variant={Variants.EMPHASIS}
        
      >
        <Item label="1st Option" onSelect={() => setMessage3('1st option')} />
        <Item label="2nd Option" onSelect={() => setMessage3('2nd option')} />
        <Item label="3rd Option" onSelect={() => setMessage3('3rd option')} />
        <Item label="4th Option" onSelect={() => setMessage3('4th option ')} />
      </DropdownButton>



      {/* <p>{message}</p> */}
    </React.Fragment>
  );
};
export default GhostDropdownButton;




// import React, { Component } from "react";
// import './App.css';

// class Create extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             competitions:'competetion_1',
//             teams:'team_1',
//             groups:'Group_1'
//         }
//     }

//     handleCompetitionChange=event=>{
//         this.setState({
//             competitions:event.target.value
//         })
//     }
//     handleTeamChange=event=>{
//         this.setState({
//             teams:event.target.value
//         })
//     }
//     handleGroupChange=event=>{
//         this.setState({
//             groups:event.target.value
//         })
//     }
//   render() {
//     return (
//         <div>
//       <div>
//         <label className='dropdown'> Competition </label>
//         <select value={this.state.competitions} onChange={this.handleCompetitionChange}>
//            <option value="competition_1">competition 1</option>
//            <option value="competition_2">competition 2</option>
//            <option value="competition_3">competition 3</option>
//            <option value="competition_4">competition 4</option>
//            <option value="competition_5">competition 5</option>
//            <option value="competition_6">competition 6</option>
//            <option value="competition_7">competition 7</option>
//            <option value="competition_8">competition 8</option>
//            <option value="competition_9">competition 9</option>
//            <option value="competition_10">competition 10</option>
//            <option value="competition_11">competition 11</option>
//            <option value="competition_12">competition 12</option>
//         </select>
//       </div>
//       <br/>
//       <br/>
//       <div>
//       <label className="dropdown"> Teams </label>
//       <select value={this.state.teams} onChange={this.handleTeamChange}>
//          <option value="team_1">team 1</option>
//          <option value="team_2">team 2</option>
//          <option value="team_3">team 3</option>
//          <option value="team_4">team 4</option>
//          <option value="team_5">team 5</option>
//          <option value="team_6">team 6</option>
//          <option value="team_7">team 7</option>
//          <option value="team_8">team 8</option>
//          <option value="team_9">team 9</option>
//          <option value="team_10">team 10</option>
//          <option value="team_11">team 11</option>
//          <option value="team_12">team 12</option>
//       </select>
//     </div>
//     <br/>
//       <br/>
//     <div>
//     <label className="dropdown"> Groups </label>
//     <select value={this.state.groups} onChange={this.handleGroupChange}>
//        <option value="Group_1">Group 1</option>
//        <option value="Group_2">Group 2</option>
//        <option value="Group_3">Group 3</option>
//        <option value="Group_4">Group 4</option>
//        <option value="Group_5">Group 5</option>
//        <option value="Group_6">Group 6</option>
//        <option value="Group_7">Group 7</option>
//        <option value="Group_8">Group 8</option>
//        <option value="Group_9">Group 9</option>
//        <option value="Group_10">Group 10</option>
//        <option value="Group_11">Group 11</option>
//        <option value="Group_12">Group 12</option>
//     </select>
//   </div>
//   </div>
//     );
//   }
// }
 
// export default Create;