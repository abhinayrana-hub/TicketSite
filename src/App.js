import './App.css';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Queues, CreateTicket } from './pages';
// import Queues from './pages';
// import CreateTicket from './pages';
import { useStateContext } from './contexts/ContextProvider';

function App() {

  const{activeMenu} = useStateContext();

 


  return (
    <div className='min-w-full min-h-screen  h-screen overflow-hidden bg-white'>
      <BrowserRouter>
      <TopBar />
      <div className="flex relative dark:bg-main-dark-bg">

          {/* <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg w-full ">
            <TopBar />
          </div> */}
          
      
      {/* <div className="w-50 fixed bg-gradient-to-r from-gray-100
    to-gray-50">
              <SideBar />
            </div> */}
            
            
            {activeMenu ? (
            <div className="w-70 fixed bg-gradient-to-r from-gray-100
            to-gray-50">
              <SideBar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <SideBar />
            </div>
          )}
          <div
            className={ `flex flex-col dark:bg-main-dark-bg  bg-main-bg min-h-screen mr-12  w-4/5 ${activeMenu ? 'md:ml-[202px]' : 'flex-2'
          }`
            }
          >

            
            <div >
              {/* {themeSettings && (<ThemeSettings />)} */}

               <Routes>
                                {/* pages  */}
                                <Route path="/" element={<Queues />} />
                                <Route path="/queues" element={<Queues /> } />
                                <Route path="/createticket" element={<CreateTicket />} />
                                {/* <Route path="/createticket" element={<Popup 
                                openPopup = {openPopup} 
                                setOpenPopup = {setOpenPopup}>
                                  <CreateTicket /> 
                                </Popup>} /> */}
                                {/* <Route path="/board" element={<Board />} />
                                <Route path="schedule" element={<Schedule />} />
                                <Route path="/report" element={<Report />} />
                                <Route path="/settings" element={<Settings />} /> */}
                  </Routes>
                  </div>
                            
            </div>
            </div>
            </BrowserRouter>
    </div>
  );
}

export default App;
