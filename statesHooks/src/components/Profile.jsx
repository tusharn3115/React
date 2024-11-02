import React, { useState } from 'react'

const Profile = () => {

    const [profile,  setProfile] = useState({
        name: '',
        age: '',
    });

    const handleChange = (e) => {
        const  { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile, 
            [name]: value,
        }))
    }


  return (
    <>
    <h2 style={{color: 'blue', fontSize: '24px'}}>User Profile</h2>
    <div style={{marginBottom: '20px'}}>
        <label style={{display: 'block', marginBottom: '10px'}}>
            Name:
            <input type="text" name='name' value={profile.name} onChange={handleChange} style={{padding: '10px', fontSize: '16px'}}/>
        </label>
    </div>

    <div style={{marginBottom: '20px'}}>
        <label style={{display: 'block', marginBottom: '10px'}}>
            Age:
            <input type="number" name='age' value={profile.age} onChange={handleChange} style={{padding: '10px', fontSize: '16px'}}/>
        </label>
    </div>

    <h3 style={{color: 'green', fontSize: '20px'}}>Your Profile Information:</h3>
    <p style={{fontSize: '18px'}}>Name: {profile.name}</p>
    <p style={{fontSize: '18px'}}>Age: {profile.age}</p>
    </>
  )
}

export default Profile