import { Section } from '../components/Layout'

export const Cart = () => (
  <Section label="Cart">
    <div className="flex justify-center">
      <div className="cart-card w-80">
        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-semibold">Cart</div>
          <button aria-label="close" className="btn-ghost">
            🗑️
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((item, idx) => (
            <div key={item} className="flex items-center gap-3">
              <img
                src={
                  idx === 0
                    ? 'https://images.unsplash.com/photo-1559050019-7edd7b1c2145?auto=format&fit=crop&w=300&q=60'
                    : idx === 1
                      ? 'https://images.unsplash.com/photo-1611171711969-5027d79a4b00?auto=format&fit=crop&w=300&q=60'
                      : 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=300&q=60'
                }
                className="w-16 h-12 rounded-lg object-cover"
                alt="cart"
              />
              <div className="flex-1 text-sm">
                Warp de Frango grelhado, maça, nozes
                <div className="text-muted">1 x</div>
              </div>
              <div className="font-semibold text-accent">€ 8.25</div>
            </div>
          ))}
        </div>
        <div className="border-t mt-4 pt-3 flex justify-between font-semibold">
          <span>Subtotal</span>
          <span className="text-accent">€ 24.25</span>
        </div>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: '10px' }}>
          <button className="btn btn-ghost border">Cart</button>
          <button className="btn btn-primary">Checkout</button>
          <button className="btn btn-ghost border">Comparison</button>
        </div>
      </div>
    </div>
  </Section>
)

export default Cart
