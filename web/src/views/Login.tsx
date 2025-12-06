import { AuthLayout } from '../components/Layout'
import { foodImages } from '../data/constants'
import { Link } from '../mini-router'

export const Login = () => (
  <AuthLayout
    label="login"
    title="Welcome Back 👋"
    description="Today is a new day, It's your day. You shape it. Sign in to start managing your projects."
    image={foodImages.login}
    fields={
      <>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Email</label>
          <input className="input" placeholder="Example@mail.com" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Password</label>
          <input className="input" placeholder="at least 8 characters" type="password" />
        </div>
      </>
    }
    footer={
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-sm">
          <a className="text-accent font-semibold" href="#">
            Forgot Password?
          </a>
        </div>
        <button className="btn btn-primary w-full">Sign in</button>
        <div className="text-center text-sm text-muted">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    }
  />
)

export default Login
