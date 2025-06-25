import Header from "./Header";

const Layout = ({ children}) => {
  return (
    <div className="w-[100%] h-[100vh] bg-layout-bg flex flex-col">
        <Header></Header>
      {/* <main className="flex-grow">
        {children}
      </main> */}
      

    </div>
  );
};

export default Layout;