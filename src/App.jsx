import { useState, redirect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignOutButton, SignIn, SignedIn, SignedOut } from "@clerk/clerk-react"

function App() {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
      setModal(!modal)
    }

  return (
    <>
      <div>
      <SignedOut>
        <button
        onClick={toggleModal}
        className="button-modal"> 
        Some text
        </button>
        {modal && (
        <div className ="modal">
          <div 
          className="overlay">
            <div className="modal-content">
              <p>
                <SignIn />
              </p>
              <button
                className="close-modal"
                onClick={toggleModal}>
                  Close
              </button>
            </div>
          </div>
        </div>
        )}
        <p>This content is public. Only signed out users can see the SignInButton above this text.</p>
      </SignedOut>
      <SignedIn>
        <SignOutButton signOutCallback={() => redirect('/')} />
        <p>This content is private. Only signed in users can see the SignOutButton above this text.</p>
      </SignedIn>
      </div>
    </>
  )
}

export default App
