import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AdminLayout } from './layouts/AdminLayout'
import DashboardPage from './pages/DashboardPage'
import SDSRegistryPage from './pages/SDSRegistryPage'
import UsersPage from './pages/UsersPage'
import SettingsPage from './pages/SettingsPage'
import ReValidationPage from './pages/ReValidationPage'
import ManualReviewPage from './pages/ManualReviewPage'
import OrganizationsPage from './pages/OrganizationsPage'
import AuditLogPage from './pages/AuditLogPage'
import ExportPage from './pages/ExportPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="registry" element={<SDSRegistryPage />} />
          <Route path="organizations" element={<OrganizationsPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="re-validation" element={<ReValidationPage />} />
          <Route path="review-queue" element={<ManualReviewPage />} />
          <Route path="audit-logs" element={<AuditLogPage />} />
          <Route path="export" element={<ExportPage />} />
          {/* Add other routes as they are implemented */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
