import AuthProvider from "./authContext"
import MoviesContextProvider from "./moviesContext"
import DatabaseContextProvider from "./databaseContext"

export default function Contexts ({ children }) {
    return (
        <AuthProvider>
            <DatabaseContextProvider>
                <MoviesContextProvider>
                    {children}
                </MoviesContextProvider>
            </DatabaseContextProvider>
        </AuthProvider>
    )
}