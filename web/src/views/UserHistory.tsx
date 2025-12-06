import { CartTag, ContactChip, HeroNav, Logo, Section } from '../components/Layout'

export const UserHistory = () => (
  <Section label="User History">
    <div className="bg-white rounded-2xl shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <Logo />
        <HeroNav />
        <div className="flex items-center gap-3">
          <CartTag />
          <ContactChip />
        </div>
      </div>
      <div className="flex gap-8 items-start">
        <div className="w-1/4 bg-cream rounded-xl p-4">
          <div className="font-semibold mb-3">Natasha Scolici v</div>
          <div className="flex flex-col gap-2">
            {['About Me', 'Orders', 'Historic'].map((item, idx) => (
              <button
                key={item}
                className={`text-left px-3 py-2 rounded-lg font-semibold ${idx === 2 ? 'bg-white shadow' : 'bg-transparent'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60"
              className="w-24 h-24 rounded-full object-cover"
              alt="Natasha"
            />
            <div>
              <div className="text-2xl font-semibold">Natasha Scolici v</div>
              <div className="text-muted">Director</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {[1, 2].map((item) => (
              <div key={item} className="info-card flex items-center gap-4">
                <img
                  src={
                    item === 1
                      ? 'https://images.unsplash.com/photo-1611171711969-5027d79a4b00?auto=format&fit=crop&w=300&q=60'
                      : 'https://images.unsplash.com/photo-1447078806655-40579c2520d6?auto=format&fit=crop&w=300&q=60'
                  }
                  alt="meal"
                  className="w-24 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="font-semibold">Warp de Frango grelhado, maça, nozes</div>
                  <div className="text-muted text-sm">Lorem ipsum is simply dummy text</div>
                  <div className="text-sm mt-1">Qty: 1</div>
                </div>
                <div className="font-semibold">$29.00</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button className="btn btn-primary">Edit</button>
          </div>
        </div>
      </div>
    </div>
  </Section>
)

export default UserHistory
