// import React from "react";
// import Header from "../components/Header.jsx";
// import Footer from "../components/Footer.jsx";
// import HeroSection from "../components/HeroSection/HeroSection.jsx";
// import AppointmentForm from "../components/AppointmentForm.jsx";
// import FeatureSection from "../components/FeatureSection/FeatureSection.jsx";
// import StatsSection from "../components/StatSection/StatSection.jsx";
// import DoctorsSection from "../components/DoctorSection/DoctorSection.jsx";
// import ClinicsSection from "../components/ClinicSection/ClinicSection.jsx";

// const Home = () => (
//   <div>
//     <Header />
//     <main className="min-h-screen p-6">
//       {/* Hero Section */}
//       <HeroSection />

//       {/* Appointment Form */}
//       <section className="mt-10">
//         <AppointmentForm />
//       </section>

//       {/* Features Section */}
//       <section className="mt-10">
//         <FeatureSection />
//       </section>

//       {/* Stats Section */}
//       <section className="mt-10">
//         <StatsSection />
//       </section>

//       {/* Doctors Section */}
//       <section className="mt-10">
//         <DoctorsSection />
//       </section>

//       {/* Clinics Section */}
//       <section className="mt-10">
//         <ClinicsSection />
//       </section>
//     </main>
//     <Footer />
//   </div>
// );

// export default Home;
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import DoctorsSection from "../components/DoctorSection";
import ClinicsSection from "../components/ClinicSection";

const HomePage = () => (
  <div>
    <Header />
    <HeroSection />
    <DoctorsSection />
    <ClinicsSection />
    <Footer />
  </div>
);

export default HomePage;
