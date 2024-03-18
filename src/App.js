import Layout from './Layout/Layout'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Page/Home/Home'
import Users from './Page/Users/User'
// import Gyms from './Pages/Gyms/Gyms'
// import Gymprofile from './Pages/Gyms/GymProfile'
// import AddGyms from './Pages/Gyms/AddGyms'
// import Plan from './Pages/Plan/Plan'
// import Notification from './Pages/Notification/Notification'
// import Support from './Pages/Support/Support'
// import FeedBack from './Pages/Feedback/Feedback'
// import Login from './Pages/Login/Login'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='users' element={<Users />} />
      {/* <Route path='gyms' element={<Gyms />} />
      <Route path='gymprofile' element={<Gymprofile />} />
      <Route path='addgyms' element={<AddGyms />} />
      <Route path='plan' element={<Plan />} />
      <Route path='notification' element={<Notification />} />
      <Route path='support' element={<Support />} />
      <Route path='feedback' element={<FeedBack />} />
      <Route path='login' element={<Login />} /> */}
    </Route>
  )
)
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
