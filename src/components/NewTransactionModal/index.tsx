import Modal from 'react-modal'

interface propsNewTransactionModal {
    isNewTransactionModalOpen: boolean
    handleCloseNewTransactionModal: () => void
}

export function NewTransactionModal({ isNewTransactionModalOpen, handleCloseNewTransactionModal}: propsNewTransactionModal) {
    return (
        <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
            <h2>Cadastrar Transação</h2>
        </Modal>
        
    )
}