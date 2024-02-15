import Hero from '../components/Hero/Hero'
import SubCollection from '../components/SubCollection/SubCollection'
import Header from '../components/header/Header'
import Collection from '../components/Collection/Collection'
import Products from '../components/Products/Products'
import Banner from '../components/Banner/Banner'
import LimitedEdition from '../components/LimitedEdition/LimitedEdition'
import Photos from '../components/Photos/Photos'
import Support from '../components/Support/Support'

import './Home.scss'

export default function Home() {
  return (
    <>
      <header className="container">
        <Header />
      </header>
      <main className="container">
        <section className="section-hero">
          <Hero />
        </section>
        <section className="section-collections">
          <Collection />
        </section>
      </main>
      {/* 
      
      <Products />
      <Banner />
      <LimitedEdition />
      <section className="container">
        <div className="subcollection-container">
          <SubCollection />
          <SubCollection />
        </div>
      </section>
      <Photos />
      <Support /> */}
    </>
  )
}
