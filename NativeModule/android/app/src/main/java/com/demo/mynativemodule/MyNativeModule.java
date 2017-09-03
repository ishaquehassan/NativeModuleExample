package com.demo.mynativemodule;

import android.os.Handler;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by Ishaq Hassan on 9/3/2017.
 */

public class MyNativeModule extends ReactContextBaseJavaModule {
    public MyNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void showMyToast(final String msg, Integer delay, final Callback callback){
        Toast.makeText(getCurrentActivity(),msg,Toast.LENGTH_SHORT).show();
        Handler h = new Handler();
        h.postDelayed(new Runnable() {
            @Override
            public void run() {
                callback.invoke(msg);
            }
        },delay);
    }

    @Override
    public String getName() {
        return "MyNativeModule";
    }
}
