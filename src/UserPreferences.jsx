
const UserPreferences = (preferences, onPreferences) => {
 const handleThemeChange = (event) =>{
    onPreferences({
        ...preferences,
        theme: event.target.value
    })
 }
 const handleNotificationsChange = (event) =>{
    onPreferences({
        ...preferences,
        notifications: event.target.checked,
    })
 }
    return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <h2>Preferences</h2>
        <label>
            Theme:
            <select value={preferences.theme} onChange={handleThemeChange}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>

            </select>
        </label>
        <label>
            Notifications:
            <input type="checkbox"
            checked={preferences.notifications}
            onChange={handleNotificationsChange}/>
              </label>
    </div>
  )
}

export default UserPreferences