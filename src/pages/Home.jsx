import React, { useEffect, useState } from 'react'
import { isCurrentDarkMode } from '../utils/helpers/Theme'
import FirebaseAuthentication from '../services/firebase/FirebaseAuthentication'

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(isCurrentDarkMode())

    useEffect(() => {
        setIsDarkMode(isCurrentDarkMode())
    }, [isDarkMode])

    useEffect(() => {
        FirebaseAuthentication.getCurrentUser()
    }, [])

    const toggleDarkMode = () => {
        localStorage.setItem('theme', isCurrentDarkMode() ? 'light' : 'dark');
        const htmlElement = document.querySelector('html');
        htmlElement.classList.toggle('dark');
        setIsDarkMode(isCurrentDarkMode())
    };


    return (
        <div>
            <fieldset className="form-group">
                <label className="paper-switch-2">
                    <input id="paperSwitch10" name="paperSwitch10"
                        checked={isDarkMode} type="checkbox" onChange={toggleDarkMode} />
                    <span className="paper-switch-slider round"></span>
                </label>
            </fieldset>
            <p>Test</p>
        </div>
    )
}

export default Home