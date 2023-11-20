package ca.georgebrown.assignment1;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

public class AboutActivity extends AppCompatActivity {

//    Creates toolbar on top
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_about);

        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        ActionBar actionBar = getSupportActionBar();
        if (actionBar != null) {
            actionBar.setDisplayHomeAsUpEnabled(true);
        }

//        Array of Students
        String[] studentInfo =
                {
                    "Student Name: Jon \nStudent Id: 101124255\n",
                    "\nStudent Name: Adina \nStudent Id: 101391769\n",
                    "\nStudent Name: Khadija\nStudent Id: 101240746\n",
                    "\nStudent Name: Sabirin \nStudent Id: 101363605\n",
                }
        ;

        ListView listView = findViewById(R.id.listView);
        ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, studentInfo);
        listView.setAdapter(adapter);
    }
}