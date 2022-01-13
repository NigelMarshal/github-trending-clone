function Header() {
  return (
    <header className="text-center py-10   border-gh-border border-b bg-gh-gray-900">
      <div className="container lg:container mx-auto ">
        <h1 className="text-2xl text-gh-gray-500 font-semibold">Trending</h1>
        <p className="text-base text-gh-gray-100">
          See what the GitHub community is most excited about today.
        </p>
      </div>
    </header>
  );
}

export default Header;
