import React from 'react'
import IncrementCounter from './IncrementCounter'
import Pure from '../Pure'

function Hoc() {
  return (
  <>
  <h1 class="heading">Handson5</h1>
  <h1>Q-1 What is HOC?</h1>
  <p>
    Ans- Higher-order components or HOC is the advanced method of reusing the
    component functionality logic. It simply takes the original component and
    returns the enhanced component.
  </p>
  <h3>Syntax-</h3>
  <pre id="code">
const EnhancedComponent = higherOrderComponent(OriginalComponent);</pre>
<p>we will build two custom components to demonstrate HOC usage:</p>

<p>ClickIncrease.js — This component will render a button and a piece of text. When the user clicks on this button (an onClick event), the fontSize property of the text will increase</p>
<p>HoverIncrease.js — Will be similar to that of ClickIncrease. However, unlike the former, this component will listen to onMouseOver events</p><br/>
<p>we created a function called UpdatedComponent that takes in an argument called OriginalComponent. In this case, the OriginalComponent will be the React element which will be wrapped
Later on, we told React to render OriginalComponent to the UI. We will implement enhancement functionality </p>
 <br/>
 <div className='box'>
 <IncrementCounter/>
 </div>
<hr/>
<h1>Q-2 What are pure function</h1>
  <p>
    ReactJS has provided us a Pure Component. If we extend a class with Pure
    Component, there is no need for shouldComponentUpdate() Lifecycle Method.
    ReactJS Pure Component Class compares current state and props with new
    props and states to decide whether the React component should re-render
    itself or Not.
  </p>
  
  <div className='middle'>
<Pure/>
  </div>
  </>
  )
}

export default Hoc