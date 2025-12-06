import { AuthLayout } from '../components/Layout'
import { foodImages } from '../data/constants'
import { Link } from '../mini-router'

export const Signup = () => (
  <AuthLayout
    label="sign up"
    title="Welcome to Tupppereat 👋"
    description="Sign up to start managing your account"
    image={foodImages.signup}
    fields={
      <>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Name</label>
          <input className="input" placeholder="Andrew Scantlebury" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Email</label>
          <input className="input" placeholder="Example@mail.com" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Phone No.</label>
          <input className="input" placeholder="+65 9867 5125" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Address</label>
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
        <button className="btn btn-primary w-full">Sign up</button>
        <div className="text-center text-sm text-muted">
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
      </div>
    }
  />
)

export default Signup
