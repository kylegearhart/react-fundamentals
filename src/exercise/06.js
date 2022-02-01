// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null);

  const handleSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    onSubmitUsername(formSubmitEvent.target.elements.usernameInput.value)
  }

  const handleUsernameUpdate = (inputUpdateEvent) => {
    const {value} = inputUpdateEvent.target;
    const wereUpperCaseCharsEntered = value === value.toLowerCase();

    setError(wereUpperCaseCharsEntered ? null : 'Username must be lower case');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" onChange={handleUsernameUpdate} />
      </div>
      <div role="alert" style={{color: 'red'}}>
        {error}
      </div>
      <button disabled={error !== null} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
