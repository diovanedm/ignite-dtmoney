import React, { useState } from "react";
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root")

export function App() {

    // Modal -------------------------------------------------------------------------
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }
    // X Modal ------------------------------------------------------------------------
    return (
        <TransactionsProvider>

            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
            <Dashboard />

            <NewTransactionModal 
                isNewTransactionModalOpen={isNewTransactionModalOpen}
                handleCloseNewTransactionModal={handleCloseNewTransactionModal}
            />
            <GlobalStyle />
        </TransactionsProvider>
    )
}