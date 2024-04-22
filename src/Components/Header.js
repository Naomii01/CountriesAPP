import Nav from "./Nav";


const Header = () => {

  return (
   
      <div className="h-screen relative" style={{backgroundImage: "url('/images/world.jpg')", backgroundSize: "cover"}}>
           <Nav />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Country API app</h1>
        <p className="text-lg">This is a simple app that allows you to search for countries and continents using the API </p>
        <div className="relative">
          <input type="text" placeholder="Search country by name..." className="w-full max-w-xs px-4 py-2 rounded-md bg-white text-black" />
        </div>
      </div>
    </div>
  );
};

export default Header;