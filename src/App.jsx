import Introduction from './components/Introduction'
import About from './components/About'
import Navbar from './components/Navbar'
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
		<div style={{paddingBottom: '100px'}}>
			<Navbar />
			<Introduction />
			<About />
			<Skills />
			<Contact />
		</div>
	</>
  );
}

export default App;
