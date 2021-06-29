// const { render } = require("@testing-library/react");
// const { Component } = require("react");

// class Demo2 extends Component{
  
//   constructor(props){

//     super(props)
//     let myOrder = [3, 1, 2];
    
//     [filterForm, setFilterForm] = useState({
//       bedroom: none,
//       bathroom:none,
//       furnished: false,
//       petAllowed: false
//     })
//     this.handleBedroomChange = this.handleBedroomChange.bind(this);

//   }
    

// User.findAll({
//     attributes: ['id', 'username',
//         [Sequelize.literal("0"), 'myOrder']   /* to hold desired order */
//     ],            
//     where : {id : myOrder}
// })
// .then(users => {

//     /* add desired sequence to result set */
//     for (let ord = 0; ord < myOrder.length; ord++) {
//         let usr = users.find(user => user.id == myOrder[ord]);
//         console.log(usr);
//         if (usr) {
//             usr.dataValues.myOrder = ord;
//         }            
//     }

//     /* sort in desired order */
//     users.sort((a, b) => a.dataValues.myOrder - b.dataValues.myOrder);

//     res.send(users);
//     next();
// });
// render(){

//   return(

//   )
// }

// }