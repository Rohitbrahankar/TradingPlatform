package com.treding_backend.service;

import com.treding_backend.model.CoinDTO;
import com.treding_backend.response.ApiResponse;

public interface ChatBotService {
    ApiResponse getCoinDetails(String coinName);

    CoinDTO getCoinByName(String coinName);

    String simpleChat(String prompt);
}
