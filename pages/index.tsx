import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AssetCardHeader from "../whitelabel/components/AssetCard/AssetCardHeader";
import AssetCardAction from "../whitelabel/components/AssetCard/AssetCardAction";
import AssetCardMedia from "../whitelabel/components/AssetCard/AssetCardMedia";
import AssetContent from "../whitelabel/components/AssetCard/AssetCardContent";
import AssetContainer from "../whitelabel/components/AssetCard/AssetCardContainer";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className={styles.main}> */}
      <AssetContainer language="en" classes="w-full w-[60%] text-white">
        <div className="">
          <AssetCardMedia isNextjs={true}  imageUrl={"https://arweave.net/dm4ohGlzQmUYZ8-NfQ85YAf7TshRn0rDWo1KC58zV48"} />
          <div className="">
            <div className="">
              <AssetCardHeader
                name={`name ${1}`}
                classes="text-30px,"
                iconClassName="text-white fill-white h-[20px] w-[20px]"
              />
            </div>
            <div className="">
              <AssetContent
                popularity={12}
                showRarityPrice={true}
                showPopularity={true}
                showTotalBids={true}
              />
            </div>
            <div className="">
              <AssetCardAction
                iconClassName="!fill-red-500"
                classes="text-white "
                showFavorite={true}
              />
            </div>
          </div>
        </div>
      </AssetContainer>

      {/* </main> */}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
