import '@styles/globals.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: "WorldShare",
    description: "Discover and share posts from around the World"
}
const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <Provider>
                <div className="main">                {/*main class consists of the notebook like background */}
                    <div className="gradient">

                    </div>
                </div>

                <main className="app">
                    <Nav/>
                    {children}
                </main>
            </Provider>
            
        </body>
    </html>
  )
}

export default RootLayout