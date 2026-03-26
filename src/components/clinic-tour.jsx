import Head from 'next/head';
import { ClinicTourSection } from '../components/ClinicTour';

export default function ClinicTourDemo() {
  return (
    <>
      <Head>
        <title>Clinic Visual Tour — Dental Wellness</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> */}
      </Head>

      <main>
        <ClinicTourSection />
      </main>
    </>
  );
}
