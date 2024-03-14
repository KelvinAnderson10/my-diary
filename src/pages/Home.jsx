import React, { useEffect, useState } from 'react'
import { isCurrentDarkMode } from '../utils/helpers/Theme'
import '../App.css'
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize';
import FirebaseAuthentication from '../services/firebase/FirebaseAuthentication';
import { useNavigate } from 'react-router-dom';

Quill.register('modules/imageResize', ImageResize);
var Size = Quill.import('attributors/style/size');
Size.whitelist = ['24px', '32px', '40px', '48px'];
Quill.register(Size, true);

const Home = () => {
    const navigate = useNavigate()
    const [isDarkMode, setIsDarkMode] = useState(isCurrentDarkMode())
    const [notes, setNotes] = useState('');
    const [user, setUser] = useState({
        email: '',
    })


    useEffect(() => {
        setIsDarkMode(isCurrentDarkMode())
    }, [isDarkMode])

    useEffect(() => {
        const userInfo = FirebaseAuthentication.getCurrentUser()
        setUser(userInfo)
    }, [])

    const toggleDarkMode = () => {
        localStorage.setItem('theme', isCurrentDarkMode() ? 'light' : 'dark');
        const htmlElement = document.querySelector('html');
        htmlElement.classList.toggle('dark');
        setIsDarkMode(isCurrentDarkMode())
    };

    const modules = {
        toolbar: [
            [{ size: ['24px', '32px', '40px', '48px'] }],
            [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
            [{ 'color': [] }, { 'background': [] }],
            ['bold', 'italic', 'underline', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['image'],
        ],
        imageResize: {
            parchment: Quill.import('parchment'),
            modules: ['Resize']
        }
    }

    const formats = [
        'size', 'align', 'color', 'background',
        'bold', 'italic', 'underline', 'blockquote',
        'list', 'bullet',
        'image']

    const onLogout = async () => {
        try {
            await FirebaseAuthentication.logout()
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className='home'>
            <div className='nav-bar'>
                <h4 className='page-header'>Welcome back, {user.email.split('@')[0]}</h4>
                {/* Toggle Dark Mode*/}
                <div className='nav-right'>
                    <fieldset className="form-group">
                        <label htmlFor="paperSwitch10" className="paper-switch-2-label">
                            Dark Mode
                        </label>
                        <label className="paper-switch-2">
                            <input id="paperSwitch10" name="paperSwitch10"
                                checked={isDarkMode} type="checkbox" onChange={toggleDarkMode} />
                            <span className="paper-switch-slider round"></span>
                        </label>
                    </fieldset>
                    <button className='btn-small btn-danger-outline'
                        onClick={onLogout}>Logout</button>
                </div>
            </div>
            <div className='home-container'>
                <div className='left-container'>
                    <div className='paper-btn content-list'>
                        <p>Ini ceritaku hari ini</p>
                        <p className='date'>11 March 2024</p>
                    </div>
                    <div className='paper-btn content-list'>
                        <p>Ini ceritaku hari ini</p>
                        <p className='date'>11 March 2024</p>
                    </div>
                    <div className='paper-btn content-list'>
                        <p>Ini ceritaku hari ini</p>
                        <p className='date'>11 March 2024</p>
                    </div>
                </div>
                <div className='right-container'>
                    <ReactQuill
                        className='border'
                        placeholder='Write your new diary here'
                        modules={modules}
                        formats={formats}
                        value={notes}
                        onChange={setNotes}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home