import Head from 'next/head'
import FilterSection from 'src/components/FilterSection/Filtersection'
import ListingsSection from 'src/components/ListingsSection/ListingsSection'
import classes from '../styles/Home.module.scss'

export default function Annonces() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Agenz</title>
      </Head>
			<main>
				<FilterSection />
				<ListingsSection />
			</main>
    </div>
  )
}
