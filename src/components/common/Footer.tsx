import { NavLink } from "react-router-dom";
import myIcon1 from "../../assets/images/1.svg";
import myIcon2 from "../../assets/images/2.svg";
import myIcon3 from "../../assets/images/3.svg";
import myIcon4 from "../../assets/images/4.svg";

const navFooter = [
  { name: "About", to: "/about" },
  { name: "Hello", to: "/" },
  { name: "Work", to: "/work" },
];

const Footer = () => {
  return (
    <div>
      <footer className="fixed flex justify-between items-center bottom-0 w-full py-10">
        <div className="flex justify-center items-center">
          <div className="absolute flex justify-center items-center gap-4 transform -translate-x-1/2 left-1/2">
            {navFooter.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className="px-4 py-2 font-semibold text-gray-900 -mx-2"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="absolute flex gap-2 right-0 py-2 px-10">
            {[
              {
                icon: myIcon1,
                alt: "github",
                to: "https://github.com/yourusername",
              },
              {
                icon: myIcon2,
                alt: "twitter",
                to: "https://twitter.com/yourusername",
              },
              {
                icon: myIcon3,
                alt: "linkedin",
                to: "https://linkedin.com/in/yourusername",
              },
              {
                icon: myIcon4,
                alt: "instagram",
                to: "https://instagram.com/yourusername",
              },
            ].map((social) => (
              <a
                key={social.alt}
                href={social.to}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={social.icon} alt={social.alt} />
              </a>
            ))}
          </div>
          <div className="absolute flex left-0 gap-4 py-2 px-10">
            <p className="font-semibold text-gray-900">Ulrich Ando</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
