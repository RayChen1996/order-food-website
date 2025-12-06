import { Section } from '../components/Layout'

export const NotFound = () => (
  <Section label="Error Page">
    <div className="bg-white rounded-2xl shadow p-8 text-center">
      <div className="text-6xl font-bold text-muted">404</div>
      <h3 className="text-2xl font-semibold mb-3">Oops! Page not found</h3>
      <p className="text-muted max-w-lg mx-auto mb-6">
        The page you are looking for might have been removed or temporarily unavailable.
      </p>
      <button className="btn btn-primary">Back to HomePage</button>
    </div>
  </Section>
)

export default NotFound
