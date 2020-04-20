package com.example.btvnb7.api;



import com.example.btvnb7.models.GetWeatherResponse;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Query;

public interface ApiService {
    @GET("weather")
    Call<GetWeatherResponse> search(@Query("q") String cityName,
                                    @Query("appid") String apikey);
}
