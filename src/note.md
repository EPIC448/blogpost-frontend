 Resources to Use.\
 <!--  All requirment met. -->
 https://github.com/Awilmerding1/expenses-frontend

 https://github.com/Awilmerding1/expenses-backend



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


Hint: You can Use the same style of how you set your Jet Final Project app back-end  where it is rendering it own API…. 
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
 .We need the ability to edit what blogpost we have already in the state. 
 Debugger will help with this.

 Start lookng in React Bootstrip . Or better yet do your own costimze CSS. Files. 


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

react
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
 
  // our increment method makes use of the 'setState' method, which is what we use to alter state
  increment = () => {
    const newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }
 
  render() {
    return (
      <div onClick={this.increment}>
        {this.state.count}
      </div>
    )
  }
}


Event Pooling..
 Event pooling means that whenever an event fires, its event data (an object) is sent to the callback. The object is then immediately cleaned up for later use. This is what we mean by 'pooling': the event object is in effect being sent back to the pool for use in a later event. It's something that trips up a lot of people, and you might have run into it yourself when inspecting SyntheticEvent in the browser.


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

