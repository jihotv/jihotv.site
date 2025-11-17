const Footer = () => {
  return (
    <footer className="footer border-t border-gray-200 py-12 mt-24">
      <div className="container max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs md:text-sm text-gray-400 tracking-wide">
          &copy; {new Date().getFullYear()} jihotv. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
