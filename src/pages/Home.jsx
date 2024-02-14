import SubCollection from '../components/SubCollection/SubCollection'
import './Home.scss'

export default function Home() {
  return (
    <section className="container">
      <div className="subcollection-container">
        <SubCollection />
        <SubCollection />
      </div>
    </section>
  )
}
