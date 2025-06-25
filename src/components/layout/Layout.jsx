import Header from "./Header";
import SideBar from "./SideBar";
import Explorer from './Explorer'
import EditorFile from "./EditorFIle";

const Layout = ({ children}) => {
  const numbers = Array.from({ length: 24 }, (_, i) => i + 1);
  return (
    <div className="w-[100%] h-[100vh] bg-layout-bg flex flex-col">
      <Header></Header>
      <div className="w-[100%] h-[100%] flex">
          <SideBar></SideBar>
          <Explorer></Explorer>
          <div className='ml-[0.7vh] w-[100%] h-[100%] bg-black-bg rounded-[0.7vh] flex flex-col'>
            <EditorFile></EditorFile>
            <div className="w-[100%] h-[100%] flex justify-start"> 
              <div className="flex flex-col h-[100%] w-[5vh] items-center gap-[1vh] border-r-[0.1vh] border-[#94A3B8]">
                {numbers.map((num) => (
                  <p key={num} className="text-[#94A3B8] text-ms font-[Space_Mono]">
                    {num}
                  </p>
                ))}
              </div>
              <div className="w-[100%] h-[100%] font-[Space_Mono] ml-[1.5vh]">
                {children}
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Layout;