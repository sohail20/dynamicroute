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
        e.preventDefault();

        // Here, you can submit the formData to your backend to create the user profile.
        // You can use Axios or any other HTTP library to make a POST request to your API.

        try {
            localStorage.setItem("user", JSON.stringify(formData))
        } catch (error) {
            console.error('Error creating profile:', error);
            // Handle any network or server errors
        }
    };

    return (
        <div>
            <h1>Create Your Profile</h1>
            <form onSubmit={handleSubmit}>
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
                    <button type="submit">Create Profile</button>
                </div>
            </form>
        </div>
    );
};

export default CreateProfile;
