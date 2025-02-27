import './Skill.css';

export default function Skill() {
    return (
        <>
            <div className="skill" id='Skill'>
                <h1>My Skills</h1>
                <div className="cards">
                    <div className="box">
                        <h2 >Frontend</h2>
                        <li>
                            <h3>html</h3>
                            <span className='bar'><span className='html'> </span></span>
                        </li>
                        <li>
                            <h3>css</h3>
                            <span className='bar'><span className='css'> </span></span>
                        </li>
                        <li>
                            <h3>javascript</h3>
                            <span className='bar'><span className='javascript'> </span></span>
                        </li>
                        <li>
                            <h3>React</h3>
                            <span className='bar'><span className='react'> </span></span>
                        </li>

                        <li>
                            <h3>Angular</h3>
                            <span className='bar'><span className='angular'> </span></span>
                        </li>

                    </div>
                    <div className="box">
                        <h2 >Backend</h2>
                        <li>
                            <h3>Java</h3>
                            <span className='bar'><span className='java'> </span></span>
                        </li>

                        <li>
                            <h3>Python</h3>
                            <span className='bar'><span className='python'> </span></span>
                        </li>


                        <li>
                            <h3>Mysql</h3>
                            <span className='bar'><span className='mysql'> </span></span>
                        </li>
                        <li>
                            <h3>Nodejs</h3>
                            <span className='bar'><span className='nodejs'> </span></span>
                        </li>
                        <li>
                            <h3>MongoDB</h3>
                            <span className='bar'><span className='mongodb'> </span></span>
                        </li>


                    </div>
                    <div className="box">
                        <h2 >Tools</h2>
                        <li>
                            <h3>Git & GitHub</h3>
                            <span className='bar'><span className='git'> </span></span>
                        </li>
                        <li>
                            <h3>Postman</h3>
                            <span className='bar'><span className='postman'> </span></span>
                        </li>
                        <li>
                            <h3>Vercel</h3>
                            <span className='bar'><span className='versal'> </span></span>
                        </li>

                        <li>
                            <h3>VS</h3>
                            <span className='bar'><span className='vs'> </span></span>
                        </li>


                    </div>
                    <div className="box">
                        <h2>Profisinal skills</h2>
                        <div className="radial-bars">

                            <div className="radial-bar">
                                <svg x="0px" y="0px" viewBox='0 0 200 200'>
                                    <circle className='progress-bar' cx="100" r='60'></circle>
                                    <circle className='path path-1' cx="100" cy="100" r='60'></circle>


                                </svg>
                                <div className="percentage">75%</div>
                                <div className="text">creativity</div>
                            </div>

                            <div className="radial-bar">
                                <svg x="0px" y="0px" viewBox='0 0 200 200'>
                                    <circle className='progress-bar' cx="100" r='60'></circle>
                                    <circle className='path path-2' cx="100" cy="100" r='60'></circle>


                                </svg>
                                <div className="percentage">80%</div>
                                <div className="text">Problem solving</div>
                            </div>
                            <div className="radial-bar">
                                <svg x="0px" y="0px" viewBox='0 0 200 200'>
                                    <circle className='progress-bar' cx="100" r='60'></circle>
                                    <circle className='path path-3' cx="100" cy="100" r='60'></circle>


                                </svg>
                                <div className="percentage">70%</div>
                                <div className="text">communication</div>
                            </div>
                            <div className="radial-bar">
                                <svg x="0px" y="0px" viewBox='0 0 200 200'>
                                    <circle className='progress-bar' cx="100" r='60'></circle>
                                    <circle className='path path-4' cx="100" cy="100" r='60'></circle>


                                </svg>
                                <div className="percentage">70%</div>
                                <div className="text">Teamwork</div>
                            </div>
                        </div>
                    </div>



                </div>

            </div>

        </>
    );
}
