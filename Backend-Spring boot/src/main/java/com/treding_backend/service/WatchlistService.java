package com.treding_backend.service;

import com.treding_backend.model.Coin;
import com.treding_backend.model.User;
import com.treding_backend.model.Watchlist;

public interface WatchlistService {

    Watchlist findUserWatchlist(Long userId) throws Exception;

    Watchlist createWatchList(User user);

    Watchlist findById(Long id) throws Exception;

    Coin addItemToWatchlist(Coin coin,User user) throws Exception;
}
