export const checkValidData = (email, password, fullName) => {
    if (!email || !password) return "All fields are required.";

    // Only validate fullName if it's provided (signup mode)
    if (fullName !== null) {
        if (!fullName) return "Full name is required.";

        const isFullNameValid = /^[A-Za-z]{3,16}( [A-Za-z]{3,16})?( [A-Za-z]{3,16})?$/.test(fullName);
        if (!isFullNameValid) return "Full name must be 3-16 characters per word, letters only.";
    }

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if (!isEmailValid) return "Email ID is not valid.";
    if (!isPasswordValid) return "Password must be 8+ chars, include uppercase, lowercase, number & special character.";

    return null;
};