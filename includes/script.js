var actual_project;
var actual_project_btn;
var actual_project_btn_s;
var actual_time_start;

function not_comma() {
    var e = event || window.event;  // get event object
    var key = e.keyCode || e.which; // get key cross-browser
    // console.log(key);

    if (key == 188 || key == 55) { //if it is not a number ascii code
        //Prevent default action, which is inserting character
        if (e.preventDefault) e.preventDefault(); //normal browsers
        e.returnValue = false; //IE
    }
}



function set_actual_project(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText);
      last_line = this.responseText;
      // console.log(actual_project);
      // console.log("lastline: " + last_line);
      var values = last_line.split(",");
      actual_project = values[0];
      actual_time_start = values[2];
      
      actual_project_btn = "btn_"+actual_project;
      actual_project_btn_s = "btn_"+actual_project+"_s";
      document.getElementById(actual_project_btn_s).className = 'spinner-border spinner-border-sm';
      document.getElementById(actual_project_btn).className = 'btn btn-primary btn-block';
    }
  }
  xmlhttp.open("GET", "includes/timer.php?fun=" + "setproject", true);
  xmlhttp.send();
  
}

function write_hour(project) {
  var task_bar = document.getElementById("developed_tasks_bar").value;
  if (actual_project==project){
    console.log("trabajando...");
  } else {
    console.log("new project: " + project);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // console.log(this.responseText);
        // document.getElementById("txtHint").innerHTML = this.responseText;
        actual_project = project;
        document.getElementById("developed_tasks_bar").value="";
        // console.log("hola");
      }
    }
    // xmlhttp.open("GET", "includes/timer.php?fun=" + "write_hour" + actual_time_start + project, true);
    console.log("actual_time_start: " + actual_time_start);
    console.log("task_bar: " + task_bar);
    xmlhttp.open("GET", "includes/timer.php?fun=" + "write_hour" +
      "&time=" + actual_time_start +
      "&project=" + project + 
      "&text=" + task_bar + 
      "&actual=" + actual_project, true);
    xmlhttp.send();
  }
}


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML +=
      this.responseText;
    }
  }
  xhttp.open("GET", "includes/times.csv", true);
  xhttp.send();
}

function button_nada() {
  write_hour("nada");
  remove_spinner_btns();
  document.getElementById("btn_nada_s").className = 'spinner-border spinner-border-sm';
  document.getElementById("btn_nada").className = 'btn btn-primary btn-block';
}

function button_lanche() {
  write_hour("lanche");
  remove_spinner_btns();
  document.getElementById("btn_lanche_s").className = 'spinner-border spinner-border-sm';
  document.getElementById("btn_lanche").className = 'btn btn-primary btn-block';

}

function button_comer() {
    write_hour("comer");
    remove_spinner_btns();
    document.getElementById("btn_comer_s").className = 'spinner-border spinner-border-sm';
    document.getElementById("btn_comer").className = 'btn btn-primary btn-block';
  
}

function button_nlp() {
  write_hour("nlp");
  remove_spinner_btns();
  document.getElementById("btn_nlp_s").className = 'spinner-border spinner-border-sm';
  document.getElementById("btn_nlp").className = 'btn btn-primary btn-block';

}

function button_proxy() {
  write_hour("proxy");
  remove_spinner_btns();
  document.getElementById("btn_proxy_s").className = 'spinner-border spinner-border-sm';
  document.getElementById("btn_proxy").className = 'btn btn-primary btn-block';
  
}

function button_ocr() {
  write_hour("ocr");
  remove_spinner_btns();
  document.getElementById("btn_ocr_s").className = 'spinner-border spinner-border-sm';
  document.getElementById("btn_ocr").className = 'btn btn-primary btn-block';
  
}

function button_postdoc() {
  write_hour("postdoc");
  remove_spinner_btns();
  document.getElementById("btn_postdoc_s").className = 'spinner-border spinner-border-sm';
  document.getElementById("btn_postdoc").className = 'btn btn-primary btn-block';
  
}

function button_ejercicios() {
  write_hour("ejercicios");
  remove_spinner_btns();
  document.getElementById("btn_ejercicios_s").className = 'spinner-border spinner-border-sm';
  document.getElementById("btn_ejercicios").className = 'btn btn-primary btn-block';
  
}

function button_estudiar() {
  write_hour("estudiar");
  remove_spinner_btns();
  document.getElementById("btn_estudiar_s").className = 'spinner-border spinner-border-sm';
  document.getElementById("btn_estudiar").className = 'btn btn-primary btn-block';
  
}

