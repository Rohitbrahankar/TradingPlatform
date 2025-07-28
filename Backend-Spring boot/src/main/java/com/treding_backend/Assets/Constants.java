package com.treding_backend.Assets;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Constants {

    public static String FrontendURL;

    @Value("${frontend.url}")
    public void setFrontendURL(String url) {
        Constants.FrontendURL = url;
    }
}
