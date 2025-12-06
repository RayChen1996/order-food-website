import type { ReactNode } from 'react'
import { foodImages, heroNav } from '../data/constants'

export const Section = ({ label, children }: { label?: string; children: ReactNode }) => (
  <section className="section">
    <div className="section-inner">
      {label ? <p className="title-label">{label}</p> : null}
      {children}
    </div>
  </section>
)

export const Logo = () => (
  <div className="flex items-center gap-3">
    <div className="rounded-full bg-gradient p-4 text-white text-lg font-bold">T</div>
    <div>
      <div className="font-semibold text-lg">Tuppereat</div>
      <div className="text-sm text-muted">Food Delivery</div>
    </div>
  </div>
)

export const HeroNav = () => (
  <nav className="flex items-center gap-3 text-sm font-semibold text-muted">
    {heroNav.map((item) => (
      <button key={item} className="nav-chip">
        {item}
      </button>
    ))}
  </nav>
)

export const CartTag = () => (
  <div className="flex items-center gap-2 rounded-full border px-3 py-2 font-semibold">
    <span role="img" aria-label="cart">
      🛒
    </span>
    Cart
  </div>
)

export const ContactChip = () => (
  <div className="rounded-full bg-[#caffb7] px-4 py-2 font-semibold text-[#1b5b1b]">+351 91435 0000</div>
)

export const ProcessCard = ({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image: string
}) => (
  <div className="info-card flex flex-col gap-3">
    <img src={image} alt={title} className="rounded-lg h-48 object-cover" />
    <div className="font-semibold text-lg">{title}</div>
    <p className="text-muted text-sm leading-normal">{description}</p>
  </div>
)

export const OrderRow = ({
  title,
  price,
  qty,
  note,
  image,
}: {
  title: string
  price: string
  qty: string
  note: string
  image: string
}) => (
  <div className="table-row">
    <div className="flex items-start gap-4">
      <img src={image} alt={title} className="w-16 h-16 rounded-lg object-cover" />
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-muted text-sm">{note}</div>
      </div>
    </div>
    <input className="input" value={qty} readOnly />
    <div className="font-semibold text-right">€ {price}</div>
  </div>
)

export const SidebarCart = () => (
  <div className="w-1/3 cart-card">
    <div className="flex items-center justify-between mb-4">
      <div className="text-lg font-semibold">Cart</div>
      <button aria-label="close cart" className="btn-ghost">✕</button>
    </div>
    <div className="flex flex-col gap-4 small-scroll">
      {[1, 2, 3].map((item) => (
        <div key={item} className="flex gap-3">
          <img
            src="https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=400&q=60"
            className="w-20 h-16 rounded-lg object-cover"
            alt="cart"
          />
          <div className="flex-1">
            <div className="font-semibold text-sm">Warp de Frango grelhado, maça, nozes</div>
            <div className="text-muted text-sm">1 x</div>
          </div>
          <div className="font-semibold text-accent">€ 8.25</div>
        </div>
      ))}
    </div>
    <div className="border-t mt-4 pt-3 flex justify-between font-semibold">
      <span>Subtotal</span>
      <span>€ 24.25</span>
    </div>
    <div className="grid" style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: '10px' }}>
      <button className="btn btn-ghost border">Cart</button>
      <button className="btn btn-primary">Checkout</button>
      <button className="btn btn-ghost border">Comparison</button>
    </div>
  </div>
)

export const AuthLayout = ({
  label,
  title,
  description,
  footer,
  image,
  fields,
}: {
  label: string
  title: string
  description: string
  footer: ReactNode
  image: string
  fields: ReactNode
}) => (
  <Section label={label}>
    <div className="flex rounded-2xl overflow-hidden shadow-lg bg-white">
      <div className="w-1/2 p-8 flex flex-col gap-4 justify-center">
        <Logo />
        <div className="text-3xl font-semibold leading-snug">{title}</div>
        <p className="text-muted text-base leading-normal">{description}</p>
        <div className="flex flex-col gap-4">{fields}</div>
        {footer}
      </div>
      <div className="w-1/2 h-full">
        <img src={image} alt="hero" className="h-full w-full object-cover" />
      </div>
    </div>
  </Section>
)

export const sharedMedia = foodImages