function button_outros() {
  write_hour("outros");
  remove_spinner_btns();
  document.getElementById("btn_outros_s").className = 'spinner-border spinner-border-sm';
  document.getElementById("btn_outros").className = 'btn btn-primary btn-block';
  
}

function remove_spinner_btns(){
  var project_buttons_span = ["btn_nada_s", "btn_lanche_s", "btn_comer_s", "btn_nlp_s", "btn_proxy_s", "btn_ocr_s", "btn_postdoc_s", "btn_ejercicios_s", "btn_estudiar_s", "btn_outros_s"];
  for (buttons_span in project_buttons_span) {
    document.getElementById(project_buttons_span[buttons_span]).className = '';
  }
  var project_buttons = ["btn_nada", "btn_lanche", "btn_comer", "btn_nlp", "btn_proxy", "btn_ocr", "btn_postdoc", "btn_ejercicios", "btn_estudiar", "btn_outros"];
  for (buttons in project_buttons) {
    document.getElementById(project_buttons[buttons]).className = 'btn btn-secondary btn-block';
  }
}

function set_drawchart() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText);
      last_line = this.responseText;
      // console.log(actual_project);
      console.log("lastline: " + last_line);
      // var values = last_line.split(",");
      // actual_project = values[0];
      // actual_time_start = values[2];
      
      // actual_project_btn = "btn_"+actual_project;
      // actual_project_btn_s = "btn_"+actual_project+"_s";
      // document.getElementById(actual_project_btn_s).className = 'spinner-border spinner-border-sm';
      // document.getElementById(actual_project_btn).className = 'btn btn-primary btn-block';
    }
  }
  xmlhttp.open("GET", "includes/timer.php?fun=" + "read_all", true);
  xmlhttp.send();
}



