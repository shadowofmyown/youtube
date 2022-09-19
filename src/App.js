import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Feed,ChannelDetail,Navbar,SearchFeed,VideoDetail} from './components';

import "./index.css";

const App = () => (
<BrowserRouter>
<box sx={{backgroundColor:"#000"}}>
  <Navbar/>
  <Routes>
    <Route path="/" exact element={<Feed/>}/>
    <Route path="/video/:id" element={<VideoDetail/>}/>
    <Route path="/channel/:id"  element={<ChannelDetail/>}/>
    <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
  </Routes>
</box>
</BrowserRouter>
)
 
  


export default App