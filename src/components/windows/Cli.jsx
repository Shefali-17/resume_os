import React, { useState, useEffect } from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({windowName, windowsState, setWindowsState}) => {
    const [showMailForm, setShowMailForm] = useState(false)
    const [mailData, setMailData] = useState({
        to: '',
        cc: '',
        subject: '',
        from: 'shefaliyadav@gmail.com',
        body: ''
    })

    useEffect(() => {
        if (windowsState && windowsState.openMailComposer) {
            setShowMailForm(true)
            // reset the flag so subsequent opens behave normally
            setWindowsState(s => ({ ...s, openMailComposer: false }))
        }
    }, [windowsState, setWindowsState])

    const handleMailInputChange = (field, value) => {
        setMailData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handleSendMail = () => {
        if (!mailData.to) {
            alert('Please enter a recipient email')
            return
        }
        const mailLink = `mailto:${mailData.to}?cc=${mailData.cc}&subject=${encodeURIComponent(mailData.subject)}&body=${encodeURIComponent(mailData.body)}`
        window.open(mailLink, '_blank')
        setShowMailForm(false)
        setMailData({
            to: '',
            cc: '',
            subject: '',
            from: 'shefaliyadav@gmail.com',
            body: ''
        })
    }

    const commands = {
        echo: {
            description: 'Echo a passed string.',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        },
        whoami: {
            description: 'Display current user information.',
            usage: 'whoami',
            fn: () => 'Shefali Yadav - Full Stack Developer'
        },
        
        about: {
            description: 'Learn about me.',
            usage: 'about',
            fn: () => 'Shefali Yadav\nA passionate full-stack developer creating interactive web experiences.\nEmail: shefaliyadav@email.com'
        },
        mail: {
            description: "Compose an email.",
            usage: "mail",
            fn: () => {
                setShowMailForm(true)
                return 'Mail form opened...'
            }
        },
        skills: {
            description: 'Display technical skills.',
            usage: 'skills',
            fn: () => 'Frontend: React, JavaScript, HTML, CSS, SCSS\nBackend: Node.js, Express\nTools: Git, VS Code, Vite\nDatabases: MongoDB'
        },
        projects: {
            description: 'List recent projects.',
            usage: 'projects',
            fn: () => '• Mac OS Portfolio - Interactive portfolio with terminal\n• E-Commerce Platform - Full-stack web application\n• Todo App - React-based task management'
        },
        contact: {
            description: 'Get contact information.',
            usage: 'contact',
            fn: () => 'GitHub: github.com/shefaliyadav\nLinkedIn: linkedin.com/in/shefaliyadav\nEmail: shefaliyadav@email.com'
        },
        
    };

    const welcomeMsg = `
╔═══════════════════════════════════════════════════════════╗
║     Welcome to Shefali Yadav's Portfolio Terminal        ║
╚═══════════════════════════════════════════════════════════╝

Type 'help' to see all available commands.
    `;

    return (
        <MacWindow windowName={windowName} title={showMailForm ? "Mail Composer - from Shefali Yadav" : "shefaliyadav - zsh"} windowsState={windowsState} setWindowsState={setWindowsState}>
            <div className="cli-window">
                {!showMailForm ? (
                    <Terminal
                        commands={commands}
                        welcomeMessage={welcomeMsg}
                        promptLabel={'shefaliyadav:~$'}
                        promptLabelStyle={{ color: 'green' }}
                    />
                ) : (
                    <div className="mail-form-container" style={{
                        padding: '20px',
                        backgroundColor: '#2d2d2d',
                        color: '#fff',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        height: '100%',
                        overflowY: 'auto'
                    }}>
                        <div style={{ marginBottom: '25px', paddingBottom: '15px', borderBottom: '1px solid #444' }}>
                            <h2 style={{ margin: '0 0 8px 0', fontSize: '22px', fontWeight: '600' }}>✉️ Mail Composer</h2>
                            <p style={{ margin: '0', fontSize: '12px', color: '#888' }}>Send a professional email from your account</p>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', fontSize: '13px', marginBottom: '4px', color: '#666' }}>To:</label>
                                <input 
                                    type="email"
                                    placeholder="enter@example.com"
                                    value={mailData.to}
                                    onChange={(e) => handleMailInputChange('to', e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        backgroundColor: '#3d3d3d',
                                        border: '1px solid #555',
                                        color: '#fff',
                                        boxSizing: 'border-box',
                                        fontFamily: 'system-ui',
                                        fontSize: '13px',
                                        borderRadius: '4px'
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', fontSize: '13px', marginBottom: '4px', color: '#666' }}>Cc:</label>
                                <input 
                                    type="email"
                                    placeholder="(optional)"
                                    value={mailData.cc}
                                    onChange={(e) => handleMailInputChange('cc', e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        backgroundColor: '#3d3d3d',
                                        border: '1px solid #555',
                                        color: '#fff',
                                        boxSizing: 'border-box',
                                        fontFamily: 'system-ui',
                                        fontSize: '13px',
                                        borderRadius: '4px'
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', fontSize: '13px', marginBottom: '4px', color: '#666' }}>Subject:</label>
                                <input 
                                    type="text"
                                    placeholder="Enter subject"
                                    value={mailData.subject}
                                    onChange={(e) => handleMailInputChange('subject', e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        backgroundColor: '#3d3d3d',
                                        border: '1px solid #555',
                                        color: '#fff',
                                        boxSizing: 'border-box',
                                        fontFamily: 'system-ui',
                                        fontSize: '13px',
                                        borderRadius: '4px'
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', fontSize: '13px', marginBottom: '4px', color: '#666' }}>From:</label>
                                <div style={{
                                    padding: '10px',
                                    backgroundColor: '#3d3d3d',
                                    border: '1px solid #555',
                                    color: '#aaa',
                                    fontFamily: 'system-ui',
                                    fontSize: '13px',
                                    borderRadius: '4px'
                                }}>
                                    {mailData.from}
                                </div>
                            </div>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <textarea 
                                placeholder="Type your message here..."
                                value={mailData.body}
                                onChange={(e) => handleMailInputChange('body', e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    backgroundColor: '#3d3d3d',
                                    border: '1px solid #555',
                                    color: '#fff',
                                    boxSizing: 'border-box',
                                    fontFamily: 'system-ui',
                                    minHeight: '200px',
                                    resize: 'vertical',
                                    borderRadius: '4px'
                                }}
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button 
                                onClick={handleSendMail}
                                style={{
                                    padding: '8px 16px',
                                    backgroundColor: '#0084ff',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontFamily: 'system-ui',
                                    fontSize: '13px',
                                    fontWeight: '500'
                                }}
                            >
                                Send
                            </button>
                            <button 
                                onClick={() => setShowMailForm(false)}
                                style={{
                                    padding: '8px 16px',
                                    backgroundColor: '#555',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontFamily: 'system-ui',
                                    fontSize: '13px'
                                }}
                            >
                                Exit
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </MacWindow>
    )
}

export default Cli