// boilerplate code from class activites
// We import useState and useEffect in our component
import React, { useEffect, useState } from "react"
import Home from "./pages/home";
import About from "./pages/about";
import Header from "./header";
import Footer from "./footer";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";
import Contact from "./pages/contact";

export default function PageContainer() {
  // When the page loads, set the document title to something specific to this app.
  // This only runs once because of our empty dependency array.
  useEffect(() => {
    document.title = 'Portfolio';
  }, []);

  // this sets the useState for the page, and allows for changing the displayed page
  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
          return <Contact />;
      case "Resume":
          return <Resume />;
      default:
        return <Home />;
    }
  }
  // background image made by Erol Ahmed, downloaded from unsplash.com
  return (
    <div className="ui container" style={{ backgroundImage: "url(/img/erol-ahmed-jIZmcB5UIrQ-unsplash.jpg)"}}>
      {/* Here is the Header. currentPage and handlePageChange are props */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      <div className="ui grid">
        { renderPage() }
      </div>
      {/* Here is the Footer */}
      <Footer />
    </div>
  );
}