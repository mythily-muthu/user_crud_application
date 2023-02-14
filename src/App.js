import Content from './layout/Content';
import Footer from './layout/Footer';
import Header from './layout/Header';


function App() {
  return (
    <div className="w-screen h-screen bg-green-200 flex flex-col ">

      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
