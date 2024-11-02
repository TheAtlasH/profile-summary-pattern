import { useEffect, useState } from "react"
import useAPI from "./useAPI"
import UserDataForm from "./UserDataForm"
import UserDetails from "./UserDetails"
import UserPreferences from "./UserPreferences"

const LongUserProfile = ({userId}) => {
    const [userData, setUserData] = useState(null)
    const [editMode, setEditMode] = useState(false)
    const [userPreferences, setUserPreferences] = useState({
        theme: 'light'
        , notifications: true,
    })
    const api = useAPI()
    useEffect(()=>{
        api.fetchUser(userId).then((response)=> response.json()).then((data) => setUserData(data)).catch(()=>setUserData({
            name: 'unknown',
            email: 'unknown@domain.invalid'
        }))
    },[api, userId])
    useEffect(()=>{
        const storedPreferences = localStorage.getItem('userPreferences')
        if( storedPreferences){
            setUserPreferences(JSON.parse(storedPreferences))
        }
    },[])
    useEffect(()=>{
        localStorage.setItem(UserPreferences, JSON.stringify(userPreferences))
    }, [userPreferences])

    const toggleEditMode=() => setEditMode((!editMode))
    const updatePreferences =(newPreferences) => setUserPreferences(newPreferences)
    if(!userData) return <div>Loading...</div> 
    return (<div>
        <h1>User Profile</h1>
        {editMode? (<UserDataForm userData={userData} onChange={setUserData}/>): (<UserDetails userData={userData}/>)}
        <button onClick={toggleEditMode}> {editMode ? 'Save Changes': 'Edit Profile' }</button>
        <UserPreferences preferences={UserPreferences}
        onPreferencesChange={updatePreferences}/>

    </div>)
  
}

export default LongUserProfile