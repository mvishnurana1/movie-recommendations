import ReactModal from 'react-modal';
import './AppModal.scss';

function AppModal({
    closeModal,
    data,
    isModalOpen,
}) {
    console.log('Film DATA: ', data);

    return <ReactModal
                // className={'modal'}
                ariaHideApp={false}
                isOpen={isModalOpen} 
                onRequestClose={closeModal}>
        <div className='flex-top'>
            <h2 style={{color: 'black'}}>Movie Info:</h2>
            <button onClick={() => closeModal()}>Close</button>
        </div>
    </ReactModal>
}

export default AppModal;
