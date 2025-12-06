import { CartTag, ContactChip, HeroNav, Logo, ProcessCard, Section, SidebarCart } from '../components/Layout'
import { foodImages } from '../data/constants'

export const HomeWithCart = () => (
  <Section>
    <div className="flex gap-6 items-start">
      <div className="flex-1 bg-white rounded-2xl shadow-lg overflow-hidden">
        <div
          className="p-6 text-white"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.4) 100%), url(${foodImages.hero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <Logo />
            <HeroNav />
            <div className="flex items-center gap-3">
              <CartTag />
              <ContactChip />
            </div>
          </div>
          <div className="max-w-lg text-shadow">
            <p className="text-sm font-semibold">Welcome to our restaurant</p>
            <h2 className="text-4xl font-bold leading-snug">TupperEat, a refeição escolhida por quem sabe o que quer.</h2>
            <button className="btn btn-primary mt-4">Order</button>
          </div>
        </div>
        <div className="bg-white p-6">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: '14px' }}>
            {['Non Veg', 'Fish', 'Vegetables', 'Salad'].map((item) => (
              <div key={item} className="info-card text-center">
                <div className="text-lg font-semibold text-accent mb-2">{item}</div>
                <p className="text-muted text-sm leading-normal">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">Our Process</h3>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: '18px' }}>
              <ProcessCard
                title="Convenience"
                description="Convenience and simple ordering with our deliveries."
                image="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=60"
              />
              <ProcessCard
                title="Sabor E Qualidade"
                description="Assured quality, fast delivery and careful packing for every meal."
                image="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=60"
              />
              <ProcessCard
                title="Mais Valor"
                description="The best options with the best price to delight your table."
                image={foodImages.process}
              />
            </div>
          </div>
        </div>
      </div>
      <SidebarCart />
    </div>
  </Section>
)

export default HomeWithCart
