import { useState } from 'react';

const CreateProfile = () => {
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        // Add more fields as needed
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        try {
            alert("hello there")
            console.log("hello there","asddas")
            localStorage.setItem("user", JSON.stringify(formData))
        } catch (error) {
            console.error('Error creating profile:', error);
            // Handle any network or server errors
        }
    };

    return (
        <div>
            <h1>Create Your Profile</h1>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
            </div>
            {/* Add more input fields for additional profile information */}
            <div>
                <button onClick={handleSubmit}>Create Profile</button>
            </div>
            <p>If you are not redirected, <a href="/UserProfile">click here</a> to go back to the index page.</p>
        </div>
    );
};

export default CreateProfile;
