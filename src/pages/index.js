import Head from 'next/head';
import Image from 'next/image';

import HealthyFood from '../components/HealthyFood';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Healthy Food</title>
      </Head>
      <HealthyFood />
    </div>
  );
}
