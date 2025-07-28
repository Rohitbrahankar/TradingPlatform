package com.treding_backend.service;

import com.treding_backend.domain.WalletTransactionType;
import com.treding_backend.model.Wallet;
import com.treding_backend.model.WalletTransaction;

import java.util.List;

public interface WalletTransactionService {
    WalletTransaction createTransaction(Wallet wallet,
                                        WalletTransactionType type,
                                        String transferId,
                                        String purpose,
                                        Long amount
    );

    List<WalletTransaction> getTransactions(Wallet wallet, WalletTransactionType type);

}
