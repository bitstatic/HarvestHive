export default function generateDefaultUsername(email: string) {
  try {
      // Extract username from email (assuming email format is username@domain)
      const trimEmail = email.split('@')[0];

      const username = trimEmail.length > 10 ?  trimEmail.substring(0, 10) : trimEmail;
      
      // Generate random number
      const randomNumber = Math.floor(Math.random() * 1000000);
      
      // Concatenate username and random number
      const defaultUsername = username + randomNumber;
      
      return defaultUsername;
    }
    catch (error: any) {
        throw new Error(error.message)
    }
}
