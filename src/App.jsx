import { CVProvider } from "./context/CVContext"

function App() {
    return (
        <>
            <CVProvider>
                <FormPanel />
                <PreviewPanel />
            </CVProvider>
        </>
    )
}

export default App;