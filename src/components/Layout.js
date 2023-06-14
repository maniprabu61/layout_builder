import { useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

function Layout({Children}) {
  const {header,headerTab,footer} = useSelector(state=>state.header.value);
  console.log('ssss',header)
    return (
      <div className="Layout">
        {header && <Header/>}
        {headerTab && <Nav/>}
        {Children}
        {footer && <Footer/>}
      </div>
    );
  }
  
  export default Layout;