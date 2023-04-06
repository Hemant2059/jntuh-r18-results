import Navbar from "@/components/Navbar"
import "../public/globals.css"

export const metadata = {
  title: 'Jntuh Results',
  description: "Looking for the latest JNTUH R18 results? Look no further than our website, where you can find the most accurate and up-to-date results for all JNTUH exams. Whether you're a student or a parent, our website makes it easy to track your academic progress and stay informed about your performance. So why wait? Visit us today and discover how we can help you succeed at JNTUH and beyond.",
  keywords: 'JNTUH, JNTUH results, JNTUH R18 result, B.Tech results, JNTUH B.Tech R18, Engineering results, JNTUH updates, JNTUH notifications, JNTUH exams, JNTUH academic progress, JNTUH student portal, JNTUH login, JNTUH news, JNTUH official website, JNTU Hyderabad'
 
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}

      </body>
    </html>
  )
}
