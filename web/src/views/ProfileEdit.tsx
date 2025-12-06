import { CartTag, ContactChip, HeroNav, Logo, Section } from '../components/Layout'

const fields = ['Nome', 'Apelido', 'E-mail', 'Data de Nascimento', 'Telefone', 'Telemovel', 'Tax No', 'Nif', 'Address', 'Morada', 'Country', 'City']

export const ProfileEdit = () => (
  <Section label="Edit Profile">
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
        <div className="w-1/4 bg-cream rounded-xl p-4 text-center">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60"
            alt="profile"
            className="w-24 h-24 rounded-full object-cover mx-auto"
          />
          <div className="font-semibold mt-3">Pedro Romao de Figueriedo</div>
          <p className="text-muted text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4">Bem vindo</h3>
          <div className="form-grid">
            {fields.map((field) => (
              <div key={field} className="flex flex-col gap-2">
                <label className="text-sm font-semibold">{field}</label>
                <input className="input" placeholder="Pedro Romao de Figueiredo" />
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  </Section>
)

export default ProfileEdit
