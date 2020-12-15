package com.streamingfilm;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import android.view.View;
import android.content.Intent;
import android.content.res.Configuration;

public class MainActivity extends ReactActivity {

 
      /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "StreamingFilm";
  }
  
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    hideNavigationBar();
  }
  
  @Override
  public void onWindowFocusChanged(boolean hasFocus) {
    super.onWindowFocusChanged(hasFocus);
    if (hasFocus) {
      hideNavigationBar();
    }
  }
  
  private void hideNavigationBar() {
    getWindow().getDecorView().setSystemUiVisibility(
      View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
      | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
    }
  
  @Override
  public void onConfigurationChanged(Configuration newConfig) {
      super.onConfigurationChanged(newConfig);
      Intent intent = new Intent("onConfigurationChanged");
      intent.putExtra("newConfig", newConfig);
      this.sendBroadcast(intent);
  }

  // @Override
  //     public void onConfigurationChanged(Configuration newConfig) {
  //       super.onConfigurationChanged(newConfig);
  //       Intent intent = new Intent("onConfigurationChanged");
  //       intent.putExtra("newConfig", newConfig);
  //       this.sendBroadcast(intent);
  //   }
 
}
