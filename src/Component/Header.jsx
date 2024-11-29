export const Header = () => {
    return (
        <header id="body-header">
            <nav>

                <div className="dropdown-menu text-right">
                    <div className="bars">
                        <i className="fas fa-bars"></i>
                    </div>
                    <div className="dropdown-list nav-menu">
                        <ul className="no-list-style">
                            <li >
                                <a href="/"> Home </a>
                            </li>
                            <li>
                                <a href="#about"> About </a>
                            </li>
                            <li>
                                <a href="#skills"> Skills </a>
                            </li>
                            <li>
                            <a href="#certificate">Certificate</a>
                            </li>
                            <li>
                                <a href="#education">Education</a>
                            </li>
                            <li>
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <ul className="no-list-style horizontal-list text-center nav-menu">
                    <li>
                        <a href="/"> Home </a>
                    </li>
                    <li>
                        <a href="#about"> About </a>
                    </li>
                    <li>
                        <a href="#skills"> Skills </a>
                    </li>
                    <li>
                        <a href="#certificate">Certificate</a>
                    </li>
                    <li>
                        <a href="#education">Education</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>

            </nav>
            <div id="name-social-container">
                <div className="text-center">
                    <h1 id="my-name">Rohit Bisht</h1>
                </div>
                <div>
                    <ul className="no-list-style horizontal-list text-center social-icons">
                        <li>
                            <a href="https://www.linkedin.com/in/rohit-bisht-578b73239/">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://stackoverflow.com/users/28496159/rohit-bisht">
                                <i className="fab fa-stack-overflow"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/rohitbisht-coder">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                    </ul>

                </div>

            </div>
        </header>

    )
}