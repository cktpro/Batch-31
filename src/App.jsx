import { memo, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import routers from 'router/router';
import './App.css'
import { useDispatch } from 'react-redux';
import { actionGetMyProfile } from 'store/profile/action';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // getUserProfile();
    dispatch(actionGetMyProfile());
  }, [dispatch]);
  
  return (
    
    <div className='App'>
      <BrowserRouter>
    <Routes>
      {
        routers.map((r, idx) => {
          if (r.children && r.children.length > 0) {
            return (
              <Route path={r.path} element={r.element} key={idx}>
                {
                  r.children.map((rc, index) => {
                    if (rc.isRoot) {
                      return <Route index element={rc.element} key={index} />
                    }

                    return <Route path={rc.path} element={rc.element} key={index} />
                  })
                }
              </Route>
            )
          }

          return <Route path={r.path} element={r.element} key={idx}/>
        })
      }
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default memo(App);
