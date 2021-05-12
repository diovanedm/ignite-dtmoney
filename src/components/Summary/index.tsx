import { useContext } from "react";
import { Container } from "./styles";
import  income  from "../../assets/income.svg"
import  outcome  from "../../assets/outcome.svg"
import  total  from "../../assets/total.svg"
import { useTransaction } from "../../hooks/useTransactions";


export function Summary() {
    const { transactions } = useTransaction();
    
    // const totalDeposit = transactions.reduce((acc, transaction) => {
    //     if (transaction.type === 'deposit') {
    //         return acc + transaction.amount; 
    //     }

    //     return acc;
    // }, 0)

    const sumary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws -= transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={income} alt="Entradas" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format( sumary.deposits )}                
                </strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcome} alt="Saídas" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format( sumary.withdraws )}                
                </strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format( sumary.total )}  
                </strong>
            </div>
        </Container>
    )
}