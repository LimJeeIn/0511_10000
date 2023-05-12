import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';
import { useState } from 'react';

function App() {
  const [modalShow, setModalShow] = useState(false);

  function modalClose() {
    setModalShow(false);
  }
  function modalOpen() {
    setModalShow(true);
  }

  return (
    <div id='app'>
      <Header />
      {/*   props이름={전달될 값} / modalOpen이라는 이름으로 Main.jsx에서 받을수 있다*/}
      <Main modalOpen={modalOpen} />
      <Footer />
      {/* modalClose를 Modal.jsx로 파견보낸다 */}
      {/* setModalShow(false);니까  modalShow에 false가 전달되서 결국 아무것도 안보이게 된다*/}
      {modalShow && <Modal modalClose={modalClose} />}
    </div>
  );
}
export default App;
