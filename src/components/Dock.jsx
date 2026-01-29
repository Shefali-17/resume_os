import React from 'react'
import "./dock.scss"
import { resume } from 'react-dom/server'
const Dock = ({windowsState, setWindowsState}) => {
  return (
    <footer className='dock'>
     
      
  <div 
    onClick={()=>{setWindowsState(state=>({...state,github:true}))}}
    className='icon github'><img src='/icons/github.svg' /></div>
  <div 
  onClick={()=>{setWindowsState(state=>({...state,note:true}))}}
  className='icon note'><img src='/icons/sticky-note.svg' /></div>
  <div
  onClick={()=>{setWindowsState(state=>({...state,resume:true}))}}
   className='icon pdf'><img src='/icons/file-text.svg' /></div>
  
  <div 
  onClick={()=>{window.open("https://calendar.google.com/calendar/u/0/r","_blank")}}
  className='icon googlecalender'><img src='/icons/googlecalendar.svg' /></div>
  <div 
  onClick={()=>{setWindowsState(state=>({...state,spotify:true}))}}
  className='icon spotify'><img src='/icons/spotify.svg' /></div>
  <div
  onClick={()=>{setWindowsState(state=>({...state,cli:true, openMailComposer:true}))}}
  className='icon mail'
>
  <img src='/icons/mail.svg' />
</div>

  <div 
    onClick={() => {
  window.open(
    "https://www.linkedin.com/in/shefali-yadav-0806b0328",
    "_blank",
    "noopener,noreferrer"
  );
}}
  className='icon link'><img src='/icons/link.svg' /></div>
    <div
    onClick={()=>{setWindowsState(state=>({...state,cli:true}))}}
     className='icon terminal'><img src='/icons/terminal.svg' /></div>
</footer>

  )
}

export default Dock