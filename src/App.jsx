import { memo, useEffect } from 'react';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';

import {routers,unAuthRouter} from 'router/router';
import './App.css'
import { useDispatch } from 'react-redux';
import { actionGetMyProfile } from 'store/profile/action';
import { axiosAdmin } from 'helper/axiosClient';
import { LOCATIONS } from 'constants/index';

function App() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  useEffect(() => {

    // getUserProfile();
    dispatch(actionGetMyProfile());
  }, [dispatch]);

  const token = window.localStorage.getItem('TOKEN');
  useEffect(() => {
    if (token) {
      axiosAdmin.defaults.headers.Authorization = `Bearer ${token}`;
    } else {
      navigate(LOCATIONS.LOGIN);
    }
  }, []);
  return !token?(
    
    <div className='App'>
    <Routes>
      {
        unAuthRouter.map((r, idx) => {
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
    </div>
  ):(
    <div className='App'>
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
    </div>
  )
}

export default memo(App);
