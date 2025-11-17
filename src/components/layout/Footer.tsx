const Footer = () => {
  return (
    <footer className="footer py-2 mt-8">
      <div className="container max-w-6xl mx-auto px-8 md:px-12 lg:px-16 text-center">
        <p className="text-xs md:text-sm text-white tracking-wide">
          &copy; {new Date().getFullYear()} jihotv. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
