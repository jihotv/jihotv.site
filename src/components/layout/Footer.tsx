const Footer = () => {
  return (
    <footer className="footer border-t border-gray-300 py-8 mt-16">
      <div className="container mx-auto text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} jihotv. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
