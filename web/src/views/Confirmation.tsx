import { Section } from '../components/Layout'

export const Confirmation = () => (
  <Section label="Confirmation order">
    <div className="bg-white rounded-2xl shadow p-8 text-center flex flex-col items-center gap-4">
      <div className="text-4xl">📱 ✅</div>
      <h3 className="text-2xl font-semibold">Your Order is Confirmed</h3>
      <p className="text-muted max-w-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button className="btn btn-primary">Continue Shopping</button>
    </div>
  </Section>
)

export default Confirmation
