import Head from "next/head"
import styles from "../styles/Home.module.css"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"

export default function Home() {
    return (
        <div className={styles.container}>
            {/* ### HEAD ### */}
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Simple smart contract lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* ### HEADER ### */}
            <Header />
            {/* ### LOTTERY ENTRANCE ### */}
            <LotteryEntrance />
        </div>
    )
}
