// import React from 'react';
// import './Contact.css'

// function Contacts() {
//   return (
//     <div>
//       <h1>Contact List</h1>
//       <div className='contact-grid'>
//         <Card name= "katerina"
//                 img="https://siena.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2017/01/16/node_32989/88462/public/2017/01/16/B9710832261Z.1_20170116204851_000%2BGF48BI1NU.1-0.png.jpg?itok=_Y_9I7yK1555938494"
//                 phone="123456"
//                 email="katerina@example.com"/>
//         <Card name= "Cermry"
//             img="https://i.pinimg.com/236x/d1/f9/81/d1f981ad6c65a94b6949f1d1503cde93.jpg"
//             phone="987456"
//             email="cemry@example.com"/>
//         <Card name= "Avatar"
//             img="https://images.emojiterra.com/google/android-11/512px/1f467.png"
//             phone="951753"
//             email="avatar@example.com"/>
//         <Card name= "Smile"
//             img="https://www.macmillandictionaryblog.com/wp-content/uploads/2017/07/emoji-1024x650.jpg"
//             phone="753681"
//             email="smile@example.com"/>
//       </div>
//     </div>
//   )
// }
// each component inside the map 
// function hmust have a unique key
const Contacts = [
  {
    id : 1,
    name : "katerina",
    imgURL : "https://siena.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2017/01/16/node_32989/88462/public/2017/01/16/B9710832261Z.1_20170116204851_000%2BGF48BI1NU.1-0.png.jpg?itok=_Y_9I7yK1555938494",
    phone :"123456",
    email :"katerina@example.com"
  },
  {
    id : 2,
    name : "Cermry",
    imgURL : "https://i.pinimg.com/236x/d1/f9/81/d1f981ad6c65a94b6949f1d1503cde93.jpg",
    phone : "987456",
    email : "cemry@example.com",
  },
  {
    id : 3,
    name :  "Avatar",
    imgURL : "https://images.emojiterra.com/google/android-11/512px/1f467.png",
    phone : "951753",
    email : "avatar@example.com",
  },
  {
    id : 4,
    name :  "Smile",
    imgURL : "https://www.macmillandictionaryblog.com/wp-content/uploads/2017/07/emoji-1024x650.jpg",
    phone : "753681",
    email : "smile@example.com",
  }
]

export default Contacts;
