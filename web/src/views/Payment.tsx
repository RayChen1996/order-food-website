import { OrderRow, Section } from '../components/Layout'

export const Payment = () => (
  <Section label="Payment Screen">
    <div className="grid" style={{ gridTemplateColumns: '2fr 1fr', gap: '18px' }}>
      <div className="bg-white rounded-2xl p-6 shadow">
        <div className="font-semibold mb-4">&lt; Back</div>
        <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
        <OrderRow
          title="Warp de Frango grelhado, maça, nozes"
          note="Sabores do peru flambada com leite de coco e perfumada adicionado"
          qty="01"
          price="8.25"
          image="https://images.unsplash.com/photo-1611171711969-5027d79a4b00?auto=format&fit=crop&w=300&q=60"
        />
        <OrderRow
          title="Bolonhesa de novilho com esparguete [400g]"
          note="Sabores do peru flambada com leite de coco e perfumada adicionado"
          qty="02"
          price="16.50"
          image="https://images.unsplash.com/photo-1447078806655-40579c2520d6?auto=format&fit=crop&w=300&q=60"
        />
        <OrderRow
          title="Frango de caril com arroz brancos [400g]"
          note="Sabores do peru flambada com leite de coco e perfumada adicionado"
          qty="01"
          price="7.50"
          image="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=300&q=60"
        />
      </div>
      <div className="bg-white rounded-2xl p-6 shadow">
        <h4 className="text-xl font-semibold mb-4">Summary</h4>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>€ 24.75</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>€ 0.0</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Tax</span>
          <span>€ 1.2</span>
        </div>
        <div className="border-t mt-4 pt-4 flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>€ 94.75</span>
        </div>
        <button className="btn btn-primary w-full mt-4">Finalizar Compra</button>
      </div>
    </div>
  </Section>
)

export default Payment
