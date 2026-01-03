'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <Head>
        <title>CV Feniks Muda Sejahtera | Penerbit Buku Profesional Indonesia</title>
        <meta name="description" content="CV Feniks Muda Sejahtera adalah penerbit buku profesional di Indonesia yang menyediakan layanan penerbitan, editing, desain, dan distribusi buku berkualitas." />
        <meta name="keywords" content="penerbit buku, publishing house, jasa penerbitan buku, editor buku, desain cover buku, percetakan buku, penerbit bandung, feniks muda sejahtera" />
        <meta name="author" content="CV Feniks Muda Sejahtera" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CV Feniks Muda Sejahtera | Penerbit Buku Profesional Indonesia" />
        <meta property="og:description" content="Penerbit buku profesional di Indonesia yang menyediakan layanan penerbitan, editing, desain, dan distribusi buku berkualitas." />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
              <a href="#" className="text-2xl font-bold text-gray-900">
                Feniks<span className="text-indigo-600">Muda</span>
              </a>
              
              <nav className="hidden md:block">
                <ul className="flex space-x-8">
                  <li><a href="#home" className="text-gray-900 hover:text-indigo-600 font-semibold text-sm uppercase tracking-wide transition-colors">Home</a></li>
                  <li><a href="#about" className="text-gray-900 hover:text-indigo-600 font-semibold text-sm uppercase tracking-wide transition-colors">About</a></li>
                  <li><a href="#services" className="text-gray-900 hover:text-indigo-600 font-semibold text-sm uppercase tracking-wide transition-colors">Services</a></li>
                  <li><a href="#portfolio" className="text-gray-900 hover:text-indigo-600 font-semibold text-sm uppercase tracking-wide transition-colors">Portfolio</a></li>
                  <li><a href="#contact" className="text-gray-900 hover:text-indigo-600 font-semibold text-sm uppercase tracking-wide transition-colors">Contact</a></li>
                </ul>
              </nav>

              <button 
                onClick={toggleMobileMenu}
                className="md:hidden flex flex-col gap-1.5"
              >
                <span className="w-6 h-0.5 bg-gray-900 transition-all"></span>
                <span className="w-6 h-0.5 bg-gray-900 transition-all"></span>
                <span className="w-6 h-0.5 bg-gray-900 transition-all"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-40 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex justify-end p-6">
            <button onClick={toggleMobileMenu} className="text-3xl text-gray-900">&times;</button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full">
            <ul className="space-y-8 text-center">
              <li><a href="#home" onClick={() => scrollToSection('home')} className="text-2xl font-bold text-gray-900 hover:text-indigo-600">Home</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')} className="text-2xl font-bold text-gray-900 hover:text-indigo-600">About</a></li>
              <li><a href="#services" onClick={() => scrollToSection('services')} className="text-2xl font-bold text-gray-900 hover:text-indigo-600">Services</a></li>
              <li><a href="#portfolio" onClick={() => scrollToSection('portfolio')} className="text-2xl font-bold text-gray-900 hover:text-indigo-600">Portfolio</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')} className="text-2xl font-bold text-gray-900 hover:text-indigo-600">Contact</a></li>
            </ul>
          </nav>
        </div>

        {/* Hero Section */}
        <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center pt-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="hero-text">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Where Your Literary Vision
                  <span className="block text-indigo-600">Meets Professional Publishing</span>
                </h1>
                
                <div className="flex flex-wrap gap-8 mb-8">
                  <div className="border-l-2 border-indigo-600 pl-4">
                    <span className="block text-xs text-gray-600 uppercase tracking-wide mb-1">Location</span>
                    <p className="font-semibold text-gray-900">Bandung<br/>Indonesia</p>
                  </div>
                  <div className="border-l-2 border-indigo-600 pl-4">
                    <span className="block text-xs text-gray-600 uppercase tracking-wide mb-1">Specialized</span>
                    <p className="font-semibold text-gray-900">Book Publishing<br/>Since 2024</p>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                  CV Feniks Muda Sejahtera adalah penerbit buku profesional yang menghadirkan karya-karya berkualitas tinggi. Dari naskah hingga buku terbit, kami mendampingi perjalanan literasi Anda.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-indigo-600 transition-all transform hover:-translate-y-1 flex items-center gap-2"
                  >
                    <span>Get Started</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-gray-900 hover:text-white transition-all"
                  >
                    Our Services
                  </button>
                </div>
              </div>

              <div className="hero-visual">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80" 
                      alt="Book Publishing" 
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" 
                      alt="Author" 
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1484980972921-ed40c9225825?w=400&q=80" 
                      alt="Writing" 
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center py-12">
              <div className="animate-bounce text-indigo-600">
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee Section */}
        <section className="bg-gray-900 py-8 overflow-hidden">
          <div className="flex animate-marquee">
            <div className="flex gap-16 px-8">
              <span className="text-white text-2xl font-semibold whitespace-nowrap opacity-80">Publishing</span>
              <span className="text-indigo-400 text-2xl font-semibold whitespace-nowrap opacity-80">Editing</span>
              <span className="text-white text-2xl font-semibold whitespace-nowrap opacity-80">Design</span>
              <span className="text-indigo-400 text-2xl font-semibold whitespace-nowrap opacity-80">Printing</span>
              <span className="text-white text-2xl font-semibold whitespace-nowrap opacity-80">Distribution</span>
              <span className="text-indigo-400 text-2xl font-semibold whitespace-nowrap opacity-80">Quality</span>
            </div>
            <div className="flex gap-16 px-8">
              <span className="text-white text-2xl font-semibold whitespace-nowrap opacity-80">Publishing</span>
              <span className="text-indigo-400 text-2xl font-semibold whitespace-nowrap opacity-80">Editing</span>
              <span className="text-white text-2xl font-semibold whitespace-nowrap opacity-80">Design</span>
              <span className="text-indigo-400 text-2xl font-semibold whitespace-nowrap opacity-80">Printing</span>
              <span className="text-white text-2xl font-semibold whitespace-nowrap opacity-80">Distribution</span>
              <span className="text-indigo-400 text-2xl font-semibold whitespace-nowrap opacity-80">Quality</span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80" 
                  alt="About Feniks Muda Sejahtera" 
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-600 rounded-2xl -z-10"></div>
              </div>

              <div className="about-text">
                <div className="mb-8">
                  <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wide mb-3">(Unleashing Stories)</p>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                    Welcome to Our<br/>Publishing Journey
                  </h2>
                </div>

                <p className="text-gray-600 mb-6 text-lg">
                  CV Feniks Muda Sejahtera adalah perusahaan yang bergerak di bidang penerbitan buku. Kami menyediakan layanan komprehensif mulai dari editing naskah, desain cover, percetakan, hingga distribusi buku.
                </p>

                <p className="text-gray-600 mb-8 text-lg">
                  Berlokasi di Bandung, kami berkomitmen untuk menerbitkan karya-karya berkualitas yang memberikan kontribusi positif bagi dunia literasi Indonesia. Dengan tim yang berpengalaman dan profesional, kami siap menjadi mitra penerbitan Anda.
                </p>

                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-indigo-600 transition-all transform hover:-translate-y-1 flex items-center gap-2"
                >
                  <span>Contact Us</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:transform hover:-translate-y-2 transition-all">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  50<span className="text-indigo-600">+</span>
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Books Published</div>
              </div>
              <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:transform hover:-translate-y-2 transition-all">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  30<span className="text-indigo-600">+</span>
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Happy Authors</div>
              </div>
              <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:transform hover:-translate-y-2 transition-all">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  10<span className="text-indigo-600">+</span>
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Team Members</div>
              </div>
              <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:transform hover:-translate-y-2 transition-all">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  99<span className="text-indigo-600">%</span>
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Author Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wide mb-3">(What We Offer)</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Why Feniks Muda Sejahtera?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-200 rounded-2xl hover:border-indigo-600 hover:shadow-xl transition-all cursor-pointer">
                <div className="text-indigo-600 font-semibold text-sm mb-4">001</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Publishing</h3>
                <p className="text-gray-600">
                  Kami menyediakan layanan penerbitan profesional dengan standar kualitas tertinggi. Dari naskah hingga buku terbit, setiap tahap ditangani dengan ahli.
                </p>
              </div>

              <div className="p-8 border border-gray-200 rounded-2xl hover:border-indigo-600 hover:shadow-xl transition-all cursor-pointer">
                <div className="text-indigo-600 font-semibold text-sm mb-4">002</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Editorial Team</h3>
                <p className="text-gray-600">
                  Tim editor profesional kami siap membantu menyempurnakan naskah Anda, memastikan kualitas konten dan gaya bahasa yang terbaik.
                </p>
              </div>

              <div className="p-8 border border-gray-200 rounded-2xl hover:border-indigo-600 hover:shadow-xl transition-all cursor-pointer">
                <div className="text-indigo-600 font-semibold text-sm mb-4">003</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Creative Design</h3>
                <p className="text-gray-600">
                  Tim desain kami menciptakan cover buku yang menarik dan layout interior yang nyaman dibaca, membuat buku Anda berdiri di rak toko.
                </p>
              </div>

              <div className="p-8 border border-gray-200 rounded-2xl hover:border-indigo-600 hover:shadow-xl transition-all cursor-pointer">
                <div className="text-indigo-600 font-semibold text-sm mb-4">004</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Wide Distribution</h3>
                <p className="text-gray-600">
                  Jaringan distribusi kami memastikan buku Anda dapat dijangkau pembaca di seluruh Indonesia melalui berbagai saluran penjualan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wide mb-3">(Our Expertise)</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">Our Services</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:transform hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Book Publishing</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Layanan penerbitan buku komprehensif dari naskah hingga buku cetak siap jual dengan proses profesional dan berkualitas.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:transform hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Editorial Services</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Layanan editing profesional termasuk substantive editing, copyediting, dan proofreading untuk memastikan kualitas naskah.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:transform hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Cover Design</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Desain cover buku yang menarik dan profesional untuk membuat buku Anda berbeda dan menarik perhatian pembaca.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:transform hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Layout & Typesetting</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Layout interior dan typesetting profesional untuk keterbacaan optimal dan tampilan buku yang rapi dan menarik.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:transform hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Printing Services</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Layanan percetakan berkualitas dengan berbagai pilihan kertas dan finishing untuk hasil cetak terbaik.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:transform hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Book Distribution</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Jaringan distribusi luas untuk memastikan buku Anda tersedia di toko buku dan platform online terkemuka.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wide mb-3">(Our Work)</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Published Books</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { category: 'Fiction', title: 'Novel Dewasa Muda' },
                { category: 'Non-Fiction', title: 'Buku Pengembangan Diri' },
                { category: 'Academic', title: 'Buku Ajar Universitas' },
                { category: 'Children', title: 'Buku Anak-Anak' },
                { category: 'Business', title: 'Buku Bisnis' },
                { category: 'Biography', title: 'Biografi Inspiratif' }
              ].map((item, index) => (
                <div key={index} className="relative group rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                  <img 
                    src={`https://images.unsplash.com/photo-${1507003211169 - index * 1000}?w=600&q=80`} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-indigo-400 text-xs font-semibold uppercase tracking-wide mb-2">{item.category}</span>
                    <h4 className="text-white text-xl font-bold">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-indigo-600 to-purple-700 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Publish Your Book?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Mari wujudkan buku impian Anda bersama kami. Hubungi tim Feniks Muda Sejahtera untuk konsultasi gratis.
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-gray-900 hover:text-white transition-all transform hover:-translate-y-1 flex items-center gap-2 mx-auto"
            >
              <span>Let's Talk</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="contact-info">
                <div className="mb-8">
                  <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wide mb-3">(Get in Touch)</p>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                    Let's Work Together
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600 text-sm">
                        Jalan Kebon Tujuh Nomor 56 (Gang Abah Umin)<br />
                        Desa/Kelurahan Ciumbuleuit, Kec. Cidadap<br />
                        Kota Bandung, Provinsi Jawa Barat
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600 text-sm">0852-8570-3582</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600 text-sm">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="Your name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-600 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="your@email.com" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-600 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      placeholder="Your phone number" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      placeholder="How can we help you?" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell us about your book project..." 
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-600 transition-colors resize-none"
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-sm uppercase tracking-wide hover:bg-indigo-600 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div className="lg:col-span-2">
                <a href="#" className="text-2xl font-bold text-white mb-4 inline-block">
                  Feniks<span className="text-indigo-600">Muda</span>
                </a>
                <p className="text-sm text-gray-400 mb-6 max-w-md">
                  Penerbit buku profesional yang menghadirkan karya-karya berkualitas tinggi untuk dunia literasi Indonesia.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-indigo-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-indigo-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-indigo-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-3">
                  <li><a href="#home" className="text-gray-400 hover:text-indigo-600 transition-colors text-sm">Home</a></li>
                  <li><a href="#about" className="text-gray-400 hover:text-indigo-600 transition-colors text-sm">About Us</a></li>
                  <li><a href="#services" className="text-gray-400 hover:text-indigo-600 transition-colors text-sm">Services</a></li>
                  <li><a href="#portfolio" className="text-gray-400 hover:text-indigo-600 transition-colors text-sm">Portfolio</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-indigo-600 transition-colors text-sm">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Services</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors text-sm">Book Publishing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors text-sm">Editorial Services</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors text-sm">Cover Design</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors text-sm">Printing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors text-sm">Distribution</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400 mb-4 md:mb-0">
                &copy; 2024 CV Feniks Muda Sejahtera. All rights reserved.
              </p>
              <p className="text-sm text-gray-400">
                Bandung, Indonesia
              </p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </>
  );
}