import logo from "../img/logo.png";
// import Github from "../img/icons/github-logo_icon-icons.com_73546.svg";
const Layout = (props) => {
  return (
    <div className="Layout">
      <div className="Header">
        <div className="Header__name">
          <img className="Header__img" src={logo} alt="logo" />
          <h2> Note App</h2>
        </div>
        <div className="Header__search">
          <input onChange={props.onChange} placeholder="Search" type="text" />
        </div>
        <div className="Header__made">
          <h2>
            Made by <strong>Heger A. Santos</strong>
          </h2>

          <a
            href="https://github.com/HegerAriasSantos?tab=repositories"
            target="_blank"
            rel="noreferrer noopener"
            className="logo"
          >
            {/* <img src={Github} alt="Github's logo" /> */}
          </a>
        </div>
      </div>

      <div className="Layout__body">{props.children}</div>
    </div>
  );
};

export default Layout;
