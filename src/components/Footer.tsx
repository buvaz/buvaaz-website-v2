import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="main-navigation-2">
        <div className="div-flex-4">
          <a href="#" className="navbar03_logo-link w-nav-brand">
            <div className="uui-styleguide_logo">
              <img
                src="/images/buvaaz_logo_02.png"
                loading="lazy"
                width="124"
                height="Auto"
                alt=""
                sizes="123.994140625px"
              />
            </div>
          </a>
          <div className="frame-26085910">
            <a href="tel:+256766898058" className="w-inline-block">
              <img
                src="/images/Vectors-Wrapper_5.svg"
                loading="lazy"
                width="18.00004005432129"
                height="18"
                alt=""
                className="vectors-wrapper-36"
              />
            </a>
            <a
              href="https://www.instagram.com/buvaaz"
              target="_blank"
              className="w-inline-block"
            >
              <img
                src="/images/Vectors-Wrapper_6.svg"
                loading="lazy"
                width="18"
                height="18"
                alt=""
                className="vectors-wrapper-37"
              />
            </a>
            <a
              href="https://medium.com/@buvaaz.com"
              target="_blank"
              className="w-inline-block"
            >
              <img
                src="/images/Vectors-Wrapper_9.svg"
                loading="lazy"
                width="24"
                height="24"
                alt=""
                className="vectors-wrapper-39"
              />
            </a>
            <a
              href="https://www.youtube.com/@BuvaazAfrica"
              target="_blank"
              className="w-inline-block"
            >
              <img
                src="/images/Vectors-Wrapper_11.svg"
                loading="lazy"
                width="20"
                height="20"
                alt=""
                className="vectors-wrapper-40"
              />
            </a>
            <a
              href="https://www.tiktok.com/@buvaaz?is_from_webapp=1&amp;sender_device=pc"
              target="_blank"
              className="w-inline-block"
            >
              <img
                src="/images/Vectors-Wrapper_8.svg"
                loading="lazy"
                width="18"
                height="18"
                alt=""
                className="vectors-wrapper-37"
              />
            </a>
            <a
              href="https://x.com/buvaaz"
              target="_blank"
              className="w-inline-block"
            >
              <img
                src="/images/Vectors-Wrapper_7.svg"
                loading="lazy"
                width="19"
                height="19"
                alt=""
                className="vectors-wrapper-38"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/42418033"
              target="_blank"
              className="w-inline-block"
            >
              <img
                src="/images/Vectors-Wrapper_10.svg"
                loading="lazy"
                width="18"
                height="18"
                alt=""
                className="vectors-wrapper-37"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="div-2">
        <div className="div-container-6">
          <div className="p-mt-8">
            <div className="text-73">
              © {new Date().getFullYear()} Buvaaz Commerce Ltd. All rights reserved.
            </div>
          </div>
          <div className="div-hidden-2">
            <div className="div-space-x-3-14 hide-tab">
              <div className="text-72">Help</div>
            </div>
            <div className="div-space-x-3-15"></div>
            <div className="div-space-x-3-15">
              <Link to="/about" className="link-tab">
                About
              </Link>
            </div>
            <div className="div-space-x-3-15">
              <Link to="/terms_of_service" className="link-tab">
                Terms
              </Link>
            </div>
            <div className="div-space-x-3-15">
              <a href="privacy.html" className="link-tab">
                Privacy
              </a>
            </div>
            <div className="div-space-x-3-15">
              <a href="privacy.html" className="link-tab">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
