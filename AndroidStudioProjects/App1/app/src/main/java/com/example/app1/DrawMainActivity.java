package com.example.app1;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

import android.app.ProgressDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.RadioGroup;
import android.widget.Toast;

import com.flask.colorpicker.ColorPickerView;
import com.flask.colorpicker.OnColorSelectedListener;
import com.flask.colorpicker.builder.ColorPickerClickListener;
import com.flask.colorpicker.builder.ColorPickerDialogBuilder;

public class DrawMainActivity extends AppCompatActivity implements View.OnClickListener {

    private ImageView ivColorPicker;
    private RadioGroup rgPenSize;
    private ImageView ivSave;
    private int currentColor;
    private int currentPensize;
    private DrawingView drawingView;
    private ProgressDialog progressDialog;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);

        ivColorPicker = findViewById(R.id.iv_color_picker);
        rgPenSize = findViewById(R.id.rg_pen_size);
        ivSave = findViewById(R.id.iv_save);
        drawingView = findViewById(R.id.drawing_view);
        progressDialog = new ProgressDialog(this);
        ivColorPicker.setOnClickListener(this);
        ivSave.setOnClickListener(this);

        currentColor = ContextCompat.getColor(DrawMainActivity.this, R.color.colorAccent);
        //getResources().getColor(R.color.colorAccent);
        ivColorPicker.setColorFilter(currentColor);

        currentPensize = 10;
        rgPenSize.check(R.id.rg_pen_size);

        rgPenSize.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(RadioGroup group, int checkedId) {
                switch (checkedId) {
                    case R.id.rb_pen_size_normal:
                        currentPensize = 10;
                        break;
                    case R.id.rb_pen_size_thin:
                        currentPensize = 5;
                        break;
                    case R.id.rb_pen_size_strong:
                        currentPensize = 20;
                        break;
                }
                drawingView.setCurrenSize(currentPensize);
                Toast.makeText(DrawMainActivity.this, "pen size", Toast.LENGTH_SHORT).show();
            }
        });
        drawingView.setCurrentColor(currentColor);
        drawingView.setCurrenSize(currentPensize);
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.iv_color_picker:
                showColorPickerDialog();
                break;
            case R.id.iv_save:
                saveImage();
                break;
        }
    }

    private void saveImage() {
        //0.show progress dialong
        ProgressDialog progressDialong = new ProgressDialog(this);
        progressDialong.setMessage("Saving...");
        progressDialong.show();

        //1. get bitmap
        drawingView.setDrawingCacheEnabled(true);
        drawingView.buildDrawingCache();
        Bitmap bitmap = drawingView.getDrawingCache();

        //2. save image
        ImageUtils.saveImage(bitmap, DrawMainActivity.this);

        //3. close activity
        finish();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        progressDialog.dismiss();
        Toast.makeText(this, "Saved!", Toast.LENGTH_SHORT).show();
    }

    private void showColorPickerDialog() {

        ColorPickerDialogBuilder.with(DrawMainActivity.this)
                .setTitle("Choose color")
                .initialColor(currentColor)
                .wheelType(ColorPickerView.WHEEL_TYPE.FLOWER)
                .density(12)
                .setOnColorSelectedListener(new OnColorSelectedListener() {
                    @Override
                    public void onColorSelected(int selectedColor) {
                        Toast.makeText(DrawMainActivity.this, "onColorSelected", Toast.LENGTH_SHORT).show();
                    }
                })
                .setPositiveButton("ok", new ColorPickerClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int selectedColor, Integer[] allColors) {
                        currentColor = selectedColor;
                        drawingView.setCurrentColor(currentColor);
                        ivColorPicker.setColorFilter(currentColor);
                    }
                })
                .setNegativeButton("cancel", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                    }
                })
                .build()
                .show();
    }
}
