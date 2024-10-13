import {
    FiGithub,
    FiFigma,
    FiLinkedin,
    FiInstagram,
    FiDribbble,
    FiMail,
  } from "react-icons/fi";

export const socialLinks = [
  {
    id: 1,
    icon: FiMail,
    url: "mailto:priyadharshanchandranath@gmail.com",
    hoverColor: "text-pink-500",
  },
  {
    id: 2,
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/priyadharshan-chandranath",
    hoverColor: "text-blue-600",
  },
  {
    id: 3,
    icon: FiInstagram,
    url: "https://www.instagram.com/priyadharshan_chandranath",
    hoverColor: "text-pink-500",
  },
  {
    id: 4,
    icon: FiGithub,
    url: "https://github.com/priyadharshan2003",
    hoverColor: "text-gray-800",
  },
  {
    id: 5,
    icon: FiFigma,
    url: "https://www.figma.com/@prichan_uiux",
    hoverColor: "text-purple-500",
  },
  {
    id: 6,
    icon: FiDribbble,
    url: "https://dribbble.com/prichan_uiux",
    hoverColor: "text-pink-500",
  },
];
  
const Footer: React.FC = () => {
    return (
      <div className="container mx-auto">
        <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-gray-200 dark:border-gray-700">
          {/* Footer social links */}
          <div className="flex flex-col justify-center items-center mb-12 sm:mb-28">
            <p className="text-3xl sm:text-4xl text-gray-800 dark:text-gray-200 mb-5">
              <b>Follow me</b>
            </p>
            <ul className="flex gap-4 sm:gap-8">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={link.id}
                    className={`text-gray-400 hover:${link.hoverColor} dark:hover:${link.hoverColor} cursor-pointer rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm p-4 duration-300`}
                  >
                    <Icon className="text-xl sm:text-2xl md:text-3xl" />
                  </a>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;