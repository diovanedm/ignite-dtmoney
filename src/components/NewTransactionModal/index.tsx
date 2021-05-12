import { FormEvent, useState, useContext} from 'react'
import Modal from 'react-modal'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { Container, RadioBox, TransactionTypeContainers } from './styles'
import { useTransaction } from '../../hooks/useTransactions'

interface propsNewTransactionModal {
    isNewTransactionModalOpen: boolean
    handleCloseNewTransactionModal: () => void
}

export function NewTransactionModal({ isNewTransactionModalOpen, handleCloseNewTransactionModal}: propsNewTransactionModal) {
    const { createTransaction } = useTransaction()

    const [type, setType] = useState('deposit')
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setType('depostit')
        setTitle('')
        setAmount(0)
        setCategory('')
        handleCloseNewTransactionModal();
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
                    <img src={closeImg} alt="Fechar modal" 
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
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
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