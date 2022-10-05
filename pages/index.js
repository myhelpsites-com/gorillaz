import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { HeaderTop } from './components/ui/ui'
import { HeroHome } from './container/Home/Home'

export default function Home() {
  return (
    <div>
      <HeaderTop></HeaderTop>
      <HeroHome />
    </div>
  )
}
