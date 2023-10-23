//import React from 'react'
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const wallets = [new PetraWallet()];
ReactDOM.createRoot(document.getElementById('root')!).render(
  <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
    <App />
  </AptosWalletAdapterProvider>
)
