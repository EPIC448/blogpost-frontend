 Resources to Use.\
 <!--  All requirment met. -->
 https://github.com/Awilmerding1/expenses-frontend

 https://github.com/Awilmerding1/expenses-backend


Features. TO Up votes. 
https://codereview.stackexchange.com/questions/133669/upvote-downvote-toggle
https://learn.co/tracks/full-stack-web-development-v8/module-17-redux/section-3-react-redux-continued/redux-forms-codealong

 <!-- Requiments. -->

Requirements  React/ Redux Project.

. There should be 2 container components (Two Classes)

There should be 5 stateless components (components that are functions… There simple Render and display data)

√There should be 3 routes (Usually in the App Components./  Different form Rails Routers..And we are using React Routers. )

Redux  Must be use  in the front end.  (Use Redux Store  to keep track of all the important  data. )
√ Use redux Thunks.

Your Rails API should handle the data persistence. You should be using fetch()   {Refering to the React/redux fetch} within your actions to GET and POST data from your API - do not use jQuery method.



 Suggestion:
 Make a new Branch on the project when do the front … part. 

Write a Short Blog post for the project. Simple every time you work on the project. Take down notes of what passed and what didn’t and so on. 

?????????????????????????
Tools to build the project
 

TOOLS TO USING
 https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/

 start from  ===> Option 2: Do it yourself   (above link)
  
all the way through (the end of )  HERE WE GO IN  in the article. 


 Then use the same style in here. 


 How to run the project.
Makes sure both servers are running as this are separates APP that are not connected at all… 
 


Questions I have:,
 Do I need a serilizer for this project. =>. NO it not required.
>>>>>>>>>>>>>>>>>>>>>..
Front-End parts

Your application should have some minimal styling: feel free to stick to a framework (like react-bootstrap), but if you want to write (additional) CSS yourself, go for it!.. 

You Need to React-bootstrap if you are to use REACT BOOTSTRIP..  BUT it not madantory. you can use your own costumizered css. -->

https://colorlib.com/wp/template/article/

 https://colorlib.com/wp/template/original/



  What we need to work on 
 We need the ability to edit what blogpost we have already in the state. 
 Debugger will help with this.

 vStart lookng in React Bootstrip . Or better yet do your own costimze CSS. Files. 


 Reactbootstrap was added. 
   Sources was very helpfull. Code snippets.
 https://startbootstrap.com/snippets/video-header/



<!--  redux=>  state Used in Muliple place.....  
    redux goes upon act.....
 -->


 >>.> Make sure to Practice working in React  by it self... without redux.<<>>
 https://reacttraining.com/react-router/web/api/NavLink/activestyle-object



  Where I want to Focus On for Assessment. 

  Note… To focus in React… 

React LOcal start. Used this for the Vote feature
 local state and why is it important.  a 

 >>> Implementing local state. If you dont want use props. 

 class MyComp extends React.Component {
 
  // we use the constructor to set the INITIAL STATE
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
 


Event Pooling..
 Event pooling means : 
 event fires, =>  event data (an object)  sent to callback. 
 The object is  cleaned up for later use. 
 Thus 'pooling': the event object is in effect being sent back to the pool for use in a later event. 

We can update state... with 
 ...this.state.addressINfor, city: 'New York city)

 or

 this.setState({
  addressInfo: Object.assign({}, this.state.addressInfo, {
    city: 'New York City'
  })
});


State Vs Props
 It's important to note the difference between changes in state and changes in props. Changes in state and/or props will both trigger a re-render of our React component. However, changes in state can only happen internally due to components changing their own state. Thus, a component can trigger changes in its own state.


A component cannot change its props. Changes in props can only happen externally, meaning the parent or grandparent component changes the values it passing down to its children.
   The Chapter on Forms... really covers this. 

>>>>>>
All React goes throw Creation , updating , deleting. 
Note:  lifecycle hooks or lifecycle methods. includes Mounting, Updating,  unmounting. 
 All compenets are JS classes
 <<<>>>
component 
Changing between class component and function components {know how to turn to a class or a funtion compents... },
making interctive components. 

Live coding
 Pure react , local state, 
conditions rendering, actions, event listener and handles. etc. 

redux
Global state 
How does promises work. And how does information pass around
thunk

<<<<<<< HEAD
>>>>>>>>>>>>>>>>
 couple of areas to brush uo on for react. 

 Note… To focus in React… 
react
 local state and why is it important. 
component 
Changing between class component and function components,
making interctive components. 

Live coding
 √ Pure react , local state, 
conditions rendering, actions,
√event listener and √handles. etc. 

redux
Global state 
> Reduex store can hold a ots of states, 
How does promises work. And how does information pass around

thunk
  Thunk handles asynchronous calls when working with Redux - Think for a moment: we have Redux handling all our app's data. So far, it's all be hard-coded data, i.e. data that we set ourselves. It would be great if could start getting data from other sources.
 a Promise is retured. A Promise object is an object that represents some value that will be available later. We can access the data when the promise "resolves" and becomes available by chaining a  .then() function onto our fetch() call.

  Reasonn why Thunk is important. 
     Thunk allows us to return a function inside of our action creator. Normally, our action creator returns a plain JavaScript object
      Second, that function inside of Thunk receives the store's dispatch function as its argument. With that, we can dispatch multiple actions from inside that returned function.
 As a result we end up with something like this. 
  
  export function fetchAstronauts() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_ASTRONAUTS_REQUEST' });
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(astronauts => dispatch({ type: 'ADD_ASTRONAUTS', astronauts }));
  };
  <!-- Notice that we can  Dispact from inside the  returned function in here as well.  
  <!-- we first dispatch an action to state that we are about to make a request to our API. Then we make the request. We do not hit our then() function until the response is received, this means that we are not dispatching our action of type 'ADD_ASTRONAUTS' until we receive our data. Thus, we are able to send along that data. -->
}

When to use redux Store 
 use local state and parent props first.
  If we end up constantly passing down tons of props,
  we should consider connecting the component in question with a Redux store.

  Benefite of Local state.
   It is bound to the components it is in.
<!-- ======= -->



======== Use bootstrap for the Index page to make it look presentabele. 
// Check out a branch 
 boostrap documentations.  needed


 ===== What is Breaking the app is that-----
  The  "root" inside of index.HTML is what take over When you click Add new Blog post;
   recommendation: See if you can get all your contents in index.html to be in  App.js and work from there. 