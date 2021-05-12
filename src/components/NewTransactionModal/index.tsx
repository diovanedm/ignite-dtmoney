import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import close from '../../assets/close.svg'
import { Container, RadioBox, TransactionTypeContainers } from './styles'
import { api } from '../../services/api'

interface propsNewTransactionModal {
    isNewTransactionModalOpen: boolean
    handleCloseNewTransactionModal: () => void
}

export function NewTransactionModal({ isNewTransactionModalOpen, handleCloseNewTransactionModal}: propsNewTransactionModal) {
    const [type, setType] = useState('deposit')
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        const data = {
            type,
            title, 
            value, 
            category
        }

        api.post('/transactions', data)
    }

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
                    <img src={close} alt="Fechar modal" 
            />
            </button>


            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                
                <input 
                    placeholder="Título" 
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input 
                    type="number" 
                    placeholder="Valor" 
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                />

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


                <input 
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                
                <button 
                    type="submit">Cadastrar
                </button>

            </Container>         

        
        </Modal>
        
    )
}