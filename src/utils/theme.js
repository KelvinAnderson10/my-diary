export const isCurrentDarkMode = () => {
    const currentTheme =  localStorage.getItem('theme')
    if (currentTheme == 'light' || currentTheme == null) {
        return false
    }
    return true
}

