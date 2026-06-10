import { CVProvider } from "./context/CVContext";
import FormPanel from "./components/FormPanel";

function App() {
    return (
        <>
            <CVProvider>
                <FormPanel />
                {/* <PreviewPanel /> */}
            </CVProvider>
        </>
    )
}

export default App;