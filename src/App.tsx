import './App.css'
import { Button, Form } from '@heroui/react';

function App() {
  return (
    <>
      <Form onSubmit={(e) => { e.preventDefault(); console.log("Submit"); }}>
        <Button type="submit" onClick={(e) => { console.log("Click"); }}>Click me</Button>
      </Form>
      
      <form onSubmit={(e) => { e.preventDefault(); console.log("Submit"); }}>
        <button type="submit" onClick={(e) => { console.log("Click"); }}>Click me</button>
      </form>
    </>
  )
}

export default App
