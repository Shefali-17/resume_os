import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"
const Resume = ({windowName, windowsState, setWindowsState}) => {
  return (
    <MacWindow windowName={windowName} windowsState={windowsState} setWindowsState={setWindowsState}>
        <div className="resume-window">
            <iframe src="/resume.pdf" width="100%" height="100%"></iframe>
        </div>
    </MacWindow>
  )
}

export default Resume