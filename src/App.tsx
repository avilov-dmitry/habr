import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Modal } from './components/Modal/Modal';
import { counterDecrementedActions, counterIncrementedActions } from './redux';
import { getCountSelector } from './redux/selector';

const CLASS_NAME = 'App';

function App({ count }: any) {
  const [isOpened, setOpenModal] = useState(false);
  const [isSuperOpened, setSuperOpenModal] = useState(false);

  const handleOpenModal = useCallback(() => setOpenModal(true), []);
  const handleCloseModal = useCallback(() => setOpenModal(false), []);
  const handleSuperOpenModal = useCallback(() => setSuperOpenModal(true), []);
  const handleSuperCloseModal = useCallback(() => setSuperOpenModal(false), []);

  return (
    <div className={CLASS_NAME}>
      <header className={`${CLASS_NAME}-header`}>
        <button onClick={handleOpenModal} type="button">
          Open modal
        </button>
      </header>

      {isOpened && (
        <Modal isOpened={isOpened} onClose={handleCloseModal}>
          Контент
          <button onClick={handleSuperOpenModal} type="button">
            Open super-modal
          </button>
        </Modal>
      )}
      {isSuperOpened && (
        <Modal isOpened={isSuperOpened} onClose={handleSuperCloseModal}>
          Super-Контент
        </Modal>
      )}
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  count: getCountSelector(state)
});

const mapDispatchToProps = {
  onIncrement: counterIncrementedActions,
  onDecrement: counterDecrementedActions
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
