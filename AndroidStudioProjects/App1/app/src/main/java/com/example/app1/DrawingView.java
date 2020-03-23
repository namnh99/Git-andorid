package com.example.app1;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Path;
import android.util.AttributeSet;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;

import androidx.annotation.Nullable;

import static android.content.ContentValues.TAG;

public class DrawingView extends View {
    private static final String TAG = "DrawingView";
    private Canvas canvas;
    private Path path;
    private Paint paint;
    private int currentColor;
    private int currenSize;
    private Bitmap bitmap;


    public DrawingView(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);

        //setBackgroundColor(Color.GRAY);
        canvas = new Canvas();
        path = new Path();
        paint = new Paint();

        paint.setAntiAlias(true);
        paint.setStyle(Paint.Style.STROKE);
        paint.setStrokeJoin(Paint.Join.ROUND);
        paint.setStrokeCap(Paint.Cap.ROUND);

    }

    @Override
    protected void onSizeChanged(int w, int h, int oldw, int oldh) {
        super.onSizeChanged(w, h, oldw, oldh);

        bitmap = Bitmap.createBitmap(w, h, Bitmap.Config.ARGB_8888);
        canvas = new Canvas(bitmap);
    }

    public void setCurrentColor(int currentColor) {
        this.currentColor = currentColor;
    }

    public void setCurrenSize(int currenSize) {
        this.currenSize = currenSize;
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        canvas.drawBitmap(bitmap, 0,0, paint);
        canvas.drawPath(path, paint);
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        switch (event.getAction()) {
            case MotionEvent.ACTION_DOWN:

                paint.setColor(currentColor);
                paint.setStrokeWidth(currenSize);
                path.moveTo(event.getX(), event.getY());
                Log.d(TAG, "onTouchEvent: DOWN" + event.getX() + " " + event.getY());
                break;
            case MotionEvent.ACTION_UP:
                Log.d(TAG, "onTouchEvent:] UP" + event.getX() + " " + event.getY());
                canvas.drawPath(path, paint);
                path.reset();
                break;
            case MotionEvent.ACTION_MOVE:

                path.lineTo(event.getX(), event.getY());
                Log.d(TAG, "onTouchEvent: MOVE" + event.getX() + " " + event.getY());
                break;
        }

        invalidate();

        return true;
    }
}