function drawChart() {
// console.log("ini draw");

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // console.log(this.responseText);
    // console.log(actual_project);
    // console.log("resposta: " + this.responseText);

    Papa.parse(this.responseText, {
      complete: function(results) {
        // console.log("Finished:", results.data.length);
        var container = document.getElementById('chart_div');
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn({ type: 'string', id: 'Position' });
        dataTable.addColumn({ type: 'string', id: 'Name' });
        dataTable.addColumn({ type: 'string', role: 'tooltip' });
        dataTable.addColumn({ type: 'string', id: 'style', role: 'style' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });

        var d = new Date('2019 2 30');
        var n = d.getDay();
        // console.log(d.getDay());
        // console.log("------");
        var actualdate = new Date();
        // console.log(actualdate.getFullYear());
        // console.log(actualdate.getMonth() + 1);
        // console.log(actualdate.getDate());
        // console.log(actualdate.getHours());
        // console.log(actualdate.getMinutes());
        // console.log(actualdate.getSeconds());

        // for (i = results.data.length-2; i > results.data.length-10; i--) {
        //   console.log("val: ", i);
        // }



        day_str = "dia " + n;
        var name_day = convert_day(n);
        // console.log(name_day);
        // for (i = 1; i < results.data.length-2; i++) {
        for (i = results.data.length-3; i > 1; i--) {
        // for (i = 90; i > 80; i--) {
        // for (i = 95; i < 102; i++) {

          // check if  start and end activity is from the same day 
          if (parseInt(results.data[i][5]) == parseInt(results.data[i][13])){

            
            
            ye_start = parseInt(results.data[i][3]);
            mo_start = parseInt(results.data[i][4]);
            da_start = parseInt(results.data[i][5]);
            task_day_str = "'" + ye_start.toString() + " " + mo_start.toString() + " " + da_start.toString() + "'";
            var task_day = new Date(task_day_str);
            var number_day = task_day.getDay();
            var name_day = convert_day(number_day) + " - " + da_start + "/" + mo_start + "/" + ye_start;
            // console.log(name_day);

            ye_start = actualdate.getFullYear();
            mo_start = actualdate.getMonth() + 1;
            da_start = actualdate.getDate();
            ho_start = parseInt(results.data[i][6]);
            mi_start = parseInt(results.data[i][7]);
            se_start = parseInt(results.data[i][8]);

            ye_end = parseInt(results.data[i][11]);
            mo_end = parseInt(results.data[i][12]);
            da_end = parseInt(results.data[i][13]);
            ye_end = actualdate.getFullYear();
            mo_end = actualdate.getMonth() + 1;
            da_end = actualdate.getDate();
            ho_end = parseInt(results.data[i][14]);
            mi_end = parseInt(results.data[i][15]);
            se_end = parseInt(results.data[i][16]);

            var html_text = "<div style=\"border: 0px solid\"><h5>" +
              results.data[i][0] + "</h5><p>" +
              ho_start + ":" + mi_start + ":" + se_start + " - " + 
              ho_end + ":" + mi_end + ":" + se_end + "<br><b>" + 
              results.data[i][20] + ":" + results.data[i][21] + ":" + results.data[i][22] + "</b><br>" + 
              results.data[i][23] + "</p></div>";

            dataTable.addRows([[ name_day, results.data[i][0], html_text, '#cbb69d', 
              new Date(ye_start, mo_start, da_start, ho_start, mi_start, se_start),
              new Date(ye_end, mo_end, da_end, ho_end, mi_end, se_end) ]]);

          } else {
            // add the first activity for the day starting at 5:00 am
            // take the end day of the activity of more than one day and set name in name_day
            ye_start = parseInt(results.data[i][11]);
            mo_start = parseInt(results.data[i][12]);
            da_start = parseInt(results.data[i][13]);
            task_day_str = "'" + ye_start.toString() + " " + mo_start.toString() + " " + da_start.toString() + "'";
            var task_day = new Date(task_day_str);
            var number_day = task_day.getDay();
            var name_day = convert_day(number_day) + " - " + da_start + "/" + mo_start + "/" + ye_start;
            
            // set the start time at 5:00 am
            ye_start = actualdate.getFullYear();
            mo_start = actualdate.getMonth() + 1;
            da_start = actualdate.getDate();
            ho_start = 5;
            mi_start = 0;
            se_start = 0;

            // set the task end time
            ye_end = actualdate.getFullYear();
            mo_end = actualdate.getMonth() + 1;
            da_end = actualdate.getDate();
            ho_end = parseInt(results.data[i][14]);
            mi_end = parseInt(results.data[i][15]);
            se_end = parseInt(results.data[i][16]);


            var html_text = "";

            // print the first day task
            dataTable.addRows([[ name_day, results.data[i][0], html_text, '#cbb69d', 
              new Date(ye_start, mo_start, da_start, ho_start, mi_start, se_start),
              new Date(ye_end, mo_end, da_end, ho_end, mi_end, se_end) ]]);


            // add the last task for the day ending at 11:59 am
            // take the end day of the activity of more than one day and set name in name_day
            ye_start = parseInt(results.data[i][3]);
            mo_start = parseInt(results.data[i][4]);
            da_start = parseInt(results.data[i][5]);
            task_day_str = "'" + ye_start.toString() + " " + mo_start.toString() + " " + da_start.toString() + "'";
            var task_day = new Date(task_day_str);
            var number_day = task_day.getDay();
            var name_day = convert_day(number_day) + " - " + da_start + "/" + mo_start + "/" + ye_start;
            
            // set the start time at 8:00 am
            ye_start = actualdate.getFullYear();
            mo_start = actualdate.getMonth() + 1;
            da_start = actualdate.getDate();
            ho_start = parseInt(results.data[i][6]);
            mi_start = parseInt(results.data[i][7]);
            se_start = parseInt(results.data[i][8]);

            // set the task end time
            ye_end = actualdate.getFullYear();
            mo_end = actualdate.getMonth() + 1;
            da_end = actualdate.getDate();
            ho_end = 24;
            mi_end = 0;
            se_end = 0;

            // print the first day task
            dataTable.addRows([[ name_day, results.data[i][0], html_text, '#cbb69d', 
              new Date(ye_start, mo_start, da_start, ho_start, mi_start, se_start),
              new Date(ye_end, mo_end, da_end, ho_end, mi_end, se_end) ]]);


          }
        }

        // print first activity for entire calendar i = 1
        ye_start = parseInt(results.data[i][11]);
        mo_start = parseInt(results.data[i][12]);
        da_start = parseInt(results.data[i][13]);
        task_day_str = "'" + ye_start.toString() + " " + mo_start.toString() + " " + da_start.toString() + "'";
        var task_day = new Date(task_day_str);
        var number_day = task_day.getDay();
        var name_day = convert_day(number_day) + " - " + da_start + "/" + mo_start + "/" + ye_start;
        var color = convert_color(results.data[i][0])
        // set the start time at 5:00 am
        ye_start = actualdate.getFullYear();
        mo_start = actualdate.getMonth() + 1;
        da_start = actualdate.getDate();
        ho_start = 5;
        mi_start = 0;
        se_start = 0;

        // set the task end time
        ye_end = actualdate.getFullYear();
        mo_end = actualdate.getMonth() + 1;
        da_end = actualdate.getDate();
        ho_end = parseInt(results.data[i][14]);
        mi_end = parseInt(results.data[i][15]);
        se_end = parseInt(results.data[i][16]);

        // print the first day task
        dataTable.addRows([[ name_day, results.data[i][0], html_text, color, 
          new Date(ye_start, mo_start, da_start, ho_start, mi_start, se_start),
          new Date(ye_end, mo_end, da_end, ho_end, mi_end, se_end) ]]);



        // draw the table 
        chart.draw(dataTable);
      }
    })
  }
}
xmlhttp.open("GET", "includes/timer.php?fun=" + "read_all", true);
xmlhttp.send();

}

