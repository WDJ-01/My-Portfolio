import { Nav } from './nav';
import { Main } from '../src/components/Main/main';
import NavProvider from './context/NavContext';

function App() {
	return (
		<div className='appContainer'>
			<NavProvider>
				<Nav />
				<Main />
			</NavProvider>
		</div>
	);
}

export default App;


// import { Home } from "./components/Home/home";
// import { Contacts } from "./components/Contacts/contacts";
// import { About } from "./components/About/about";
// import { Projects } from "./components/Projects/projects";
// import { Nav } from "./components/Nav/nav";


// function App() {
//   return (
//     <div>
//         <Nav/>   
//         <Home />
//         <About />
//         <Projects />
//         <Contacts />
//     </div>
//   );
// }

// export default App;
