import React, { useState } from 'react';

import {
  Sprout,
  Menu,
  X,
  ArrowRight,
  BrainCircuit,
  CloudSun,
  MapPin,
} from 'lucide-react';


interface MainLayoutProps {
  children: React.ReactNode;

  activeNav:
    | 'home'
    | 'features'
    | 'about'
    | 'wizard';

  onNavigate: (
    section:
      | 'home'
      | 'features'
      | 'about'
      | 'wizard'
  ) => void;
}


export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  activeNav,
  onNavigate,
}) => {

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);


  const handleNavClick = (
    section:
      | 'home'
      | 'features'
      | 'about'
      | 'wizard'
  ) => {

    onNavigate(section);

    setMobileMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (

    <div className="
      min-h-screen
      flex
      flex-col
      bg-[#f6f8f2]
      text-[#20362a]
    ">


      {/* ================================================= */}
      {/* NAVIGATION */}
      {/* ================================================= */}

      <header className="
        sticky
        top-0
        z-50
        bg-white/95
        backdrop-blur-md
        border-b
        border-[#e3e9df]
      ">

        <div className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
          lg:px-8
          h-[74px]
          flex
          items-center
          justify-between
        ">


          {/* LOGO */}

          <button
            type="button"
            onClick={() =>
              handleNavClick('home')
            }
            className="
              flex
              items-center
              gap-3
              cursor-pointer
              group
            "
          >

            <div className="
              w-10
              h-10
              rounded-xl
              bg-[#347a40]
              flex
              items-center
              justify-center
              text-white
              transition-transform
              group-hover:rotate-[-5deg]
            ">

              <Sprout className="
                w-6
                h-6
              " />

            </div>


            <div className="text-left">

              <div className="
                text-[22px]
                font-extrabold
                tracking-tight
                leading-none
                text-[#20362a]
              ">

                Smart
                <span className="text-[#4e9142]">
                  Crop
                </span>

              </div>

              <p className="
                hidden
                sm:block
                text-[10px]
                uppercase
                tracking-[0.15em]
                text-stone-400
                font-semibold
                mt-1
              ">
                AI Crop Recommendation
              </p>

            </div>

          </button>



          {/* DESKTOP NAV */}

          <nav className="
            hidden
            md:flex
            items-center
            gap-8
          ">

            <button
              type="button"
              onClick={() =>
                handleNavClick('home')
              }
              className={`
                text-sm
                font-semibold
                transition-colors
                cursor-pointer

                ${
                  activeNav === 'home'
                    ? 'text-[#347a40]'
                    : 'text-stone-600 hover:text-[#347a40]'
                }
              `}
            >
              Home
            </button>


            <button
              type="button"
              onClick={() =>
                handleNavClick('features')
              }
              className={`
                text-sm
                font-semibold
                transition-colors
                cursor-pointer

                ${
                  activeNav === 'features'
                    ? 'text-[#347a40]'
                    : 'text-stone-600 hover:text-[#347a40]'
                }
              `}
            >
              How It Works
            </button>


            <button
              type="button"
              onClick={() =>
                handleNavClick('about')
              }
              className={`
                text-sm
                font-semibold
                transition-colors
                cursor-pointer

                ${
                  activeNav === 'about'
                    ? 'text-[#347a40]'
                    : 'text-stone-600 hover:text-[#347a40]'
                }
              `}
            >
              About
            </button>

          </nav>



          {/* DESKTOP CTA */}

          <button
            type="button"
            onClick={() =>
              handleNavClick('wizard')
            }
            className="
              hidden
              md:inline-flex
              items-center
              gap-2

              bg-[#347a40]
              hover:bg-[#286533]

              text-white
              text-sm
              font-bold

              px-5
              py-3

              rounded-xl

              transition-all

              hover:shadow-lg

              cursor-pointer
            "
          >

            Find My Crops

            <ArrowRight className="
              w-4
              h-4
            " />

          </button>



          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            onClick={() =>
              setMobileMenuOpen(
                !mobileMenuOpen
              )
            }
            className="
              md:hidden

              w-10
              h-10

              rounded-xl

              border
              border-[#dce5d7]

              bg-white

              flex
              items-center
              justify-center

              text-[#294a32]

              cursor-pointer
            "
            aria-label="Open navigation menu"
          >

            {mobileMenuOpen ? (

              <X className="w-5 h-5" />

            ) : (

              <Menu className="w-5 h-5" />

            )}

          </button>

        </div>



        {/* ================================================= */}
        {/* MOBILE MENU */}
        {/* ================================================= */}

        {mobileMenuOpen && (

          <div className="
            md:hidden
            bg-white
            border-t
            border-[#e4e9e1]
            px-5
            py-5
            shadow-lg
          ">

            <div className="
              flex
              flex-col
              gap-1
            ">

              <button
                type="button"
                onClick={() =>
                  handleNavClick('home')
                }
                className="
                  text-left
                  px-4
                  py-3
                  rounded-lg
                  font-semibold
                  text-stone-700
                  hover:bg-[#f1f6ee]
                  cursor-pointer
                "
              >
                Home
              </button>


              <button
                type="button"
                onClick={() =>
                  handleNavClick('features')
                }
                className="
                  text-left
                  px-4
                  py-3
                  rounded-lg
                  font-semibold
                  text-stone-700
                  hover:bg-[#f1f6ee]
                  cursor-pointer
                "
              >
                How It Works
              </button>


              <button
                type="button"
                onClick={() =>
                  handleNavClick('about')
                }
                className="
                  text-left
                  px-4
                  py-3
                  rounded-lg
                  font-semibold
                  text-stone-700
                  hover:bg-[#f1f6ee]
                  cursor-pointer
                "
              >
                About
              </button>


              <button
                type="button"
                onClick={() =>
                  handleNavClick('wizard')
                }
                className="
                  mt-3

                  flex
                  items-center
                  justify-center
                  gap-2

                  bg-[#347a40]

                  text-white
                  font-bold

                  px-5
                  py-3.5

                  rounded-xl

                  cursor-pointer
                "
              >

                Find My Crops

                <ArrowRight className="
                  w-4
                  h-4
                " />

              </button>

            </div>

          </div>

        )}

      </header>



      {/* ================================================= */}
      {/* PAGE CONTENT */}
      {/* ================================================= */}

      <main className="flex-1">

        {children}

      </main>



      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}

      <footer className="
        bg-[#173824]
        text-white
      ">

        <div className="
          max-w-7xl
          mx-auto
          px-6
          pt-14
          pb-7
        ">


          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-10
            pb-12
          ">


            {/* BRAND */}

            <div className="
              lg:col-span-2
            ">

              <div className="
                flex
                items-center
                gap-3
              ">

                <div className="
                  w-10
                  h-10
                  rounded-xl
                  bg-[#5c9b48]
                  flex
                  items-center
                  justify-center
                ">

                  <Sprout className="
                    w-6
                    h-6
                  " />

                </div>


                <span className="
                  text-2xl
                  font-extrabold
                ">
                  SmartCrop
                </span>

              </div>


              <p className="
                mt-5
                text-sm
                text-green-100/70
                leading-relaxed
                max-w-md
              ">

                An ANN-based seasonal crop
                recommendation system designed
                to support crop selection using
                regional soil information and
                forecast weather conditions.

              </p>


              <div className="
                flex
                flex-wrap
                gap-4
                mt-6
                text-xs
                text-green-100/70
              ">

                <span className="
                  flex
                  items-center
                  gap-1.5
                ">

                  <BrainCircuit className="
                    w-4
                    h-4
                    text-[#8bc76a]
                  " />

                  ANN Model

                </span>


                <span className="
                  flex
                  items-center
                  gap-1.5
                ">

                  <CloudSun className="
                    w-4
                    h-4
                    text-[#8bc76a]
                  " />

                  Weather Forecast

                </span>


                <span className="
                  flex
                  items-center
                  gap-1.5
                ">

                  <MapPin className="
                    w-4
                    h-4
                    text-[#8bc76a]
                  " />

                  Sri Lanka

                </span>

              </div>

            </div>



            {/* NAVIGATION */}

            <div>

              <h4 className="
                text-sm
                font-bold
                mb-5
              ">
                Explore
              </h4>


              <div className="
                flex
                flex-col
                items-start
                gap-3
              ">

                <button
                  onClick={() =>
                    handleNavClick('home')
                  }
                  className="
                    text-sm
                    text-green-100/65
                    hover:text-white
                    transition-colors
                    cursor-pointer
                  "
                >
                  Home
                </button>


                <button
                  onClick={() =>
                    handleNavClick('features')
                  }
                  className="
                    text-sm
                    text-green-100/65
                    hover:text-white
                    transition-colors
                    cursor-pointer
                  "
                >
                  How It Works
                </button>


                <button
                  onClick={() =>
                    handleNavClick('about')
                  }
                  className="
                    text-sm
                    text-green-100/65
                    hover:text-white
                    transition-colors
                    cursor-pointer
                  "
                >
                  About SmartCrop
                </button>


                <button
                  onClick={() =>
                    handleNavClick('wizard')
                  }
                  className="
                    text-sm
                    text-[#9bd078]
                    font-bold
                    hover:text-white
                    transition-colors
                    cursor-pointer
                  "
                >
                  Get Recommendation
                </button>

              </div>

            </div>



            {/* COVERAGE */}

            <div>

              <h4 className="
                text-sm
                font-bold
                mb-5
              ">
                Coverage
              </h4>


              <p className="
                text-sm
                text-green-100/65
                leading-relaxed
              ">

                Designed for Sri Lankan
                cultivation conditions across
                Maha and Yala seasons.

              </p>


              <div className="
                mt-5
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-white/7
                border
                border-white/10
                px-3
                py-2
                text-xs
                text-green-100/80
              ">

                <MapPin className="
                  w-3.5
                  h-3.5
                  text-[#9bd078]
                " />

                25 Districts

              </div>

            </div>

          </div>



          {/* BOTTOM */}

          <div className="
            border-t
            border-white/10

            pt-6

            flex
            flex-col
            sm:flex-row
            items-center
            justify-between

            gap-3

            text-[11px]
            text-green-100/45
          ">

            <p>
              © {new Date().getFullYear()} SmartCrop
            </p>

            <p>
              ANN-Based Seasonal Crop Recommendation System
            </p>

          </div>

        </div>

      </footer>

    </div>

  );
};