function convert_day(number) {
  var weekday = new Array(7);
  weekday[0] = "Domingo";
  weekday[1] = "Lunes";
  weekday[2] = "Martes";
  weekday[3] = "Miercoles";
  weekday[4] = "Jueves";
  weekday[5] = "Viernes";
  weekday[6] = "Sábado";

  var n = weekday[number];
  return n;
}

function convert_color(task) {
    var color = '#ff00ff'
    if (task == "lanche") {
        var color = '#ff0000'
    }
    
    return color;
  }

function sum_time(time1, time2) {
  var t1 = time1.split(":")
  var t2 = time2.split(":")
  var hs = (parseInt(t1[0])+parseInt(t2[0]));
  var ms = (parseInt(t1[1])+parseInt(t2[1]));
  var ss = (parseInt(t1[2])+parseInt(t2[2]));

  while (ss>=60){
    ss = ss-60;
    ms++;
  }

  while (ms>=60){
    ms = ms-60;
    hs++;
  }

  ss = complete_zero(ss);
  ms = complete_zero(ms);

  return (hs + ":" + ms + ":" + ss);
}


function complete_zero(num) {
    var s = num+"";
    while (s.length < 2) s = "0" + s;
    return s;
}


function count_time() {
  // console.log("ini time");
  var time_org = "0:0:0"
  time_org = sum_time(time_org, "0:1:10");




  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText);
      // console.log(actual_project);
      // console.log("resposta: " + this.responseText);

      Papa.parse(this.responseText, {
        complete: function(results) {
          var total_hours_day = "0:0:0";
          var total_hours_day_l = "0:0:0";
          var total_hours_day_wol = "0:0:0";
          var count_days = 1;
          for (i = results.data.length-3; i > 1; i--) {
            
            if (parseInt(results.data[i][5]) == parseInt(results.data[i][13])){
              
              ht_start = results.data[i][20];
              mt_start = results.data[i][21];
              st_start = results.data[i][22];

              var task_time = ht_start + ":" + mt_start + ":" + st_start;
              total_hours_day = sum_time(total_hours_day, task_time);
              if (results.data[i][0] == "lanche"){
                total_hours_day_l = sum_time(total_hours_day_l, task_time);
              } else{
                total_hours_day_wol = sum_time(total_hours_day_wol, task_time);
              }



              // return the entire day string
              ye_start = parseInt(results.data[i][3]);
              mo_start = parseInt(results.data[i][4]);
              da_start = parseInt(results.data[i][5]);
              task_day_str = "'" + ye_start.toString() + " " + mo_start.toString() + " " + da_start.toString() + "'";
              var task_day = new Date(task_day_str);
              var number_day = task_day.getDay();
              var name_day = convert_day(number_day) + " - " + da_start + "/" + mo_start + "/" + ye_start;


            } else {
              if (count_days==1){
                document.getElementById("times_day_tasks").innerHTML = name_day + " --- Total: " + total_hours_day + " --- Pausas: " + total_hours_day_l + " --- Projetos: " + total_hours_day_wol;
              }
              if (count_days<7){
                console.log(name_day + " - " + total_hours_day + " - " + total_hours_day_l + " - " + total_hours_day_wol);
                count_days++
              }
              var total_hours_day = "0:0:0";
              var total_hours_day_l = "0:0:0";
              var total_hours_day_wol = "0:0:0";


            }
          }
        }
      })
    }
  }
  xmlhttp.open("GET", "includes/timer.php?fun=" + "read_all", true);
  xmlhttp.send();

}