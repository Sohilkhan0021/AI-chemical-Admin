import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
// auth
import { AuthProvider, RequireAuth, Login, ForgotPassword } from './auth';
import UserDetailsPage from './pages/UserDetailsPage';
import SDSDetailsPage from './pages/SDSDetailsPage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="auth">
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>

          <Route path="/" element={
            <RequireAuth>
              <AdminLayout />
            </RequireAuth>
          }>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="registry" element={<SDSRegistryPage />} />
            <Route path="sds/:sdsId" element={<SDSDetailsPage />} />
            <Route path="organizations" element={<OrganizationsPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="users/:userId" element={<UserDetailsPage />} />
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
    </AuthProvider>
  )
}

export default App
