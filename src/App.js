import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Coursescert from './components/Coursescert';
import ContactModal from './components/ContactModal'; // Import the ContactModal component

Modal.setAppElement('#root');

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setContactModalOpen(false); // Close the contact modal as well
  };

  const openContactModal = () => {
    setContactModalOpen(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-left">pOrTfOlIo</h1>
        <button className="contact-button" onClick={openContactModal}>cOnTaCt Me</button>

        <ContactModal
          isOpen={isContactModalOpen}
          onClose={closeModal}
        />

      </header>
      <div className="cards-container">
        <div className="card" onClick={() => openModal(<Home />)}>
          <h3>hOmE</h3>
          <p>Click to view details</p>
        </div>
        <div className="card" onClick={() => openModal(<About />)}>
          <h3>aBoUt</h3>
          <p>Click to view details</p>
        </div>
        <div className="card" onClick={() => openModal(<Experience />)}>
          <h3>eXpErIeNcE</h3>
          <p>Click to view details</p>
        </div>
        <div className="card" onClick={() => openModal(<Education />)}>
          <h3>eDuCaTiOn</h3>
          <p>Click to view details</p>
        </div>
        <div className="card" onClick={() => openModal(<Projects />)}>
          <h3>pRoJeCtS</h3>
          <p>Click to view details</p>
        </div>
        <div className="card" onClick={() => openModal(<Coursescert />)}>
          <h3>cOuRsE aNd CeRtIfIcAtIoNs</h3>
          <p>Click to view details</p>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen && !isContactModalOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="modal-content">
          {modalContent}
          <button onClick={closeModal}>Close</button>
        </div>
      </Modal>
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;
