import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer className="container container-lg mt-5">
      <div className="relative flex justify-center py-5 border-t border-gh-border text-gray-500">
        <ul className="flex w-full  text-xs">
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                className="mr-2 mb-2 align-text-bottom inline-block hover:text-gh-gray-100"
                icon="octicon:mark-github-16"
                height={24}
                width={24}
                inline={true}
              />
            </a>
          </li>
          <li className="mr-6 text-gray-400">
            © {new Date().getFullYear()} GitHub, Inc.
          </li>
          <li className="mr-6 text-blue-500 hover:underline">
            <a
              href="https://docs.github.com/en/github/site-policy/github-terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms
            </a>
          </li>
          <li className="mr-6 text-blue-500 hover:underline">
            <a
              href="https://docs.github.com/en/github/site-policy/github-privacy-statement"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy
            </a>
          </li>
          <li className="mr-6 text-blue-500 hover:underline">
            <a
              href="https://github.com/security"
              target="_blank"
              rel="noopener noreferrer"
            >
              Security
            </a>
          </li>
          <li className="mr-6 text-blue-500 hover:underline">
            <a
              href="https://www.githubstatus.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Status
            </a>
          </li>
          <li className="mr-6 text-blue-500 hover:underline">
            <a
              href="https://docs.github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>
          </li>

          <li className="mr-6 text-blue-500 hover:underline">
            <a
              href="https://support.github.com/?tags=dotcom-footer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Github
            </a>
          </li>
          <li className="mr-6 text-blue-500 hover:underline">
            <a
              href="https://github.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pricing
            </a>
          </li>
          <li className="mr-6 text-blue-500 hover:underline">
            <a
              href="https://docs.github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              API
            </a>
          </li>
          <li className="mr-6 text-blue-500 hover:underline">
            <a
              href="https://services.github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Training
            </a>
          </li>
          <li className="mr-6 text-blue-500 hover:underline">
            <a
              href="https://github.blog/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </li>
          <li className="mr-6 text-blue-500 hover:underline">
            <a
              href="https://github.com/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
