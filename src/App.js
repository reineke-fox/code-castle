import React from 'react';
import logo from './logo.svg';
import nils from './nils.jpg'
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div style={{width: '90%'}}>
                    <p>
                        As we face COVID-19 for while now, especially as parents and students, we figured the deep
                        knowledge gaps
                        of school teachers to handle this situation in a manner that I would have hoped for.
                        My daughter for example had only two online “classes” on a video chat platform, where the
                        teacher went through the old homework and read out loud the new tasks.
                        If I would work with my clients that way, I would be quite unemployed.
                        Why didn’t schools or universities (assumingly) put much effort in a digitization of (future)
                        teachers?
                        That would have been so beneficial for everyone.
                    </p>
                    <p>
                        I want to emphasis, that I don’t blame the teachers – I think the job they are doing every day
                        is really
                        a tough one and the rewards / recognition is very little. Yet, I want to leave the world for my
                        (future) kids a little bit better.
                    </p>
                    <p>
                        My strong opinion is, that if a student is keen on learning to code software, we should not only
                        be
                        okay with it, we should encourage her or him in doing so and provide the right environments.
                        Therefore, I want to provide CodeCastle as a fun/game driven e-learning platform for pupils /
                        students to learn programming in a
                        child-friendly way. Learning not only the skills but also the great community of software
                        engineers,
                        especially in open source driven ones.
                    </p>
                    <p>
                        That is why the CodeCastle project is going to be open source for all the lovely people to
                        participate and add ideas and features which might be beneficial as well as language support,
                        tutoring, corrections,…
                    </p>
                    <p>If you are interested in contributing, please do not hesitate to contact me.</p>
                    <p>Yours, Nils.</p>
                    <img width={150} src={nils} />
                </div>
                <a
                    className="App-link"
                    href="mailto:nils.widal@vertrical.com"
                    rel="noopener noreferrer"
                >
                    Contact Me
                </a>
            </header>
        </div>
    );
}

export default App;
