package com.example.helloworld;

import android.os.Bundle;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    private int mCount = 0;
    private TextView mShowCount;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mShowCount = findViewById(R.id.show_cout);
    }

    public void showToast(View view) {
        Toast toast = Toast.makeText(this, R.string.message, Toast.LENGTH_SHORT);
        toast.show();
    }

    public void showUp(View view) {
        mCount ++;
        mShowCount.setText(Integer.toString(mCount));
    }
}
