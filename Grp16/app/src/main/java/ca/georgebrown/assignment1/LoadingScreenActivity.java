package ca.georgebrown.assignment1;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import androidx.appcompat.app.AppCompatActivity;

public class LoadingScreenActivity extends AppCompatActivity {

    private static final int SPLASH_TIMEOUT = 5000; // 3 seconds


    // When App is created will run loading screen layout file
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.loading_screen_layout);
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                // Start the main activity
                Intent mainIntent = new Intent(LoadingScreenActivity.this, MainActivity.class);
                startActivity(mainIntent);

                // Close the loading screen activity
                finish();
            }
        }, SPLASH_TIMEOUT);

    }
}
