import Modal from 'react-modal'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import close from '../../assets/close.svg'
import { Container, RadioBox, TransactionTypeContainers } from './styles'
import { useState } from 'react'

interface propsNewTransactionModal {
    isNewTransactionModalOpen: boolean
    handleCloseNewTransactionModal: () => void
}

export function NewTransactionModal({ isNewTransactionModalOpen, handleCloseNewTransactionModal}: propsNewTransactionModal) {
    const [type, setType] = useState('deposit')

    return (
        <Modal 
            isOpen={isNewTransactionModalOpen} 
            onRequestClose={handleCloseNewTransactionModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button
                type="button"
                onClick={handleCloseNewTransactionModal}
                className="react-modal-close">
                    <img src={close} alt="Fechar modal" />
            </button>
            <Container>
                <h2>Cadastrar transação</h2>

                
                <input placeholder="Título" />
                <input type="number" placeholder="Valor" />
                <TransactionTypeContainers>
                    <RadioBox 
                        type="button" 
                        onClick={() => {setType('deposit')}}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox 
                        type="button" 
                        onClick={() => {setType('withdraw')}}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainers>
                <input placeholder="Categoria"/>
                <button type="submit">Cadastrar</button>
            </Container>           

        
        </Modal>
        
    )
}