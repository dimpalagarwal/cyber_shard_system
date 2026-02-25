import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Records from "./pages/Records"
import DocumentView from "./pages/DocumentView"
import SecurityConsole from "./pages/SecurityConsole"
import IntegrityMonitor from "./pages/IntegrityMonitor"
import ActivityLogs from "./pages/ActivityLogs"
import Settings from "./pages/Settings"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Records />} />
        <Route path="/document/:id" element={<DocumentView />} />
        <Route path="/security" element={<SecurityConsole />} />
        <Route path="/integrity" element={<IntegrityMonitor />} />
        <Route path="/logs" element={<ActivityLogs />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  )
}

export default App