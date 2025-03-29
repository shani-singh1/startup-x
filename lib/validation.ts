export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && 
    email.length <= 254 && // RFC 5321
    email.split('@')[0].length <= 64 // RFC 5321
}

export const isBusinessEmail = (email: string): boolean => {
  const commonFreeEmailDomains = [
    'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com'
  ]
  const domain = email.split('@')[1].toLowerCase()
  return !commonFreeEmailDomains.includes(domain)
} 