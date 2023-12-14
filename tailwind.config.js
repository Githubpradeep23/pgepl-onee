/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero_bg_image:
          "url('../../public/assets/images/home-banner/home-banner.jpg')",
        mobile_hero_bg_image:
          "url('../../public/assets/images/mobile-hero.jpg')",
        enabled_decks: "url('../../public/assets/images/mobile-about.png')",
        navbarbanner: "url('../../public/assets/images/hero.jpg')",
        mobile_enabled_decks:
          "url('../../public/assets/images/mobile-about.png')",
        storyteller_img:
          "url('../../public/assets/images/home-banner/storyteller.png')",
        servicesBgImg: "url('../../public/assets/images/service-bg.jpg')",
        servicesBgBannerImg:
          "url('../../public/assets/images/services-bgn.jpg')",
        servicesSecondSectionImg:
          "url('../../public/assets/images/finance-bg-1.jpg')",
        mobileTeaserImg:
          "url('../../public/assets/images/services-section.jpg')",
        productsBgBanner:
          "url('../../public/assets/images/products-bg-banner.jpg')",
        productsBgMobile:
          "url('../../public/assets/images/product-bg-mobile.jpg')",

        digital_marketing:
          "url('../../public/assets/images/home-banner/digital-marketing-banner.png')",

        classroom_management:
          "url('../../public/assets/images/home-banner/classroom-management.png')",

        choose_excellence:
          "url('../../public/assets/images/home-banner/choose-chalaning.png')",

        testimonial:
          "url('../../public/assets/images/home-banner/testimonial.png')",

        product_banner:
          "url('../../public/assets/images/home-banner/product-banner.png')",

        edumatic_banner:
          "url('../../public/assets/images/home-banner/edumatic.png')",

        fee_management:
          "url('../../public/assets/images/home-banner/fee-management.png')",

        admission_management:
          "url('../../public/assets/images/home-banner/admission-management.png')",

        attendance_management:
          "url('../../public/assets/images/home-banner/attendance-management.png')",

        integrated_school:
          "url('../../public/assets/images/home-banner/integrated-school.png')",

        school_planner:
          "url('../../public/assets/images/home-banner/school-planner.png')",

        role_permission:
          "url('../../public/assets/images/home-banner/role-permission.png')",

        student_report:
          "url('../../public/assets/images/home-banner/student-report.png')",

        practice_question:
          "url('../../public/assets/images/home-banner/practice-question.png')",

        communication_module:
          "url('../../public/assets/images/home-banner/communication-module.png')",

        private_chat:
          "url('../../public/assets/images/home-banner/private-chat.png')",

        website_builder:
          "url('../../public/assets/images/home-banner/website-builder.png')",

        web_mobile_app:
          "url('../../public/assets/images/home-banner/web-mobile-app.png')",

          about_us:
          "url('../../public/assets/images/home-banner/about-us.png')",

        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
